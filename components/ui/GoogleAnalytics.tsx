"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { SECTION_IDS } from "@/lib/constants/sections";
import { getScrollSnapshot, subscribeScroll } from "@/hooks/useScrollMetrics";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";

// Scroll depth checkpoints (% of total page height)
const SCROLL_MILESTONES = [25, 50, 75, 90] as const;
// Active engagement time checkpoints (seconds of visible, active tab time)
const TIME_MILESTONES = [15, 30, 60, 120, 240] as const;

// ---------------------------------------------------------------------------
// BOT DETECTION
// navigator.webdriver is true in every headless Chrome instance (Puppeteer,
// Playwright, Selenium) — the standard tooling for datacenter scrapers.
// ---------------------------------------------------------------------------
function isLikelyBot(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") return true;
  if (navigator.webdriver) return true;
  const botUA = /bot|crawler|spider|scraper|headless|phantomjs|selenium|archiver|slurp|bingpreview|lighthouse|pagespeed/i;
  if (botUA.test(navigator.userAgent)) return true;
  return false;
}

// ---------------------------------------------------------------------------
// LANDING CONTEXT
// Parsed once on mount; persists across SPA navigations via ref.
// ---------------------------------------------------------------------------
function parseLandingContext(): Record<string, string> {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const ctx: Record<string, string> = {};

  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
    const val = params.get(key);
    if (val) ctx[key] = val;
  }

  const ua = navigator.userAgent || "";
  const referrer = document.referrer || "";
  const isLinkedInApp = /LinkedInApp|LinkedIn/i.test(ua);
  const isLinkedInReferrer = /linkedin\.com|lnkd\.in/i.test(referrer);

  if (isLinkedInApp || isLinkedInReferrer) {
    ctx.traffic_source = "linkedin";
    if (!ctx.utm_source) ctx.utm_source = "linkedin";
    if (!ctx.utm_medium) ctx.utm_medium = isLinkedInApp ? "social_app" : "social_web";
  } else if (/google\./i.test(referrer)) {
    ctx.traffic_source = "google_organic";
  } else if (/github\.com/i.test(referrer)) {
    ctx.traffic_source = "github";
  } else if (referrer) {
    try {
      ctx.traffic_source = new URL(referrer).hostname.replace(/^www\./, "");
    } catch {
      ctx.traffic_source = "referral";
    }
  }

  ctx.device_category = /Android|iPhone|iPad|iPod|Mobile/i.test(ua) ? "mobile" : "desktop";
  return ctx;
}

// ---------------------------------------------------------------------------
// SAFE GTAG WRAPPER
// Guards every call so individual trackers do not need inline null checks.
// Exported so interactive components (e.g. FrameworkSection) can fire custom
// events without coupling directly to window.gtag.
// ---------------------------------------------------------------------------
export function trackAnalyticsEvent(event: string, params: Record<string, unknown> = {}) {
  if (!GA_ID || typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, { ...params, send_to: GA_ID });
}

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------
export default function GoogleAnalytics() {
  const pathname = usePathname();
  const isInitialLoad = useRef(true);
  const landingCtx = useRef<Record<string, string>>({});

  // State sets that survive re-renders without triggering them
  const firedScrollMilestones = useRef(new Set<number>());
  const firedSections = useRef(new Set<string>());
  const firedTimeMilestones = useRef(new Set<number>());
  const activeSeconds = useRef(0);
  const sectionEnterTimestamps = useRef(new Map<string, number>());
  const sectionDwellDispatched = useRef(new Set<string>());

  // Capture landing context once on mount (before any effects send events)
  useEffect(() => {
    landingCtx.current = parseLandingContext();
  }, []);

  // ---------------------------------------------------------------------------
  // ENGAGEMENT TRACKING
  // All trackers (scroll depth, dynamic section views + dwell time, active-tab
  // time milestones, and outbound/navigation clicks) are set up after gtag is
  // confirmed ready, then torn down cleanly on unmount.
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!GA_ID || typeof window === "undefined" || isLikelyBot()) return;

    let isMounted = true;
    let unsubscribeScroll: (() => void) | null = null;
    let sectionObserver: IntersectionObserver | null = null;
    let domMutationObserver: MutationObserver | null = null;
    let engagementInterval: ReturnType<typeof setInterval> | null = null;
    const observedElements = new Set<Element>();

    const getSourceLabel = () =>
      landingCtx.current.utm_source ||
      landingCtx.current.traffic_source ||
      "(direct)";

    // --- 1. Scroll Depth Handler (via shared scroll store) ------------------

    const handleScroll = () => {
      if (!isMounted) return;
      const pct = Math.round(getScrollSnapshot().progress * 100);
      for (const milestone of SCROLL_MILESTONES) {
        if (pct >= milestone && !firedScrollMilestones.current.has(milestone)) {
          firedScrollMilestones.current.add(milestone);
          trackAnalyticsEvent("scroll_depth_milestone", {
            depth_percent: milestone,
            sections_viewed: firedSections.current.size,
            traffic_source: getSourceLabel(),
            device: landingCtx.current.device_category,
          });
        }
      }
    };

    // --- 2. Outbound, Patent, & Nav Click Handler ---------------------------

    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const maxDepth = Math.max(0, ...Array.from(firedScrollMilestones.current));

      if (href.includes("linkedin.com")) {
        trackAnalyticsEvent("cta_click", {
          cta_type: "linkedin",
          cta_location: link.closest("nav") ? "navbar" : "footer",
          sections_viewed_before_click: firedSections.current.size,
          active_seconds_before_click: activeSeconds.current,
          max_scroll_depth: maxDepth,
        });
      } else if (href.includes("mailto:")) {
        trackAnalyticsEvent("cta_click", {
          cta_type: "email",
          cta_location: "footer",
          sections_viewed_before_click: firedSections.current.size,
          active_seconds_before_click: activeSeconds.current,
          max_scroll_depth: maxDepth,
        });
      } else if (href.includes("patents.google.com")) {
        trackAnalyticsEvent("cta_click", {
          cta_type: "patent_link",
          cta_location: "amazon_section",
          patent_id: "US12532040B1",
          sections_viewed_before_click: firedSections.current.size,
          active_seconds_before_click: activeSeconds.current,
        });
      } else if (href.startsWith("#") && href.length > 1) {
        trackAnalyticsEvent("section_nav_click", {
          target_section: href.slice(1).replace("-section", ""),
          nav_location: link.closest("nav") ? "navbar" : "hero_cue",
        });
      }
    };

    // --- 3. Section View & Dwell Time Tracking ------------------------------

    const attachSectionTargets = () => {
      if (!sectionObserver) return;
      for (const domId of SECTION_IDS) {
        const el = document.getElementById(domId);
        if (el && !observedElements.has(el)) {
          observedElements.add(el);
          sectionObserver.observe(el);
        }
      }
    };

    // --- Setup (deferred until gtag is ready) --------------------------------

    const setup = () => {
      if (!isMounted) return;

      unsubscribeScroll = subscribeScroll(handleScroll);
      document.addEventListener("click", handleClick);

      // Observe section visibility (threshold 0.15 works reliably for both
      // 2,100px desktop case studies and compact mobile viewports).
      sectionObserver = new IntersectionObserver(
        (entries) => {
          if (!isMounted) return;
          const now = Date.now();

          for (const entry of entries) {
            const sectionKey = entry.target.id.replace("-section", "");

            if (entry.isIntersecting) {
              sectionEnterTimestamps.current.set(sectionKey, now);

              if (!firedSections.current.has(sectionKey)) {
                firedSections.current.add(sectionKey);
                trackAnalyticsEvent("case_study_viewed", {
                  section: sectionKey,
                  order_viewed: firedSections.current.size,
                  traffic_source: getSourceLabel(),
                  device: landingCtx.current.device_category,
                });
              }
            } else {
              const enteredAt = sectionEnterTimestamps.current.get(sectionKey);
              if (enteredAt) {
                sectionEnterTimestamps.current.delete(sectionKey);
                const dwellSeconds = Math.round((now - enteredAt) / 1000);
                // Fire a single deep-read signal when a visitor spends >= 8s reading a section
                if (dwellSeconds >= 8 && !sectionDwellDispatched.current.has(sectionKey)) {
                  sectionDwellDispatched.current.add(sectionKey);
                  trackAnalyticsEvent("case_study_engaged_read", {
                    section: sectionKey,
                    dwell_seconds: dwellSeconds,
                    traffic_source: getSourceLabel(),
                    device: landingCtx.current.device_category,
                  });
                }
              }
            }
          }
        },
        { threshold: 0.15 }
      );

      attachSectionTargets();

      // Re-scan if deferred sections mount later
      domMutationObserver = new MutationObserver(() => {
        if (observedElements.size < SECTION_IDS.length) {
          attachSectionTargets();
        }
      });
      domMutationObserver.observe(document.body, { childList: true, subtree: true });

      // Active-tab time ticker (only counts seconds while the tab is visible)
      engagementInterval = setInterval(() => {
        if (!isMounted || document.visibilityState !== "visible") return;
        activeSeconds.current += 1;
        const sec = activeSeconds.current;

        if ((TIME_MILESTONES as readonly number[]).includes(sec) && !firedTimeMilestones.current.has(sec)) {
          firedTimeMilestones.current.add(sec);
          trackAnalyticsEvent("engagement_milestone", {
            seconds: sec,
            sections_viewed: firedSections.current.size,
            max_scroll_depth: Math.max(0, ...Array.from(firedScrollMilestones.current)),
            traffic_source: getSourceLabel(),
            device: landingCtx.current.device_category,
          });
        }
      }, 1000);
    };

    // Poll until gtag script is initialized
    const waitForGtag = (attempts = 0) => {
      if (!isMounted) return;
      if (typeof window.gtag === "function") {
        setup();
        return;
      }
      if (attempts >= 20) return;
      setTimeout(() => waitForGtag(attempts + 1), 250);
    };
    waitForGtag();

    return () => {
      isMounted = false;
      unsubscribeScroll?.();
      if (engagementInterval) clearInterval(engagementInterval);
      document.removeEventListener("click", handleClick);
      sectionObserver?.disconnect();
      domMutationObserver?.disconnect();
    };
  }, []);

  // ---------------------------------------------------------------------------
  // SPA PAGE_VIEW TRACKING
  // Next.js does not re-fire gtag on client navigations; this effect handles it.
  // Also fires the one-time linkedin_landing event on first load.
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!GA_ID || isLikelyBot()) return;

    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      const sendLandingEvent = (attempts = 0) => {
        if (typeof window.gtag !== "function") {
          if (attempts < 20) setTimeout(() => sendLandingEvent(attempts + 1), 200);
          return;
        }
        const ctx = landingCtx.current;
        if (ctx.traffic_source === "linkedin") {
          trackAnalyticsEvent("linkedin_landing", {
            utm_source: ctx.utm_source,
            utm_medium: ctx.utm_medium,
            utm_campaign: ctx.utm_campaign || "(not set)",
            utm_content: ctx.utm_content || "(not set)",
            device_category: ctx.device_category,
            landing_page: window.location.pathname,
          });
        }
      };
      setTimeout(sendLandingEvent, 100);
      return;
    }

    const ctx = landingCtx.current;
    trackAnalyticsEvent("page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname + window.location.search,
      ...(ctx.utm_source && { utm_source: ctx.utm_source }),
      ...(ctx.utm_medium && { utm_medium: ctx.utm_medium }),
      ...(ctx.utm_campaign && { utm_campaign: ctx.utm_campaign }),
    });
  }, [pathname]);

  if (!GA_ID || isLikelyBot()) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            send_page_view: true,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}


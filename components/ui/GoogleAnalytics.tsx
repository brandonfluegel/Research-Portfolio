"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";

// Case study section IDs that exist in the DOM
const CASE_STUDY_SECTIONS = ["amazon", "sling", "uber", "nasa", "mercedes"];
// Scroll depth checkpoints (% of total page height)
const SCROLL_MILESTONES = [25, 50, 75, 90];
// Active engagement time checkpoints (seconds)
const TIME_MILESTONES = [30, 60, 120];

// ---------------------------------------------------------------------------
// BOT DETECTION
// navigator.webdriver is true in every headless Chrome instance (Puppeteer,
// Playwright, Selenium) — the standard tooling for datacenter scrapers.
// ---------------------------------------------------------------------------
function isLikelyBot(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") return true;
  if (navigator.webdriver) return true;
  const botUA = /bot|crawler|spider|scraper|headless|phantomjs|selenium|archiver|slurp|bingpreview/i;
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
  const isLinkedInReferrer = /linkedin\.com/i.test(referrer);

  if (isLinkedInApp || isLinkedInReferrer) {
    ctx.traffic_source = "linkedin";
    if (!ctx.utm_source) ctx.utm_source = "linkedin";
    if (!ctx.utm_medium) ctx.utm_medium = isLinkedInApp ? "social_app" : "social_web";
  }

  ctx.device_category = /Android|iPhone|iPad|iPod|Mobile/i.test(ua) ? "mobile" : "desktop";
  return ctx;
}

// ---------------------------------------------------------------------------
// SAFE GTAG WRAPPER
// Guards every call so individual trackers do not need inline null checks.
// ---------------------------------------------------------------------------
function safeGtag(event: string, params: Record<string, unknown>) {
  if (typeof window?.gtag !== "function") return;
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

  // Capture landing context once on mount (before any effects send events)
  useEffect(() => {
    landingCtx.current = parseLandingContext();
  }, []);

  // ---------------------------------------------------------------------------
  // ENGAGEMENT TRACKING
  // All four trackers (scroll depth, section views, time milestones, CTA clicks)
  // are set up after gtag is confirmed ready, then fully torn down on unmount.
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!GA_ID || typeof window === "undefined") return;

    let isMounted = true;
    let scrollThrottleTimer: ReturnType<typeof setTimeout> | null = null;
    let sectionObserver: IntersectionObserver | null = null;
    const timeoutIds: ReturnType<typeof setTimeout>[] = [];

    // --- Handlers (defined here so they can be removed on cleanup) ----------

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((window.scrollY / docHeight) * 100);
      for (const milestone of SCROLL_MILESTONES) {
        if (pct >= milestone && !firedScrollMilestones.current.has(milestone)) {
          firedScrollMilestones.current.add(milestone);
          safeGtag("scroll_depth_milestone", {
            depth_percent: milestone,
            sections_viewed: firedSections.current.size,
          });
        }
      }
    };

    const throttledScroll = () => {
      if (scrollThrottleTimer) return;
      scrollThrottleTimer = setTimeout(() => {
        scrollThrottleTimer = null;
        if (isMounted) handleScroll();
      }, 100);
    };

    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href.includes("linkedin.com")) {
        safeGtag("cta_click", {
          cta_type: "linkedin",
          cta_location: link.closest("nav") ? "navbar" : "footer",
          sections_viewed_before_click: firedSections.current.size,
          max_scroll_depth: Math.max(0, ...Array.from(firedScrollMilestones.current)),
        });
      } else if (href.includes("mailto:")) {
        safeGtag("cta_click", {
          cta_type: "email",
          cta_location: "footer",
          sections_viewed_before_click: firedSections.current.size,
          max_scroll_depth: Math.max(0, ...Array.from(firedScrollMilestones.current)),
        });
      }
    };

    // --- Setup (deferred until gtag is ready) --------------------------------

    const setup = () => {
      if (!isMounted) return;

      // 1. Scroll depth milestones
      window.addEventListener("scroll", throttledScroll, { passive: true });

      // 2. Section viewport tracking — fires when 30% of a section is visible
      sectionObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting || !isMounted) continue;
            const sectionId = entry.target.id.replace("-section", "");
            if (!firedSections.current.has(sectionId)) {
              firedSections.current.add(sectionId);
              safeGtag("case_study_viewed", {
                section: sectionId,
                order_viewed: firedSections.current.size,
                traffic_source:
                  landingCtx.current.utm_source ||
                  landingCtx.current.traffic_source ||
                  "(direct)",
                device: landingCtx.current.device_category,
              });
            }
          }
        },
        { threshold: 0.3 }
      );
      for (const id of CASE_STUDY_SECTIONS) {
        const el = document.getElementById(`${id}-section`);
        if (el) sectionObserver.observe(el);
      }

      // 3. Engagement time milestones
      for (const sec of TIME_MILESTONES) {
        timeoutIds.push(
          setTimeout(() => {
            if (!isMounted || firedTimeMilestones.current.has(sec)) return;
            firedTimeMilestones.current.add(sec);
            safeGtag("engagement_milestone", {
              seconds: sec,
              sections_viewed: firedSections.current.size,
              max_scroll_depth: Math.max(0, ...Array.from(firedScrollMilestones.current)),
              traffic_source:
                landingCtx.current.utm_source ||
                landingCtx.current.traffic_source ||
                "(direct)",
            });
          }, sec * 1000)
        );
      }

      // 4. CTA click tracking
      document.addEventListener("click", handleClick);
    };

    // Poll until gtag script is initialized (replaces fragile setTimeout race)
    const waitForGtag = (attempts = 0) => {
      if (!isMounted) return;
      if (typeof window.gtag === "function") { setup(); return; }
      if (attempts >= 20) return;
      setTimeout(() => waitForGtag(attempts + 1), 250);
    };
    waitForGtag();

    return () => {
      isMounted = false;
      if (scrollThrottleTimer) clearTimeout(scrollThrottleTimer);
      window.removeEventListener("scroll", throttledScroll);
      sectionObserver?.disconnect();
      timeoutIds.forEach(clearTimeout);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // ---------------------------------------------------------------------------
  // SPA PAGE_VIEW TRACKING
  // Next.js does not re-fire gtag on client navigations; this effect handles it.
  // Also fires the one-time linkedin_landing event on first load.
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!GA_ID) return;

    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      const sendLandingEvent = (attempts = 0) => {
        if (typeof window.gtag !== "function") {
          if (attempts < 20) setTimeout(() => sendLandingEvent(attempts + 1), 200);
          return;
        }
        const ctx = landingCtx.current;
        if (ctx.traffic_source === "linkedin") {
          window.gtag("event", "linkedin_landing", {
            utm_source: ctx.utm_source,
            utm_medium: ctx.utm_medium,
            utm_campaign: ctx.utm_campaign || "(not set)",
            utm_content: ctx.utm_content || "(not set)",
            device_category: ctx.device_category,
            landing_page: window.location.pathname,
            send_to: GA_ID,
          });
        }
      };
      setTimeout(sendLandingEvent, 100);
      return;
    }

    if (typeof window.gtag !== "function") return;
    const ctx = landingCtx.current;
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname + window.location.search,
      ...(ctx.utm_source && { utm_source: ctx.utm_source }),
      ...(ctx.utm_medium && { utm_medium: ctx.utm_medium }),
      ...(ctx.utm_campaign && { utm_campaign: ctx.utm_campaign }),
      send_to: GA_ID,
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
          gtag('config', '${GA_ID}', { send_page_view: true });
        `}
      </Script>
    </>
  );
}

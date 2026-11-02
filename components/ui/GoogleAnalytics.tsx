// v2 - Fall 2026
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { SECTION_IDS } from "@/lib/constants/sections";
import { getScrollSnapshot, subscribeScroll } from "@/hooks/useScrollMetrics";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    __gaInitialized?: boolean;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";

// Visit any page with ?ga_opt_out=1 to stop tracking this browser (e.g. your own
// devices); ?ga_opt_out=0 re-enables it. Persisted in localStorage.
const OPT_OUT_PARAM = "ga_opt_out";
const OPT_OUT_STORAGE_KEY = "ga_opt_out";

const SCROLL_MILESTONES = [25, 50, 75, 90] as const;
// Seconds of *active* time: tab visible, window focused, and recent user input.
const TIME_MILESTONES = [15, 30, 60, 120, 240] as const;
// A reader who stops interacting for this long is treated as idle.
const IDLE_TIMEOUT_MS = 60_000;
// Active seconds within one section before it counts as an engaged read.
const ENGAGED_READ_SECONDS = 8;
// A section counts as viewed when 15% of it is visible OR it fills half the
// viewport (tall mobile sections can never reach 15% of their own height).
const SECTION_VIEW_RATIO = 0.15;
const SECTION_VIEW_VIEWPORT_FRACTION = 0.5;
const OBSERVER_THRESHOLDS = Array.from({ length: 21 }, (_, i) => i / 20);

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

type LandingContext = Partial<Record<(typeof UTM_KEYS)[number], string>> & {
  traffic_source?: string;
  device_category: "mobile" | "desktop";
};

// ---------------------------------------------------------------------------
// ELIGIBILITY
// ---------------------------------------------------------------------------
function isLikelyBot(): boolean {
  if (navigator.webdriver) return true;
  const botUA =
    /bot|crawler|spider|scraper|headless|phantomjs|selenium|puppeteer|playwright|archiver|slurp|bingpreview|lighthouse|pagespeed|gtmetrix|pingdom|uptime|prerender/i;
  return botUA.test(navigator.userAgent);
}

function isOptedOut(): boolean {
  const url = new URL(window.location.href);
  const param = url.searchParams.get(OPT_OUT_PARAM);

  try {
    if (param === "1") localStorage.setItem(OPT_OUT_STORAGE_KEY, "1");
    if (param === "0") localStorage.removeItem(OPT_OUT_STORAGE_KEY);
  } catch {
    // Storage blocked (private mode); fall back to the URL param alone.
  }

  if (param !== null) {
    url.searchParams.delete(OPT_OUT_PARAM);
    window.history.replaceState(window.history.state, "", url.toString());
  }

  if (param === "1") return true;
  try {
    return localStorage.getItem(OPT_OUT_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// LANDING CONTEXT
// ---------------------------------------------------------------------------
function parseLandingContext(): LandingContext {
  const params = new URLSearchParams(window.location.search);
  const ua = navigator.userAgent || "";
  const referrer = document.referrer || "";
  const ctx: LandingContext = {
    device_category: /Android|iPhone|iPad|iPod|Mobile/i.test(ua) ? "mobile" : "desktop",
  };

  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) ctx[key] = val;
  }

  const isLinkedInApp = /LinkedInApp|LinkedIn/i.test(ua);
  if (isLinkedInApp || /linkedin\.com|lnkd\.in/i.test(referrer)) {
    ctx.traffic_source = "linkedin";
    ctx.utm_source ??= "linkedin";
    ctx.utm_medium ??= isLinkedInApp ? "social_app" : "social_web";
  } else if (/google\./i.test(referrer)) {
    ctx.traffic_source = "google_organic";
  } else if (/github\.com/i.test(referrer)) {
    ctx.traffic_source = "github";
  } else if (/facebook\.com|fb\.me/i.test(referrer)) {
    ctx.traffic_source = "facebook";
  } else if (/instagram\.com/i.test(referrer)) {
    ctx.traffic_source = "instagram";
  } else if (referrer) {
    try {
      ctx.traffic_source = new URL(referrer).hostname.replace(/^www\./, "");
    } catch {
      ctx.traffic_source = "referral";
    }
  }

  return ctx;
}

// LinkedIn's in-app browser strips the referrer, so GA files those sessions
// under (direct)/(none). Injecting UTMs into page_location lets GA's own
// session attribution credit LinkedIn when the link itself wasn't tagged.
function buildPageLocation(ctx: LandingContext): string {
  const url = new URL(window.location.href);
  if (ctx.traffic_source === "linkedin" && !url.searchParams.has("utm_source")) {
    url.searchParams.set("utm_source", ctx.utm_source || "linkedin");
    url.searchParams.set("utm_medium", ctx.utm_medium || "social");
  }
  return url.toString();
}

// ---------------------------------------------------------------------------
// GTAG BOOTSTRAP
// gtag is defined synchronously so trackers never race the network script;
// calls queue in dataLayer until gtag.js loads.
// ---------------------------------------------------------------------------
function initGtag(pageLocation: string) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js requires the original `arguments` object, not a rest array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { page_location: pageLocation });

  const src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  if (!document.querySelector(`script[src="${src}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
  }
}

export function trackAnalyticsEvent(event: string, params: Record<string, unknown> = {}) {
  if (!GA_ID || typeof window === "undefined" || !window.__gaInitialized) return;
  window.gtag("event", event, { ...params, send_to: GA_ID });
}

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------
export default function GoogleAnalytics() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!GA_ID || isLikelyBot() || isOptedOut()) return;

    const ctx = parseLandingContext();

    // Guard against React StrictMode re-running the effect in development.
    if (!window.__gaInitialized) {
      initGtag(buildPageLocation(ctx));
      window.__gaInitialized = true;

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
    }

    const sourceLabel = ctx.utm_source || ctx.traffic_source || "(direct)";
    const baseParams = { traffic_source: sourceLabel, device: ctx.device_category };

    const firedScroll = new Set<number>();
    const firedTime = new Set<number>();
    const viewedSections = new Set<string>();
    const observedSections = new Set<string>();
    const visiblePx = new Map<string, number>();
    const readSeconds = new Map<string, number>();
    const readDispatched = new Set<string>();
    let activeSeconds = 0;
    let currentSection: string | null = null;
    let lastInteraction = Date.now();

    const maxScrollDepth = () => Math.max(0, ...firedScroll);
    const sectionKey = (el: Element) => el.id.replace("-section", "");

    const isActive = () =>
      document.visibilityState === "visible" &&
      document.hasFocus() &&
      Date.now() - lastInteraction < IDLE_TIMEOUT_MS;

    const markInteraction = () => {
      lastInteraction = Date.now();
    };

    // --- Engaged reads -------------------------------------------------------

    const flushRead = (key: string | null) => {
      if (!key || readDispatched.has(key)) return;
      const seconds = readSeconds.get(key) || 0;
      if (seconds < ENGAGED_READ_SECONDS) return;
      readDispatched.add(key);
      trackAnalyticsEvent("case_study_engaged_read", {
        section: key,
        dwell_seconds: seconds,
        ...baseParams,
      });
    };

    const flushAllReads = () => {
      for (const key of readSeconds.keys()) flushRead(key);
    };

    // --- Scroll depth --------------------------------------------------------

    const handleScroll = () => {
      markInteraction();
      const pct = Math.round(getScrollSnapshot().progress * 100);
      for (const milestone of SCROLL_MILESTONES) {
        if (pct >= milestone && !firedScroll.has(milestone)) {
          firedScroll.add(milestone);
          trackAnalyticsEvent("scroll_depth_milestone", {
            depth_percent: milestone,
            sections_viewed: viewedSections.size,
            ...baseParams,
          });
        }
      }
    };

    // --- Clicks --------------------------------------------------------------

    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const clickContext = {
        sections_viewed_before_click: viewedSections.size,
        active_seconds_before_click: activeSeconds,
        max_scroll_depth: maxScrollDepth(),
      };

      if (href.includes("linkedin.com")) {
        trackAnalyticsEvent("cta_click", {
          cta_type: "linkedin",
          cta_location: link.closest("nav") ? "navbar" : "footer",
          ...clickContext,
        });
      } else if (href.startsWith("mailto:")) {
        trackAnalyticsEvent("cta_click", { cta_type: "email", cta_location: "footer", ...clickContext });
      } else if (href.includes("patents.google.com")) {
        trackAnalyticsEvent("cta_click", {
          cta_type: "patent_link",
          cta_location: "amazon_section",
          patent_id: "US12532040B1",
          ...clickContext,
        });
      } else if (href.startsWith("#") && href.length > 1) {
        trackAnalyticsEvent("section_nav_click", {
          target_section: href.slice(1).replace("-section", ""),
          nav_location: link.closest("nav") ? "navbar" : "hero_cue",
        });
      }
    };

    // --- Section views -------------------------------------------------------

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const key = sectionKey(entry.target);
          const px = entry.isIntersecting ? entry.intersectionRect.height : 0;
          visiblePx.set(key, px);

          const isViewed =
            entry.intersectionRatio >= SECTION_VIEW_RATIO ||
            px >= window.innerHeight * SECTION_VIEW_VIEWPORT_FRACTION;

          if (isViewed && !viewedSections.has(key)) {
            viewedSections.add(key);
            trackAnalyticsEvent("case_study_viewed", {
              section: key,
              order_viewed: viewedSections.size,
              ...baseParams,
            });
          }
        }
      },
      { threshold: OBSERVER_THRESHOLDS }
    );

    const observeSections = () => {
      for (const id of SECTION_IDS) {
        if (observedSections.has(id)) continue;
        const el = document.getElementById(id);
        if (el) {
          sectionObserver.observe(el);
          observedSections.add(id);
        }
      }
    };

    // The section most on-screen (by pixels) is the one being read.
    const dominantSection = (): string | null => {
      let best: string | null = null;
      let bestPx = 0;
      for (const [key, px] of visiblePx) {
        if (px > bestPx) {
          best = key;
          bestPx = px;
        }
      }
      return best;
    };

    // --- Active-time ticker --------------------------------------------------

    const tick = () => {
      if (observedSections.size < SECTION_IDS.length) observeSections();
      if (!isActive()) return;

      activeSeconds += 1;
      if ((TIME_MILESTONES as readonly number[]).includes(activeSeconds) && !firedTime.has(activeSeconds)) {
        firedTime.add(activeSeconds);
        trackAnalyticsEvent("engagement_milestone", {
          seconds: activeSeconds,
          sections_viewed: viewedSections.size,
          max_scroll_depth: maxScrollDepth(),
          ...baseParams,
        });
      }

      const section = dominantSection();
      if (section !== currentSection) {
        flushRead(currentSection);
        currentSection = section;
      }
      if (section) readSeconds.set(section, (readSeconds.get(section) || 0) + 1);
    };

    // Flush pending reads when the page is backgrounded or closed; this is the
    // last reliable moment on mobile. gtag sends these via sendBeacon.
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") flushAllReads();
      else markInteraction();
    };

    observeSections();
    const unsubscribeScroll = subscribeScroll(handleScroll);
    const ticker = setInterval(tick, 1000);
    const interactionEvents = ["pointerdown", "pointermove", "keydown", "touchstart", "wheel"] as const;
    for (const type of interactionEvents) {
      window.addEventListener(type, markInteraction, { passive: true });
    }
    document.addEventListener("click", handleClick);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pagehide", flushAllReads);

    return () => {
      flushAllReads();
      clearInterval(ticker);
      unsubscribeScroll();
      sectionObserver.disconnect();
      for (const type of interactionEvents) window.removeEventListener(type, markInteraction);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pagehide", flushAllReads);
    };
  }, []);

  // Next.js client navigations don't trigger gtag's automatic page_view.
  // The initial page_view is sent by gtag('config'), so the first path is skipped.
  useEffect(() => {
    if (lastTrackedPath.current === null) {
      lastTrackedPath.current = pathname;
      return;
    }
    if (lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;
    trackAnalyticsEvent("page_view", {
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [pathname]);

  return null;
}

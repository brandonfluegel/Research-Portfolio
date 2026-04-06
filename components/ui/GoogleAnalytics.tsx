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

/**
 * Parse UTM params + LinkedIn referrer signals from the landing URL.
 * Stored once on mount so they persist across SPA navigations.
 */
function parseLandingContext(): Record<string, string> {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const ctx: Record<string, string> = {};

  // Capture standard UTM params
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  for (const key of utmKeys) {
    const val = params.get(key);
    if (val) ctx[key] = val;
  }

  // Detect LinkedIn in-app browser (WebView) — often shows as direct traffic.
  // LinkedIn's in-app browsers include "LinkedInApp" in the UA string.
  const ua = navigator.userAgent || "";
  const referrer = document.referrer || "";
  const isLinkedInApp = /LinkedInApp|LinkedIn/i.test(ua);
  const isLinkedInReferrer = /linkedin\.com/i.test(referrer);

  if (isLinkedInApp || isLinkedInReferrer) {
    ctx.traffic_source = "linkedin";
    if (!ctx.utm_source) ctx.utm_source = "linkedin";
    if (!ctx.utm_medium) ctx.utm_medium = isLinkedInApp ? "social_app" : "social_web";
  }

  // Detect mobile vs desktop for custom dimension
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
  ctx.device_category = isMobile ? "mobile" : "desktop";

  return ctx;
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const isInitialLoad = useRef(true);
  const landingCtx = useRef<Record<string, string>>({});

  // Capture landing context once on mount
  useEffect(() => {
    landingCtx.current = parseLandingContext();
  }, []);

  useEffect(() => {
    if (!GA_ID) return;

    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      // Initial page_view is sent by gtag config's send_page_view:true.
      // But we also send landing context as a custom event once gtag is ready.
      const sendLandingEvent = () => {
        if (typeof window.gtag !== "function") {
          // gtag not ready yet (afterInteractive hasn't loaded), retry
          setTimeout(sendLandingEvent, 200);
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
      // Delay to allow gtag script to initialize
      setTimeout(sendLandingEvent, 100);
      return;
    }

    // For client-side navigations, send a manual page_view with preserved UTM context
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

  if (!GA_ID) {
    return null;
  }

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

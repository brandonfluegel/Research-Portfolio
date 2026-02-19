"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const webMeasurementId = process.env.NEXT_PUBLIC_GA_WEB_MEASUREMENT_ID?.trim() || "";
const mobileMeasurementId = process.env.NEXT_PUBLIC_GA_MOBILE_MEASUREMENT_ID?.trim() || "";

function getTargetMeasurementId() {
  if (!webMeasurementId) return mobileMeasurementId;
  if (!mobileMeasurementId) return webMeasurementId;

  const userAgent = navigator.userAgent || "";
  const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isSmallViewport = window.matchMedia("(max-width: 768px)").matches;

  return isMobileUserAgent || isSmallViewport
    ? mobileMeasurementId
    : webMeasurementId;
}

export default function GoogleAnalytics() {
  const pathname = usePathname();

  const initialMeasurementId = webMeasurementId || mobileMeasurementId;

  useEffect(() => {
    if (!initialMeasurementId || typeof window.gtag !== "function") {
      return;
    }

    const targetMeasurementId = getTargetMeasurementId();
    if (!targetMeasurementId) {
      return;
    }

    const pagePath = `${window.location.pathname}${window.location.search}`;

    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pagePath,
      send_to: targetMeasurementId,
    });
  }, [initialMeasurementId, pathname]);

  if (!initialMeasurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${initialMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${webMeasurementId ? `gtag('config', '${webMeasurementId}', { send_page_view: false });` : ""}
          ${mobileMeasurementId ? `gtag('config', '${mobileMeasurementId}', { send_page_view: false });` : ""}
        `}
      </Script>
    </>
  );
}

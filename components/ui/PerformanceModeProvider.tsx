"use client";

import { useEffect } from "react";
import { isLowPowerDevice, prefersReducedMotion } from "@/lib/utils/performance";

export default function PerformanceModeProvider() {
  useEffect(() => {
    const root = document.documentElement;

    const applyMode = () => {
      const lowPower = isLowPowerDevice();
      const reducedMotion = prefersReducedMotion();

      root.setAttribute("data-performance-tier", lowPower ? "low" : "high");
      root.setAttribute("data-reduced-motion", reducedMotion ? "true" : "false");
    };

    applyMode();

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    media.addEventListener("change", applyMode);

    return () => {
      media.removeEventListener("change", applyMode);
    };
  }, []);

  return null;
}

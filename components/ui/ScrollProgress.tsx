"use client";

import { useEffect, useRef } from "react";
import { getScrollSnapshot, subscribeScroll } from "@/hooks/useScrollMetrics";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${getScrollSnapshot().progress})`;
      }
    };
    update();
    return subscribeScroll(update);
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-0.5 bg-linear-to-r from-indigo-400 via-sky-400 to-emerald-400 origin-left z-100 pointer-events-none will-change-transform"
      style={{ transform: "scaleX(0)" }}
    />
  );
}

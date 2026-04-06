"use client";

import useScrollMetrics from "@/hooks/useScrollMetrics";

export default function ScrollProgress() {
  const { progress } = useScrollMetrics();

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] bg-green-400 origin-left z-[100] pointer-events-none will-change-transform"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}

"use client";

import useScrollMetrics from "@/hooks/useScrollMetrics";
import { scrollToTopSmooth } from "@/lib/utils/scroll";

export default function ScrollToTop() {
  const { scrollY } = useScrollMetrics();
  const visible = scrollY > 300;

  return (
    <button
      className={`fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full shadow-lg flex items-center justify-center z-50 transition-opacity duration-300 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTopSmooth}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

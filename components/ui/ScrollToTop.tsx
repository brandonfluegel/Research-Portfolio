"use client";

import { useScrolledPast } from "@/hooks/useScrollMetrics";
import { scrollToTopSmooth } from "@/lib/utils/scroll";

export default function ScrollToTop() {
  const visible = useScrolledPast(300);

  return (
    <button
      className={`fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-6 md:right-8 w-11 h-11 rounded-full border border-white/15 bg-zinc-900/80 text-white backdrop-blur-md shadow-lg shadow-black/40 flex items-center justify-center z-50 transition-[opacity,transform,background-color] duration-300 ease-out hover:bg-zinc-800 cursor-pointer ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
      onClick={scrollToTopSmooth}
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}

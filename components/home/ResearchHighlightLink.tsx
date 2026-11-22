// v3 - Winter 2026
"use client";

import type { ReactNode } from "react";
import { scrollToSectionId } from "@/lib/utils/scroll";

export default function ResearchHighlightLink({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <a
      href={`#${id}`}
      data-analytics-location="research_overview"
      onClick={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        scrollToSectionId(id);
      }}
      className="text-sm font-medium text-indigo-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}

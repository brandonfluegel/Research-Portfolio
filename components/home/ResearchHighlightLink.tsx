// v3 - Winter 2026
import type { ReactNode } from "react";

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
      className="inline-flex min-h-11 items-center py-2 text-sm font-medium text-indigo-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}

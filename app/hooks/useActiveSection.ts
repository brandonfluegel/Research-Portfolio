"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "amazon-section",
  "sling-section",
  "uber-section",
  "nasa-section",
  "mercedes-section",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Small delay to ensure dynamically-imported sections are in the DOM
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          // Find the entry with the largest intersection ratio
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (visible.length > 0) {
            setActiveSection(visible[0].target.id);
          }
        },
        {
          rootMargin: "-20% 0px -60% 0px",
          threshold: [0, 0.1, 0.2, 0.3, 0.5],
        }
      );

      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      elements.forEach((el) => observer.observe(el));

      // Store for cleanup
      observerRef = observer;
    }, 500);

    let observerRef: IntersectionObserver | null = null;

    return () => {
      clearTimeout(timer);
      observerRef?.disconnect();
    };
  }, []);

  return activeSection;
}

"use client";

import { useEffect, useState } from "react";
import { SECTION_IDS } from "@/lib/constants/sections";

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const visibleRatios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleRatios.set(entry.target.id, entry.intersectionRect.height);
          } else {
            visibleRatios.delete(entry.target.id);
          }
        }

        if (visibleRatios.size === 0) return;

        let bestId = "";
        let bestHeight = -1;
        for (const [id, height] of visibleRatios.entries()) {
          if (height > bestHeight) {
            bestHeight = height;
            bestId = id;
          }
        }

        if (bestId) {
          setActiveSection((current) => (current === bestId ? current : bestId));
        }
      },
      {
        rootMargin: "-18% 0px -55% 0px",
        threshold: [0, 0.05, 0.1, 0.2, 0.35, 0.5, 0.75],
      }
    );

    const elements = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return activeSection;
}


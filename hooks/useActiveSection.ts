"use client";

import { useEffect, useState } from "react";
import { SECTION_IDS } from "@/lib/constants/sections";

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length === 0) return;

        const next = visible[0].target.id;
        setActiveSection((current) => (current === next ? current : next));
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.5],
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

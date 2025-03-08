// hooks/useDynamicTextColor.ts
"use client";

import { useEffect, useState } from "react";

export default function useDynamicTextColor() {
  const [color, setColor] = useState("#ffffff"); // default white

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);

      if (scrollPercentage < 0.35) {
        setColor("#ffffff"); // White on dark section
      } else if (scrollPercentage >= 0.35 && scrollPercentage <= 0.65) {
        setColor("#171717"); // Black on white mid-section
      } else {
        setColor("#ffffff"); // White on dark bottom section
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return color;
}

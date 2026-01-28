// hooks/useDynamicTextColor.ts
"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function useDynamicTextColor() {
  const [color, setColor] = useState("#ffffff");
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 'latest' is the scroll percentage between 0 and 1
    if (latest < 0.35) {
      setColor("#ffffff");
    } else if (latest >= 0.35 && latest <= 0.65) {
      setColor("#171717");
    } else {
      setColor("#ffffff");
    }
  });

  return color;
}

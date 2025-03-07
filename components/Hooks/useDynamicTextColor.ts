"use client";

import { useScroll, useTransform } from "framer-motion";

export default function useDynamicTextColor() {
  const { scrollYProgress } = useScroll();

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.45, 0.55, 1],
    ['#ffffff', '#ffffff', '#0a0a0a', '#ffffff']
  );

  return textColor;
}

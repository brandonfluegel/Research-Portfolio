"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function useParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return { ref, y };
}

"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function GradientTransition() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "#0a0a0a",  // Initial color (black)
      "#ffffff",  // Mid-transition color (white)
      "#0a0a0a"   // Final color (black again)
    ]
  );

  return (
    <motion.div
      ref={ref}
      className="fixed inset-0 -z-50"
      style={{ background }}
    />
  );
}

"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function GradientBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const background = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#0a0a0a", "#18181b", "#f5f5f5", "#0a0a0a"]
  );

  return (
    <motion.div
      ref={ref}
      className="fixed inset-0 -z-50"
      style={{ background }}
    />
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function GradientTransition() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(180deg, #0a0a0a, #171717)",
      "linear-gradient(180deg, #171717, #4f46e5)",
      "linear-gradient(180deg, #4f46e5, #0a0a0a)"
    ]
  );

  return (
    <motion.div
      className="fixed inset-0 -z-10"
      style={{ background }}
    />
  );
}

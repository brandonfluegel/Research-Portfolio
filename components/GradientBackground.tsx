"use client";
import { useTransform, motion } from "framer-motion";
import useScrollProgress from "@/app/hooks/useScrollProgress";

export default function GradientBackground() {
  const { ref, scrollYProgress } = useScrollProgress();

  const background = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#0a0a0a", "#18181b", "#f5f5f5", "#0a0a0a"]
  );

  return (
    <motion.div ref={ref} className="fixed inset-0 -z-50" style={{ background }} />
  );
}

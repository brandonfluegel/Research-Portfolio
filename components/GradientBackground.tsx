"use client";
import { useTransform, motion } from "framer-motion";
import useScrollProgress from "@/app/hooks/useScrollProgress";

export default function GradientBackground() {
  const { ref, scrollYProgress } = useScrollProgress();

  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#050505", "#0f172a", "#050505"]
  );

  return (
    <motion.div ref={ref} className="fixed inset-0 -z-50" style={{ background }} />
  );
}

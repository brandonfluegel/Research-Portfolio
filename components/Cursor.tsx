"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import useScrollProgress from "@/app/hooks/useScrollProgress";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScrollProgress();

  // Explicitly define cursor color transformations (match GradientBackground colors)
  const cursorColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#ffffff", "#dddddd", "#000000", "#ffffff"] // Adjust explicitly for contrast
  );

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
        backgroundColor: cursorColor,
      }}
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999]"
    />
  );
}

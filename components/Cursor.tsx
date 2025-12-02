"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, isMobile]);

  if (isMobile) return null;

  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] drop-shadow-md mix-blend-difference"
    >
      <path
        d="M5.5 3.21l.01 11.09 3.02-3.8 2.37 5.17 1.83-.83-2.38-5.18 5.62-.02L5.5 3.21z"
        fill="#ffffff"
      />
    </motion.svg>
  );
}

"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function useParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 640px)").matches);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [-30, 30]);

  return { ref, y };
}

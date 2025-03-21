"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 640px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: isMobile ? 0.015 : 0.05 },
    },
  };

  const child = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block mr-3 sm:mr-3 md:mr-3" // clearly increased word spacing
        >
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span key={letterIndex} variants={child}>
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}

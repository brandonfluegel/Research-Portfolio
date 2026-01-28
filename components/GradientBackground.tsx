"use client";

import { motion } from "framer-motion";

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      
      {/* Orb 1: Blue/Purple - Top Left */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
          x: [-20, 20, -20],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ willChange: "transform" }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/20 blur-[100px]"
      />

      {/* Orb 2: Indigo/Zinc - Bottom Right */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.1, 0.2],
          x: [20, -20, 20],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ willChange: "transform" }}
        className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/10 blur-[120px]"
      />

      {/* Orb 3: Subtle Center Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-zinc-900/20 blur-[150px] rounded-full" />
      
    </div>
  );
}
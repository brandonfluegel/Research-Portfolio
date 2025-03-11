"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="hidden sm:flex justify-center my-4">
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1"
      >
        <div className="w-1 h-2 bg-white rounded-full" />
      </motion.div>
    </div>
  );
}
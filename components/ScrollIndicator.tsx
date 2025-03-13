"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 640px)").matches);
    const handleScroll = () => setVisible(window.scrollY < 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMobile) return null; // explicitly hides it on desktop

  return (
    <AnimatePresence>
      {visible && (
        <div className="flex justify-center mt-4">
          <motion.div
            animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1"
          >
            <div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

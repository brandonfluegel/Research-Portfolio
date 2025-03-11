"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="hidden sm:flex justify-end pr-16 fixed right-0 bottom-1/2 transform translate-y-1/2">
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

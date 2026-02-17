"use client";

import { motion, AnimatePresence } from "framer-motion";
import useScrollMetrics from "@/hooks/useScrollMetrics";
import { scrollToTopSmooth } from "@/lib/utils/scroll";

export default function ScrollToTop() {
  const { scrollY } = useScrollMetrics();
  const visible = scrollY > 300;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full shadow-lg flex items-center justify-center z-50"
          onClick={scrollToTopSmooth}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

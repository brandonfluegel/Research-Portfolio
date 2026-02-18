"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import useScrollMetrics from "@/hooks/useScrollMetrics";

export default function ScrollIndicator() {
  const { scrollY } = useScrollMetrics();
  const visible = scrollY < 200;

  if (!visible) return null;

  return (
    <AnimatePresence>
      <div className="flex justify-center mt-4">
        <motion.div
          className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm"
          animate={{ y: [0, 12, 0], opacity: [0.75, 1, 0.75], scale: [1, 1.06, 1] }}
          transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
          style={{ boxShadow: "0 0 24px rgba(255,255,255,0.22)" }}
        >
          <ChevronDown className="w-8 h-8 text-white" strokeWidth={2.5} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

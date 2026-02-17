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
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

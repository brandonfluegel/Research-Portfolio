"use client";

import { motion } from "framer-motion";

interface YearBadgeProps {
  year: string;
}

export default function YearBadge({ year }: YearBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 0.1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="absolute -top-20 left-1/2 transform -translate-x-1/2 pointer-events-none select-none"
    >
      <span className="text-[180px] font-extrabold text-gray-200 opacity-10 select-none">
        {year}
      </span>
    </motion.div>
  );
}

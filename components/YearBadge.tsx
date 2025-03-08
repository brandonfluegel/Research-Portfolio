"use client";

import { motion } from "framer-motion";

interface YearBadgeProps {
  year: string;
  className?: string;
}

export default function YearBadge({ year, className = "" }: YearBadgeProps) {
  const yearColors: { [key: string]: string } = {
    "2025": "text-white-800",
    "2019": "text-gray-900",
    "2018": "text-gray-950",
    "2017": "text-blue-900",
    "2015": "text-white-700",
  };

  const colorClass = yearColors[year] || "text-gray-700";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 0.3, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`absolute -top-52 left-1/2 transform -translate-x-1/2 pointer-events-none select-none ${className}`}
    >
      <span className={`text-[182px] font-extrabold ${colorClass} opacity-30 drop-shadow-xl`}>
        {year}
      </span>
    </motion.div>
  );
}

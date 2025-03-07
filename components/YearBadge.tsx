"use client";

import { motion } from "framer-motion";

interface YearBadgeProps {
  year: string;
}

export default function YearBadge({ year }: YearBadgeProps) {
  // Define colors based on year for extra visual emphasis
  const yearColors: { [key: string]: string } = {
    "2025": "text-indigo-500",
    "2019": "text-teal-500",
    "2018": "text-orange-500",
    "2017": "text-yellow-500",
    "2015": "text-pink-500",
  };

  const colorClass = yearColors[year] || "text-gray-200";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 0.3, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="absolute -top-24 left-1/2 transform -translate-x-1/2 pointer-events-none select-none"
    >
      <span className={`text-[260px] font-extrabold ${colorClass} opacity-30 drop-shadow-xl`}>
        {year}
      </span>
    </motion.div>
  );
}

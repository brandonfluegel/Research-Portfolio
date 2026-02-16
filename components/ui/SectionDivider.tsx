"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  label: string;
  description?: string;
}

export default function SectionDivider({ label, description }: SectionDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center py-8 md:py-12"
    >
      {/* Decorative line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8 md:mb-10" />

      {/* Label */}
      <span className="text-[9px] md:text-xs font-mono text-zinc-500 uppercase tracking-[0.15em] md:tracking-[0.3em] mb-2 px-4 text-center leading-relaxed">
        {label}
      </span>

      {/* Optional description */}
      {description && (
        <p className="text-xs md:text-base text-zinc-600 text-center max-w-xs md:max-w-md px-4 font-light italic">
          {description}
        </p>
      )}
    </motion.div>
  );
}

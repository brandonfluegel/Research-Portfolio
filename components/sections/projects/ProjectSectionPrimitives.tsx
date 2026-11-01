"use client";

import { m } from "framer-motion";
import LogoBadge from "@/components/ui/LogoBadge";

interface ProjectSectionHeaderProps {
  logoSrc: string;
  logoAlt: string;
  logoWidthClass?: string;
  title: string;
  role: string;
  compactMobile?: boolean;
}

export function ProjectSectionHeader({
  logoSrc,
  logoAlt,
  logoWidthClass = "w-20 md:w-24",
  title,
  role,
  compactMobile = false,
}: ProjectSectionHeaderProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative z-10 mb-12 md:mb-24 max-w-7xl mx-auto px-6 border-b border-white/10 pb-6 md:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
    >
      <div className="flex items-center gap-6">
        <LogoBadge
          logoSrc={logoSrc}
          alt={logoAlt}
          className={`${logoWidthClass} h-auto opacity-100 brightness-0 invert`}
        />
        <div className={`h-8 w-px bg-white/10 ${compactMobile ? "hidden md:block" : ""}`} />
        <div className={compactMobile ? "hidden md:block" : ""}>
          <h2 className="text-lg text-white font-medium tracking-tight">{title}</h2>
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{role}</p>
        </div>
      </div>

      {compactMobile && (
        <div className="md:hidden">
          <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono">{role}</p>
        </div>
      )}
    </m.div>
  );
}

export function ProjectTimelineItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <span className="absolute -left-7.25 md:-left-9.25 top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full" />
      <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2 leading-tight">
        {title}
      </h4>
      <p className="text-sm text-zinc-400 leading-relaxed">{children}</p>
    </div>
  );
}

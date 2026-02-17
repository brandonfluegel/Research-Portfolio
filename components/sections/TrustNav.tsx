"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { scrollToSectionId } from "@/lib/utils/scroll";
import { TRUST_COMPANIES } from "@/lib/constants/sections";

export default function TrustNav({ activeSection = "" }: { activeSection?: string }) {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSectionId(id);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="w-full max-w-6xl mx-auto mb-12 md:mb-24 mt-8 md:mt-12"
    >
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 md:mb-8"></div>

      {/* MOBILE: Static tappable row */}
      <div className="flex md:hidden justify-between items-center px-2">
        {TRUST_COMPANIES.map((company) => (
          <a
            key={company.name}
            href={`#${company.id}`}
            onClick={(e) => scrollToSection(e, company.id)}
            className={`group relative flex flex-col items-center gap-2 py-3 px-1.5 rounded-xl transition-all duration-300 cursor-pointer tap-highlight-transparent active:scale-90 active:bg-white/5 ${
              activeSection === company.id ? "scale-105 bg-white/[0.04]" : ""
            }`}
          >
            <div className={`relative ${company.mobileSizing}`}>
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={120}
                height={60}
                sizes="(max-width: 768px) 20vw, 120px"
                className={`object-contain w-full h-full filter brightness-0 invert select-none transition-opacity duration-300 ${
                  activeSection === company.id
                    ? "opacity-100"
                    : "opacity-60"
                }`}
              />
            </div>
            {/* Active dot */}
            <div className={`w-1 h-1 rounded-full bg-white transition-opacity duration-300 ${
              activeSection === company.id ? "opacity-100" : "opacity-0"
            }`} />
          </a>
        ))}
      </div>

      {/* DESKTOP: Static layout with active states */}
      <div className="hidden md:flex justify-between items-center gap-x-12 px-6">
        {TRUST_COMPANIES.map((company) => (
          <a
            key={company.name}
            href={`#${company.id}`}
            onClick={(e) => scrollToSection(e, company.id)}
            className={`group relative flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
              activeSection === company.id ? "scale-105" : ""
            }`}
          >
            <div className={`relative ${company.sizing}`}>
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={200}
                height={100}
                sizes="(max-width: 1024px) 120px, 200px"
                className={`object-contain w-full h-full transition-opacity duration-300 filter brightness-0 invert select-none ${
                  activeSection === company.id
                    ? "opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
            </div>
            {/* Active indicator dot */}
            <div className={`w-1 h-1 rounded-full bg-white transition-opacity duration-300 ${
              activeSection === company.id ? "opacity-100" : "opacity-0"
            }`} />
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
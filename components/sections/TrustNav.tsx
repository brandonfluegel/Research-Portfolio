"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "Amazon", logo: "/assets/amazon-logo.png", id: "amazon-section", sizing: "h-5 md:h-8 w-auto", mobileSizing: "h-6 w-auto" },
  { name: "Sling", logo: "/assets/Sling-logo.png", id: "sling-section", sizing: "h-6 md:h-9 w-auto", mobileSizing: "h-6 w-auto" },
  { name: "NASA", logo: "/assets/nasa-logo.png", id: "nasa-section", sizing: "h-8 md:h-10 w-auto", mobileSizing: "h-8 w-auto" },
  { name: "Uber", logo: "/assets/uber-logo.png", id: "uber-section", sizing: "h-5 md:h-8 w-auto", mobileSizing: "h-5 w-auto" },
  { name: "Mercedes", logo: "/assets/benz.png", id: "mercedes-section", sizing: "h-8 md:h-10 w-auto", mobileSizing: "h-8 w-auto" },
];

export default function TrustNav({ activeSection = "" }: { activeSection?: string }) {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
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
        {companies.map((company) => (
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
                className={`object-contain w-full h-full filter brightness-0 invert select-none transition-opacity duration-300 ${
                  activeSection === company.id
                    ? "opacity-100"
                    : "opacity-60"
                }`}
                loading="eager"
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
        {companies.map((company) => (
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
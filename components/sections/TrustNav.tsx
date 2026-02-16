"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "Amazon", logo: "/assets/amazon-logo.png", id: "amazon-section", sizing: "h-6 md:h-8 w-auto" },
  { name: "Sling", logo: "/assets/Sling-logo.png", id: "sling-section", sizing: "h-6 md:h-9 w-auto" },
  { name: "NASA", logo: "/assets/nasa-logo.png", id: "nasa-section", sizing: "h-8 md:h-10 w-auto" },
  { name: "Uber", logo: "/assets/uber-logo.png", id: "uber-section", sizing: "h-5 md:h-8 w-auto" },
  { name: "Mercedes", logo: "/assets/benz.png", id: "mercedes-section", sizing: "h-8 md:h-10 w-auto" },
];

// CRITICAL FIX: Create a massive buffer (4 sets). 
// We will animate the container by -50%. 
// This means we show 2 sets, then slide to the next 2 sets, then reset.
// This guarantees we never run out of logos on wide screens.
const mobileCompanies = [...companies, ...companies, ...companies, ...companies];

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
      className="w-full max-w-6xl mx-auto mb-12 md:mb-24 mt-8 md:mt-12 overflow-hidden"
    >
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

      {/* MOBILE: Infinite Ticker (CSS Powered) */}
      <div className="md:hidden w-full overflow-hidden relative group">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        
        {/* CSS ANIMATION CONTAINER */}
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
          {mobileCompanies.map((company, index) => (
            <a
              key={`${company.name}-${index}`}
              href={`#${company.id}`}
              onClick={(e) => scrollToSection(e, company.id)}
              className="relative flex-shrink-0 cursor-pointer px-6" // Used padding instead of gap for smoother math
            >
              <div className={`relative ${company.sizing}`}>
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={150}
                  height={80}
                  className="object-contain w-full h-full opacity-100 md:opacity-60 filter brightness-0 invert select-none"
                  loading="eager"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* DESKTOP: Static Layout (Unchanged) */}
      <div className="hidden md:flex justify-between items-center gap-x-12 px-6">
        {companies.map((company) => (
          <a
            key={company.name}
            href={`#${company.id}`}
            onClick={(e) => scrollToSection(e, company.id)}
            className={`group relative transition-all duration-300 hover:scale-105 cursor-pointer ${
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
                    : "opacity-40 group-hover:opacity-100"
                }`}
              />
            </div>
            {/* Active indicator dot */}
            <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white transition-opacity duration-300 ${
              activeSection === company.id ? "opacity-100" : "opacity-0"
            }`} />
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
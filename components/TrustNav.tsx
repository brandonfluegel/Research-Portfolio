"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "Amazon", logo: "/assets/amazon-logo.png", id: "amazon-section", sizing: "h-6 md:h-8 w-auto" },
  { name: "NASA", logo: "/assets/nasa-logo.png", id: "nasa-section", sizing: "h-8 md:h-10 w-auto" },
  { name: "Uber", logo: "/assets/uber-logo.png", id: "uber-section", sizing: "h-5 md:h-8 w-auto" },
  { name: "Mercedes", logo: "/assets/benz.png", id: "mercedes-section", sizing: "h-8 md:h-10 w-auto" },
  { name: "Sling", logo: "/assets/Sling-logo.png", id: "sling-section", sizing: "h-6 md:h-9 w-auto" },
];

// 3 copies is good for ultra-wide screens, but requires -33.33% shift logic
const carouselCompanies = [...companies, ...companies, ...companies];

export default function TrustNav() {
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

      {/* MOBILE: Infinite Ticker */}
      <div className="md:hidden w-full overflow-hidden relative">
        {/* Added pointer-events-none to prevent scroll blocking */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
          // Added 'will-change-transform' and 'transform-gpu' for hardware acceleration
          className="flex gap-12 w-max px-4 will-change-transform transform-gpu"
          // FIX: Changed -50% to -33.333% (1/3 of total width) because we have 3 sets of items.
          // This ensures the loop snaps back to a visually identical starting point.
          animate={{ x: ["0%", "-33.333333%"] }} 
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20 // Adjusted duration for 1/3 distance (felt too slow at 25)
          }}
        >
          {carouselCompanies.map((company, index) => (
            <a
              key={`${company.name}-${index}`}
              href={`#${company.id}`}
              onClick={(e) => scrollToSection(e, company.id)}
              className="relative flex-shrink-0 cursor-pointer"
            >
              <div className={`relative ${company.sizing}`}>
                {/* Optimized: brightness/invert filters can be heavy, but GPU transform handles it better now */}
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={150}
                  height={80}
                  className="object-contain w-full h-full opacity-60 filter brightness-0 invert select-none"
                  loading="eager" // Load these immediately
                />
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      {/* DESKTOP: Static Professional Layout */}
      <div className="hidden md:flex justify-between items-center gap-x-12 px-6">
        {companies.map((company) => (
          <a
            key={company.name}
            href={`#${company.id}`}
            onClick={(e) => scrollToSection(e, company.id)}
            className="group relative transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className={`relative ${company.sizing}`}>
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={200}
                height={100}
                className="object-contain w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert select-none"
              />
            </div>
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
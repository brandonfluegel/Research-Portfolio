"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  { 
    name: "Sling", 
    logo: "/assets/Sling-logo.png", 
    id: "sling-section", 
    // Sling is "tall/blocky", so we restrict its height to make it smaller visually
    sizing: "h-6 md:h-9 w-auto"
  },
  { 
    name: "Amazon", 
    logo: "/assets/amazon-logo.png", 
    id: "amazon-section", 
    // Amazon is "wide/thin", so we let it be standard height
    sizing: "h-5 md:h-8 w-auto"
  },
  { 
    name: "Uber", 
    logo: "/assets/uber-logo.png", 
    id: "uber-section", 
    // Uber is short, needs moderate height
    sizing: "h-5 md:h-7 w-auto"
  },
  { 
    name: "NASA", 
    logo: "/assets/nasa-logo.png", 
    id: "nasa-section", 
    // NASA is Round -> Needs to be TALLER to match the visual weight of text
    sizing: "h-10 md:h-14 w-auto"
  },
  { 
    name: "Mercedes", 
    logo: "/assets/benz.png", 
    id: "mercedes-section", 
    // Mercedes is Thin/Round -> Needs maximum height to be visible
    sizing: "h-10 md:h-14 w-auto"
  }
];

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 mb-16 mt-6 md:mt-12"
    >
      {/* Layout Update: 
        - 'gap-x-6' (tighter) ensures 3 logos fit on the top row on mobile.
        - 'gap-y-8' gives breathing room between rows.
      */}
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-6 gap-y-8 md:gap-x-12">
        {companies.map((company) => (
          <a
            key={company.name}
            href={`#${company.id}`}
            onClick={(e) => scrollToSection(e, company.id)}
            className="group relative transition-all duration-300 transform hover:scale-110 cursor-pointer"
            aria-label={`Scroll to ${company.name} case study`}
          >
            <div className="relative flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              
              {/* We use the custom 'sizing' class from the config above.
                 This replaces the generic pixel width/height and lets Tailwind handle the aspect ratio.
              */}
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className={`${company.sizing} object-contain filter brightness-0 invert`}
              />

            </div>
          </a>
        ))}
      </div>
      
      {/* Separator Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-10 md:mt-16"></div>
    </motion.nav>
  );
}
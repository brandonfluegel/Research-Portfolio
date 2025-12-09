"use client";

import { motion } from "framer-motion";

const companies = [
  { 
    name: "Sling", 
    logo: "/assets/Sling-logo.png", 
    id: "sling-section", 
    sizing: "h-6 md:h-9 w-auto"
  },
  { 
    name: "Amazon", 
    logo: "/assets/amazon-logo.png", 
    id: "amazon-section", 
    sizing: "h-5 md:h-8 w-auto"
  },
  { 
    name: "Uber", 
    logo: "/assets/uber-logo.png", 
    id: "uber-section", 
    sizing: "h-5 md:h-7 w-auto"
  },
  { 
    name: "NASA", 
    logo: "/assets/nasa-logo.png", 
    id: "nasa-section", 
    sizing: "h-10 md:h-14 w-auto"
  },
  { 
    name: "Mercedes", 
    logo: "/assets/benz.png", 
    id: "mercedes-section", 
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
              
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className={`${company.sizing} object-contain filter brightness-0 invert`}
              />

            </div>
          </a>
        ))}
      </div>
      
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-10 md:mt-16"></div>
    </motion.nav>
  );
}
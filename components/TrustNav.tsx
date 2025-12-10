"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { 
    name: "Amazon", 
    logo: "/assets/amazon-logo.png", 
    id: "amazon-section", 
    sizing: "h-5 md:h-8 w-auto"
  },
  { 
    name: "NASA", 
    logo: "/assets/nasa-logo.png", 
    id: "nasa-section", 
    sizing: "h-6 md:h-10 w-auto"
  },
  { 
    name: "Uber", 
    logo: "/assets/uber-logo.png", 
    id: "uber-section", 
    sizing: "h-4 md:h-8 w-auto" 
  },
  { 
    name: "Mercedes", 
    logo: "/assets/benz.png", 
    id: "mercedes-section", 
    sizing: "h-6 md:h-10 w-auto"
  },
  { 
    name: "Sling", 
    logo: "/assets/Sling-logo.png", 
    id: "sling-section", 
    sizing: "h-5 md:h-9 w-auto"
  },
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      // FIX: mt-4 -> mt-2. mb-12 -> mb-8. This compresses the vertical space on mobile.
      className="w-full max-w-6xl mx-auto px-4 md:px-6 mb-8 md:mb-24 mt-2 md:mt-12"
    >
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 md:mb-10"></div>

      <div className="grid grid-cols-3 gap-4 place-items-center md:flex md:justify-between md:items-center md:gap-x-12">
        {companies.map((company) => (
          <a
            key={company.name}
            href={`#${company.id}`}
            onClick={(e) => scrollToSection(e, company.id)}
            className={`group relative transition-all duration-300 hover:scale-105 cursor-pointer ${
               company.name === 'Mercedes' || company.name === 'Sling' ? 'col-span-1' : '' 
            }`}
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
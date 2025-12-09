"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  { 
    name: "Sling", 
    logo: "/assets/Sling-logo.png", 
    id: "sling-section", 
    width: 80, 
    mobileWidth: 75 
  },
  { 
    name: "Amazon", 
    logo: "/assets/amazon-logo.png", 
    id: "amazon-section", 
    width: 90, 
    mobileWidth: 80 
  },
  { 
    name: "Uber", 
    logo: "/assets/uber-logo.png", 
    id: "uber-section", 
    width: 60, 
    mobileWidth: 55 // Boosted from 45
  },
  { 
    name: "NASA", 
    logo: "/assets/nasa-logo.png", 
    id: "nasa-section", 
    width: 80, 
    mobileWidth: 70 
  },
  { 
    name: "Mercedes", 
    logo: "/assets/benz.png", 
    id: "mercedes-section", 
    width: 85, 
    mobileWidth: 65 // Boosted from 60
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
      // FIX 1: Reduced top margin (mt-8 instead of mt-12 on mobile)
      className="w-full max-w-4xl mx-auto px-6 mb-16 mt-8 md:mt-12"
    >
      {/* FIX 2: Reduced gap-y (gap-y-6 instead of gap-y-10) for tighter rows */}
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-6 md:gap-x-12 md:gap-y-10">
        {companies.map((company) => (
          <a
            key={company.name}
            href={`#${company.id}`}
            onClick={(e) => scrollToSection(e, company.id)}
            className="group relative transition-all duration-300 transform hover:scale-105 cursor-pointer"
            aria-label={`Scroll to ${company.name} case study`}
          >
            <div className="relative flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              
              {/* Desktop Image */}
              <div className="hidden md:block">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={company.width} 
                  height={55}
                  className="object-contain filter brightness-0 invert"
                  style={{ width: 'auto', height: 'auto', maxHeight: '55px' }} 
                />
              </div>

              {/* Mobile Image */}
              <div className="block md:hidden">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={company.mobileWidth} 
                  height={45}
                  className="object-contain filter brightness-0 invert"
                  style={{ width: 'auto', height: 'auto', maxHeight: '45px' }} 
                />
              </div>

            </div>
          </a>
        ))}
      </div>
      
      {/* Separator Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-12 md:mt-16"></div>
    </motion.nav>
  );
}
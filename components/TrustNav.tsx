"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  { 
    name: "Sling", 
    logo: "/assets/Sling-logo.png", 
    id: "sling-section", 
    width: 80, 
    mobileWidth: 70 // Standard Rectangle
  },
  { 
    name: "Amazon", 
    logo: "/assets/amazon-logo.png", 
    id: "amazon-section", 
    width: 90, 
    mobileWidth: 85 // Large Rectangle (Anchor)
  },
  { 
    name: "Uber", 
    logo: "/assets/uber-logo.png", 
    id: "uber-section", 
    width: 65, 
    mobileWidth: 60 // Boosted slightly (was 55)
  },
  { 
    name: "NASA", 
    logo: "/assets/nasa-logo.png", 
    id: "nasa-section", 
    width: 90, // Massive boost (was 80)
    mobileWidth: 85 // Massive boost (was 70) - Round shapes need to be bigger
  },
  { 
    name: "Mercedes", 
    logo: "/assets/benz.png", 
    id: "mercedes-section", 
    width: 90, // Massive boost (was 85)
    mobileWidth: 80 // Massive boost (was 65) - Thin lines need extra size
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
      className="w-full max-w-4xl mx-auto px-6 mb-16 mt-6 md:mt-12"
    >
      {/* Layout Logic:
         - 'gap-x-12': Increases horizontal space so logos don't crowd each other.
         - 'gap-y-6': Keeps the vertical rows tight so they feel like one group.
         - 'items-center': Vertically centers the logos in their rows.
      */}
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-10 gap-y-8 md:gap-x-12 md:gap-y-10">
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
                  height={60}
                  className="object-contain filter brightness-0 invert"
                  style={{ width: 'auto', height: 'auto', maxHeight: '60px' }} 
                />
              </div>

              {/* Mobile Image */}
              <div className="block md:hidden">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={company.mobileWidth} 
                  height={50}
                  className="object-contain filter brightness-0 invert"
                  style={{ width: 'auto', height: 'auto', maxHeight: '50px' }} 
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
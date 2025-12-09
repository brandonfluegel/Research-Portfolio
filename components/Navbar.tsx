"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Sling", href: "#sling-section" },
  { name: "Amazon", href: "#amazon-section" },
  { name: "Uber", href: "#uber-section" },
  { name: "NASA", href: "#nasa-section" },
  { name: "Mercedes", href: "#mercedes-section" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent flash

  useEffect(() => {
    const handleScroll = () => {
      // 600px is roughly the height of the Hero section
      setIsScrolled(window.scrollY > 600);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Logic: 
  // If Mobile -> Always Left (0%)
  // If Desktop -> If Scrolled ? Left (0%) : Center (50%)
  const leftPosition = isMobile ? "0%" : (isScrolled ? "0%" : "50%");
  const xTransform = isMobile ? "0%" : (isScrolled ? "0%" : "-50%");

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 relative flex items-center justify-between h-14">
        
        {/* ==============================
            LOGO & NAME CONTAINER
        =============================== */}
        <motion.div
          className="absolute flex items-center gap-3"
          initial={false}
          animate={{
            left: leftPosition,
            x: xTransform,
          }}
          transition={{ type: "spring", stiffness: 45, damping: 20 }}
          style={{ position: 'absolute' }}
        >
          <Link 
            href="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-3"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20">
              <Image
                src="/assets/howdy.jpg"
                alt="Profile Image"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-semibold text-white tracking-wide whitespace-nowrap">
              Brandon Fluegel
            </span>
          </Link>
        </motion.div>

        {/* ==============================
            DESKTOP NAV LINKS
        =============================== */}
        <div className="hidden md:flex ml-auto space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors uppercase tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isScrolled ? 1 : 0,
                pointerEvents: isScrolled ? "auto" : "none" 
              }}
              transition={{ duration: 0.4 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* ==============================
            MOBILE HAMBURGER BUTTON
        =============================== */}
        <button
          className="md:hidden ml-auto flex flex-col space-y-1.5 z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* ==============================
          MOBILE MENU DROPDOWN
      =============================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden absolute top-full left-0 w-full"
          >
            <ul className="flex flex-col p-6 space-y-6 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-xl font-medium text-zinc-300 hover:text-white block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
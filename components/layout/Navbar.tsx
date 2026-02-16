"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Amazon", href: "#amazon-section" },
  { name: "NASA", href: "#nasa-section" },
  { name: "Uber", href: "#uber-section" },
  { name: "Mercedes", href: "#mercedes-section" },
  { name: "Sling", href: "#sling-section" },
];

export default function Navbar({ activeSection = "" }: { activeSection?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-white/10 py-3"
          : "bg-black/50 backdrop-blur-sm border-transparent py-4 md:py-5"
      }`}
    >
      {/* CRITICAL FIX: Added z-[60] to this container. 
         This ensures the Logo and Hamburger Button sit ON TOP of the overlay (which is z-[50]).
      */}
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14 relative z-[60]">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 group cursor-pointer relative">
          <Link 
            href="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-3"
          >
            <div className="relative h-9 w-9 md:h-10 md:w-10 overflow-hidden rounded-full border border-white/20 group-hover:border-white/50 transition-colors">
              <Image
                src="/assets/howdy.jpg"
                alt="Profile Image"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs md:text-sm font-semibold text-white tracking-wide uppercase whitespace-nowrap">
              Brandon Fluegel
            </span>
          </Link>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          className="flex flex-col space-y-1.5 p-2 hover:opacity-80 transition-opacity cursor-pointer group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* FULL SCREEN MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            // FIX: Changed 'bg-black/95' to 'bg-black' (SOLID). removed backdrop-blur. 
            // FIX: Changed z-40 to z-[50] to cover the navbar background but sit below the button (z-[60]).
            className="fixed inset-0 z-[50] bg-black flex flex-col items-center justify-center h-screen w-screen"
          >
            <ul className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`text-3xl md:text-5xl font-light transition-colors block tracking-widest uppercase hover:scale-105 transform duration-300 ${
                      activeSection === link.href.replace("#", "")
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
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
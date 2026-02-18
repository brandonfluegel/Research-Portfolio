"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useScrollMetrics from "@/hooks/useScrollMetrics";
import { scrollToSectionId, scrollToTopSmooth } from "@/lib/utils/scroll";
import { NAV_SECTIONS } from "@/lib/constants/sections";

export default function Navbar({ activeSection = "" }: { activeSection?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScrollMetrics();
  const isScrolled = scrollY > 50;

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    scrollToSectionId(href.replace("#", ""));
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
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14 relative z-[60]">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 group cursor-pointer relative">
          <Link 
            href="/" 
            onClick={scrollToTopSmooth}
            className="flex items-center gap-3"
          >
            <div className="relative h-9 w-9 md:h-10 md:w-10 overflow-hidden rounded-full border border-white/20 group-hover:border-white/50 transition-colors">
              <Image
                src="/assets/cowboy.jpg"
                alt="Profile Image"
                fill
                priority
                loading="eager"
                quality={100}
                sizes="40px"
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
            className="fixed inset-0 z-[50] bg-black flex flex-col items-center justify-center h-screen w-screen"
          >
            <ul className="flex flex-col space-y-8 text-center">
              {NAV_SECTIONS.map((link) => (
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
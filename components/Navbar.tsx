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

export default function Navbar() {
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
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        
        {/* LOGO - Static & Professional */}
        <Link 
          href="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center gap-3 z-50 group"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20 group-hover:border-white/50 transition-colors">
            <Image
              src="/assets/howdy.jpg"
              alt="Profile Image"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-semibold text-white tracking-wide uppercase">
            Brandon Fluegel
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex ml-auto space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden ml-auto flex flex-col space-y-1.5 z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black fixed inset-0 z-40 flex items-center justify-center"
          >
            <ul className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-2xl font-light text-zinc-300 hover:text-white block tracking-widest uppercase"
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
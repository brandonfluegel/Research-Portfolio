"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUp } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navItems = [
    { label: "Amazon", href: "#amazon" },
    { label: "Uber", href: "#uber" },
    { label: "NASA", href: "#nasa" },
    { label: "Mercedes", href: "#mercedes" },
    { label: "Harvard", href: "#harvard" },
  ];

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const toggleScrollTop = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener("scroll", toggleScrollTop);
    return () => window.removeEventListener("scroll", toggleScrollTop);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black py-2 px-4 shadow-md md:py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          Brandon Fluegel
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleScroll(item.href)}
                className="text-white hover:text-indigo-400 transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-3 text-white"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black py-4 absolute top-full left-0 right-0 shadow-lg"
          >
            <ul className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => {
                      handleScroll(item.href);
                      setMenuOpen(false);
                    }}
                    className="text-white hover:text-indigo-400 transition-colors text-lg block py-2 px-4"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full shadow-lg flex items-center justify-center z-50 md:hidden"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 640px) {
          nav {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
          p, li {
            line-height: 1.75;
            letter-spacing: 0.01em;
          }
        }
      `}</style>
    </nav>
  );
}

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { useScrolledPast } from "@/hooks/useScrollMetrics";
import { scrollToSectionId, scrollToTopSmooth } from "@/lib/utils/scroll";
import { NAV_SECTIONS } from "@/lib/constants/sections";

export default function Navbar({ activeSection = "" }: { activeSection?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pendingScrollRef = useRef<string | null>(null);
  const isScrolled = useScrolledPast(50);

  // Lock body scroll when overlay is open.
  // Prevents iOS Safari from scrolling the page behind the overlay,
  // which shifts scroll position and causes wrong-section landings.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  const scrollToSectionDesktop = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    scrollToSectionId(href.replace("#", ""));
  };

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    // Store target — actual scroll fires in onExitComplete after the
    // overlay fully unmounts (no fixed timeout that breaks on slow devices).
    pendingScrollRef.current = sectionId;
    // Kick off deferred-section mounting NOW so layout settles during the
    // exit animation, reducing scroll delay after the overlay is gone.
    window.dispatchEvent(new CustomEvent("force-render-all"));
    setMobileMenuOpen(false);
  };

  // Fires reliably when AnimatePresence finishes the exit animation,
  // regardless of device speed. Replaces the fragile setTimeout(310).
  const handleExitComplete = useCallback(() => {
    const sectionId = pendingScrollRef.current;
    if (sectionId) {
      pendingScrollRef.current = null;
      scrollToSectionId(sectionId);
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b py-3 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-white/10"
          : "bg-black/50 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14 relative z-60">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 group cursor-pointer relative">
          <Link 
            href="/" 
            onClick={scrollToTopSmooth}
            className="flex items-center gap-3"
          >
            <div className="relative h-9 w-9 md:h-10 md:w-10 overflow-hidden rounded-full border border-white/20 group-hover:border-white/50 transition-colors">
              <Image
                src="/assets/avatar.webp"
                alt="Brandon Allan Fluegel"
                fill
                priority
                sizes="40px"
                className="object-cover"
              />
            </div>
            <span className="text-xs md:text-sm font-semibold text-white tracking-wide uppercase whitespace-nowrap">
              Brandon Allan Fluegel
            </span>
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_SECTIONS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSectionDesktop(e, link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative px-3 py-2 text-[13px] font-medium tracking-wide rounded-full transition-colors duration-200 ${
                    isActive ? "text-white bg-white/10" : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* HAMBURGER BUTTON */}
        <button
          className="lg:hidden flex flex-col space-y-1.5 p-2 hover:opacity-80 transition-opacity cursor-pointer group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* FULL SCREEN MENU OVERLAY */}
      <AnimatePresence onExitComplete={handleExitComplete}>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center h-dvh w-screen"
          >
            <ul className="flex flex-col space-y-8 text-center">
              {NAV_SECTIONS.map((link, i) => (
                <m.li
                  key={link.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
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
                </m.li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
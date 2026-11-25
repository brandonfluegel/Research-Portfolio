// v3 - Winter 2026
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrolledPast } from "@/hooks/useScrollMetrics";
import useActiveSection from "@/hooks/useActiveSection";
import { NAV_SECTIONS } from "@/lib/constants/sections";

export default function Navbar() {
  const activeSection = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef(false);
  const isScrolled = useScrolledPast(50);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    closeRef.current?.focus();

    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    closeOnDesktop();

    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (restoreFocusRef.current) {
        restoreFocusRef.current = false;
        trigger?.focus();
      }
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      aria-label="Main navigation"
      className={`sticky top-0 z-50 transition-all duration-300 border-b pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-white/10"
          : "bg-black/50 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] flex items-center justify-between h-14 relative">
        <div className="flex items-center gap-3 group relative min-w-0">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="relative shrink-0 h-9 w-9 md:h-10 md:w-10 overflow-hidden rounded-full border border-white/20 group-hover:border-white/50 transition-colors">
              <Image
                src="/assets/avatar.webp"
                alt=""
                fill
                priority
                sizes="40px"
                className="object-cover"
              />
            </div>
            <span className="text-xs md:text-sm font-semibold text-white tracking-wide uppercase whitespace-nowrap truncate">
              Brandon Allan Fluegel
            </span>
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_SECTIONS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  data-analytics-location="navbar"
                  aria-current={isActive ? "true" : undefined}
                  className={`relative px-3.5 py-2 text-[13px] font-medium tracking-wide rounded-full transition-colors duration-200 ${
                    isActive ? "text-white bg-white/12 border border-white/10" : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          ref={triggerRef}
          type="button"
          className="menu-trigger lg:hidden shrink-0 -mr-2 h-11 w-11 flex flex-col items-center justify-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer tap-highlight-transparent"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      <noscript>
        <style>{`
          .menu-trigger, .video-playback-control { display: none !important; }
          @media (max-width: 63.999rem) {
            nav[aria-label="Main navigation"] { position: static; }
          }
        `}</style>
        <ul className="lg:hidden flex flex-wrap justify-center gap-x-4 gap-y-2 px-4 pb-2 text-sm">
          {NAV_SECTIONS.map((link) => (
            <li key={link.id}><a href={link.href}>{link.name}</a></li>
          ))}
        </ul>
      </noscript>

      <dialog
        ref={dialogRef}
        id="mobile-menu"
        aria-label="Main menu"
        onCancel={(event) => {
          event.preventDefault();
          restoreFocusRef.current = true;
          setMobileMenuOpen(false);
        }}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const items = Array.from(event.currentTarget.querySelectorAll<HTMLElement>("button:not([disabled]), a[href]"));
          if (items.length === 0) return;
          const index = items.findIndex((item) => item === document.activeElement);
          const next = index < 0
            ? (event.shiftKey ? items.length - 1 : 0)
            : (index + (event.shiftKey ? -1 : 1) + items.length) % items.length;
          event.preventDefault();
          items[next].focus();
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto overscroll-contain border-0 bg-black text-white p-0 backdrop:bg-black"
      >
        <div className="min-h-full flex flex-col px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))]">
          <div className="flex justify-end">
            <button
              ref={closeRef}
              type="button"
              onClick={() => {
                restoreFocusRef.current = true;
                setMobileMenuOpen(false);
              }}
              aria-label="Close Menu"
              className="h-11 w-11 flex items-center justify-center text-3xl leading-none"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <ul className="flex flex-1 flex-col items-center justify-center gap-4 py-4 text-center">
            {NAV_SECTIONS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  data-analytics-location="navbar"
                  aria-current={activeSection === link.id ? "true" : undefined}
                  className={`inline-flex min-h-11 items-center text-2xl sm:text-3xl md:text-5xl font-light tracking-widest uppercase transition-colors ${
                    activeSection === link.id ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </nav>
  );
}

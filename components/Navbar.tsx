"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/assets/howdy.jpg"
            alt="Profile Image"
            width={55}
            height={55}
            className="rounded-full relative top-0" // explicitly moves the image downward
          />
          <span className="text-lg font-semibold text-white">Brandon Fluegel</span>
        </Link>

        <button
          className="sm:hidden flex flex-col space-y-1.5"
          onClick={handleToggle}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        <div className="hidden items-center space-x-6 text-white sm:flex">
          {["amazon", "uber", "NASA", "mercedes", "harvard"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="capitalize transition hover:text-indigo-300"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#connect"
            className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-400"
          >
            Book a conversation
          </Link>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black bg-opacity-95 shadow-xl py-4">
            <div className="flex flex-col space-y-4 px-6 text-white">
              {["amazon", "uber", "NASA", "mercedes", "harvard"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  onClick={handleLinkClick}
                  className="capitalize text-lg"
                >
                  {item}
                </Link>
              ))}
              <Link
                href="#connect"
                onClick={handleLinkClick}
                className="rounded-full bg-indigo-500 px-5 py-3 text-center text-base font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:bg-indigo-400"
              >
                Book a conversation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

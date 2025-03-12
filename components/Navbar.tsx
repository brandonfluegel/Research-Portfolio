"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(prev => !prev);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/assets/me.jpg"
            alt="Profile Image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-lg font-semibold text-white">Brandon Fluegel</span>
        </Link>

        <button className="sm:hidden flex flex-col space-y-1.5" onClick={handleToggle}>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6 text-white">
          {["amazon", "uber", "nasa", "mercedes", "harvard"].map((item) => (
            <li key={item}>
              <Link href={`#${item}`} className="capitalize hover:text-indigo-300">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Dropdown (Fixed positioning to prevent overflow) */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black bg-opacity-95 shadow-xl py-4">
            <ul className="flex flex-col space-y-4 text-white px-6">
              {["amazon", "uber", "nasa", "mercedes", "harvard"].map((item) => (
                <li key={item}>
                  <Link href={`#${item}`} onClick={handleLinkClick} className="capitalize block text-lg">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-md px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/assets/me.jpg"
            alt="Profile Image"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <span className="text-xl font-bold text-white">Brandon Fluegel</span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="sm:hidden" aria-label="Menu" id="menu-toggle" onClick={() => {
          setIsOpen(!isOpen);
        }}>
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white" />
        </button>

        {/* Desktop Links */}
        <ul className="hidden sm:flex items-center space-x-8 text-white font-medium">
          <li><Link href="#amazon">Amazon</Link></li>
          <li><Link href="#uber">Uber</Link></li>
          <li><Link href="#nasa">NASA</Link></li>
          <li><Link href="#mercedes">Mercedes</Link></li>
          <li><Link href="#harvard">Harvard</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden mt-4">
          <ul className="flex flex-col space-y-3 text-white text-lg font-semibold">
            <li><Link href="#amazon">Amazon</Link></li>
            <li><Link href="#uber">Uber</Link></li>
            <li><Link href="#nasa">NASA</Link></li>
            <li><Link href="#mercedes">Mercedes</Link></li>
            <li><Link href="#harvard">Harvard</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

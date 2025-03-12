"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur px-4 py-3">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/me.jpg"
            alt="Profile Image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-lg font-semibold text-white">Brandon Fluegel</span>
        </Link>

        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => document.getElementById('mobileMenu')!.classList.toggle('hidden')}
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        <ul className="hidden sm:flex space-x-6 text-white font-medium">
          <li><Link href="#amazon">Amazon</Link></li>
          <li><Link href="#uber">Uber</Link></li>
          <li><Link href="#nasa">NASA</Link></li>
          <li><Link href="#mercedes">Mercedes</Link></li>
          <li><Link href="#harvard">Harvard</Link></li>
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      <div id="mobileMenu" className="hidden sm:hidden text-white pt-4">
        <ul className="space-y-2 text-lg">
          <li><Link href="#amazon">Amazon</Link></li>
          <li><Link href="#uber">Uber</Link></li>
          <li><Link href="#nasa">NASA</Link></li>
          <li><Link href="#mercedes">Mercedes</Link></li>
          <li><Link href="#harvard">Harvard</Link></li>
        </ul>
      </div>
    </nav>
  );
}

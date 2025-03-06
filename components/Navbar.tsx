"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 backdrop-blur-md z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-6 py-6"> {/* increased from py-4 to py-6 */}
        <div className="text-2xl font-bold text-white">Brandon Fluegel, Ph.D</div>
        <div className="flex gap-6">
          <Link href="#projects" className="text-gray-300 hover:text-white transition">Projects</Link>
          <Link href="#about" className="text-gray-300 hover:text-white transition">About</Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

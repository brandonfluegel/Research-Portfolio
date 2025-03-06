"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 backdrop-blur-md z-50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-6">
        <div className="text-2xl font-bold text-white mb-4 md:mb-0">Brandon Fluegel, Ph.D</div>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projects" className="text-gray-300 hover:text-white active:text-white transition duration-200">Projects</a>
          <a href="#about" className="text-gray-300 hover:text-white active:text-white transition duration-200">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white active:text-white transition duration-200">Contact</a>
        </div>
      </div>
    </nav>
  );
}
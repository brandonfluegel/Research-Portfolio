"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black py-2 px-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          Brandon Fluegel, Ph.D.
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="#amazon" className="text-white hover:text-indigo-400 transition-colors">Amazon</Link></li>
          <li><Link href="#uber" className="text-white hover:text-indigo-400 transition-colors">Uber</Link></li>
          <li><Link href="#nasa" className="text-white hover:text-indigo-400 transition-colors">NASA</Link></li>
          <li><Link href="#mercedes" className="text-white hover:text-indigo-400 transition-colors">Mercedes</Link></li>
          <li><Link href="#harvard" className="text-white hover:text-indigo-400 transition-colors">Harvard</Link></li>
        </ul>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black py-2 px-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/me.jpg"
            alt="Profile Image"
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
          <span className="text-xl font-bold text-white">Brandon Fluegel </span>
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

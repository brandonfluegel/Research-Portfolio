"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative w-full py-20 px-6 mt-20 border-t border-white/10 bg-black">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Headline */}
        <m.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tight"
        >
          Connecting perceptual science to engineering decisions <br />
          <span className="text-zinc-500">and measurable product outcomes.</span>
        </m.h2>

        {/* Sub-text */}
        <m.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg max-w-2xl mx-auto"
        >
          Open to senior leadership roles in Human Factors research, AI systems, and product strategy.
        </m.p>

        {/* CTA Buttons */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <Link 
            href="https://www.linkedin.com/in/fluegel/" 
            target="_blank"
            className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300"
          >
            <LinkedinIcon />
            Connect on LinkedIn
          </Link>
          
          <Link 
            href="mailto:brandon.uxr@gmail.com" 
            className="flex items-center gap-2 px-8 py-4 bg-zinc-900 border border-white/20 text-white font-medium rounded-full hover:bg-zinc-800 transition-colors duration-300"
          >
            <Mail size={20} />
            Email Me
          </Link>
        </m.div>

        {/* Copyright */}
        <m.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-16 text-zinc-600 text-sm"
        >
          © {new Date().getFullYear()} Brandon Fluegel, PhD. All Rights Reserved.
        </m.div>
      </div>
    </footer>
  );
}
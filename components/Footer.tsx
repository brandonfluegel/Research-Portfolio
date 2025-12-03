"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full py-20 px-6 mt-20 border-t border-white/10 bg-black">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tight"
        >
          Ready to define the next generation of <br />
          <span className="text-zinc-500">Human-AI Interaction?</span>
        </motion.h2>

        {/* Sub-text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg max-w-2xl mx-auto"
        >
          I am currently a Staff Product Researcher at Sling TV. <br className="hidden sm:block" />
          Always open to discussing high-impact leadership roles in AI & Product Strategy.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
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
            <Linkedin size={20} />
            Connect on LinkedIn
          </Link>
          
          <Link 
            href="mailto:brandon.uxr@gmail.com" 
            className="flex items-center gap-2 px-8 py-4 bg-zinc-900 border border-white/20 text-white font-medium rounded-full hover:bg-zinc-800 transition-colors duration-300"
          >
            <Mail size={20} />
            Email Me
          </Link>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-16 text-zinc-600 text-sm"
        >
          © {new Date().getFullYear()} Brandon Fluegel, PhD. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
}
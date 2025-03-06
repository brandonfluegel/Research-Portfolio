"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto my-32 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg text-gray-300 leading-relaxed"
      >
        My research explores the cognitive and physical limitations of humans to inform the design of complex consumer products and technology.For the past 10 years, I've conducted human-centered research at Amazon, Uber, NASA, Mercedes-Benz, and Harvard.<br/><br/>
        
      </motion.p>
    </section>
  );
}

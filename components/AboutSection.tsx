"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto my-24 px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-6"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-base sm:text-lg text-gray-300 leading-relaxed px-4"
      >
        I'm Brandon, a UX & Human Factors researcher passionate about understanding users deeply to craft engaging experiences.{" "}
        <Link href="/about" className="underline text-white">
          Learn more about me →
        </Link>
      </motion.p>
    </section>
  );
}
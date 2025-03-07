"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto my-32 px-6 text-center relative">
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
        className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
      >
        I'm Brandon, a UX & Human Factors researcher passionate about deeply understanding users to craft engaging, intuitive, and impactful experiences. Over the past decade, I've collaborated with industry-leading organizations—including Amazon, Uber, NASA, Mercedes-Benz, and Harvard—transforming complex user challenges into actionable insights and delightful product designs. My research approach combines rigorous scientific methods with creative storytelling, consistently driving measurable improvements and innovation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <a
          href="#contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-3 rounded-lg transition duration-300 shadow-lg"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}

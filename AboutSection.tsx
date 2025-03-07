"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto my-32 px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl text-gray-300 leading-relaxed text-justify space-y-6"
      >
        <p>
          I'm Brandon, a UX & Human Factors researcher with over a decade of experience collaborating with top-tier organizations like Amazon, Uber, NASA, Mercedes-Benz, and Harvard. My passion lies in uncovering user behaviors and needs, transforming complex user challenges into intuitive, impactful experiences.
        </p>

        <p>
          My approach blends rigorous scientific methods with compelling storytelling, driving innovation, enhancing usability, and delivering measurable business outcomes.
        </p>
      </motion.div>
    </section>
  );
}

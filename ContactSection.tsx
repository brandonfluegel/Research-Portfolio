"use client";

import { motion } from "framer-motion";
import { LinkedinIcon, MailIcon } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto my-32 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-8"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-6"
      >
        <a
          href="https://www.linkedin.com/in/fluegel/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          <LinkedinIcon size={20} />
          LinkedIn Profile
        </a>

        <a
          href="mailto:Brandon.fluegel@js.held.com"
          className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition"
        >
          <MailIcon size={20} />
          Brandon.fluegel@js.held.com
        </a>
      </motion.div>
    </section>
  );
}

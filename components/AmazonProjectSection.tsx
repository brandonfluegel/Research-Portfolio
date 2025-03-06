"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import YearBadge from "@/components/YearBadge";

export default function AmazonProjectSection() {
  return (
    <section id="amazon" className="relative max-w-5xl mx-auto py-32 px-6">
      <YearBadge year="2025" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 relative z-10"
      >
        Amazon Devices Design Group
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-10 relative z-10"
      >
        {/* Glanceability Video */}
        <video
          src="/assets/Glanceability Animation.mp4"
          autoPlay muted loop playsInline
          className="rounded-xl shadow-xl w-full aspect-video object-cover"
        />

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src="/assets/fnirs.jpg"
            alt="Amazon fNIRS Research"
            width={600}
            height={400}
            className="rounded-xl shadow-xl object-cover hover:scale-105 transition-transform duration-500"
          />
          <Image
            src="/assets/Show10.jpg"
            alt="Echo Show 10 Device"
            width={600}
            height={400}
            className="rounded-xl shadow-xl object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Mobile UX Image */}
        <Image
          src="/assets/mobile.jpg"
          alt="Amazon Mobile UX"
          width={1200}
          height={600}
          className="rounded-xl shadow-xl object-cover hover:scale-105 transition-transform duration-500"
        />

        {/* Project Image */}
        <Image
          src="/assets/project-image-1.jpg"
          alt="Amazon Project Detail"
          width={1200}
          height={600}
          className="rounded-xl shadow-xl object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Text Content and Methods */}
      <div className="mt-12 text-gray-300 max-w-3xl mx-auto relative z-10">
        <p className="mb-6">
          Conducted extensive UX research for Amazon’s Alexa and Echo products, leading to significant reductions in response latency and greatly enhancing user satisfaction and product usability. My findings shaped strategic product improvements, revealing opportunities worth over $1.5 billion, and positively impacted millions of users worldwide.
        </p>

        <h3 className="font-bold mb-4">Research Methods Used:</h3>
        <ul className="list-disc ml-8">
          <li>Mixed-methods Studies</li>
          <li>Usability Testing</li>
          <li>Latency Analysis</li>
          <li>Quantitative Data Analysis</li>
        </ul>
      </div>
    </section>
  );
}

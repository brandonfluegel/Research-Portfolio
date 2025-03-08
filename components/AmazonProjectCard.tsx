"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import YearBadge from "@/components/YearBadge";

export default function AmazonProjectSection() {
  return (
    <section id="amazon" className="relative max-w-6xl mx-auto py-24 px-4">
      <YearBadge year="2025" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-8"
      >
        Amazon Devices Design Group
      </motion.h2>

      {/* Alternating Asymmetrical Grid clearly implemented */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="overflow-hidden rounded-xl shadow-xl">
          <video
            src="/assets/Glance.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-contain rounded-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/assets/FinalWidgetViz.png"
            alt="Final Widget Visualization"
            width={600}
            height={900}
            className="object-contain w-full h-auto hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/assets/fnirs.jpg"
            alt="fNIRS Brain Imaging"
            width={450}
            height={600}
            className="object-cover w-full h-auto hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/assets/award.JPG"
            alt="Receiving Award"
            width={600}
            height={400}
            className="object-contain w-full h-auto hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/assets/Show10.jpg"
            alt="Echo Show 10"
            width={600}
            height={400}
            className="object-contain w-full h-auto hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/assets/app.jpeg"
            alt="Amazon Mobile App"
            width={600}
            height={400}
            className="object-contain w-full h-auto hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-gray-300 text-justify max-w-3xl mx-auto text-backdrop"
      >
        <p className="mb-4">
          At Amazon, I conducted extensive mixed-methods research to enhance Alexa and Echo device experiences. My research led to major usability improvements and unlocked $1.5B in strategic opportunities by identifying and addressing critical user pain points.
        </p>
      </motion.div>
    </section>
  );
}

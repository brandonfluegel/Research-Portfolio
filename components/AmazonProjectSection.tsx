"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import YearBadge from "@/components/YearBadge";

export default function AmazonProjectSection() {
  return (
    <section id="amazon" className="relative max-w-6xl mx-auto py-32 px-6">
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

      <div className="max-w-3xl mx-auto text-center text-gray-300 leading-relaxed mb-12 relative z-10">
        <p className="mb-6">
          At Amazon, I spearheaded extensive UX research using mixed-methods studies, detailed usability testing, latency analysis, and quantitative data analysis to dramatically improve the Alexa and Echo user experiences. My research identified key pain points related to device response times and user interactions, leading to innovative solutions that significantly enhanced product usability. The strategic insights derived from my findings unlocked over $1.5 billion in opportunities and directly informed crucial design and engineering decisions impacting millions of global users.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 items-center mb-12 relative z-10">
        <Image
          src="/assets/fnirs.jpg"
          alt="fNIRS Brain Imaging Research"
          width={900}
          height={600}
          className="rounded-xl shadow-xl object-cover hover:scale-105 transition-transform duration-500 col-span-3"
        />
        <Image
          src="/assets/award.JPG"
          alt="Receiving Research Award"
          width={300}
          height={600}
          className="rounded-xl shadow-xl object-cover hover:scale-105 transition-transform duration-500 col-span-1"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-gray-300 my-12 text-center"
      >
        The goal of my research at Amazon was to deeply understand user behaviors and perceptions, enabling our teams to enhance interaction speed and overall user satisfaction. By integrating neuroscience and advanced usability techniques, our team delivered tangible improvements that refined both the technical performance and emotional appeal of Alexa and Echo devices.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 items-center my-12 relative z-10"
      >
        <video
          src="/assets/Glance.mp4"
          autoPlay muted loop playsInline
          className="rounded-xl shadow-xl w-full aspect-[9/16] object-cover"
        />

        <Image
          src="/assets/FinalWidgetViz.png"
          alt="Final Widget Visualization"
          width={600}
          height={1067}
          className="rounded-xl shadow-xl object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 relative z-10"
      >
        <Image
          src="/assets/Show10.jpg"
          alt="Echo Show 10 Device"
          width={600}
          height={400}
          className="rounded-xl shadow-xl object-cover hover:scale-105 transition-transform duration-500"
        />
        <Image
          src="/assets/app.jpeg"
          alt="Amazon Mobile App UX"
          width={600}
          height={400}
          className="rounded-xl shadow-xl object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </section>
  );
}

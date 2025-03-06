"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AmazonProjectSection() {
  return (
    <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-10 text-center"
      >
        Amazon Devices Design Group
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-8 items-center mb-12"
      >
        <div className="text-gray-200 text-left leading-relaxed">
          <p className="mb-4">
            Designed and conducted <strong className="text-indigo-400">25+ mixed-methods studies</strong>, delivering actionable insights that informed <strong className="text-indigo-400">100+ design iterations</strong> across Alexa+ Generative AI, Echo Show, Echo Hub, and Fire TV.
          </p>

          <p>
            Strategically prioritized high-impact research programs, including a multi-year study that identified a <strong className="text-indigo-400">$1.5 billion opportunity</strong> by optimizing Alexa’s response latency. Insights from my research defined Alexa Core Engineering latency targets for over <strong className="text-indigo-400">3 years</strong>, significantly improving <strong className="text-indigo-400">customer satisfaction, engagement, and measurable revenue growth</strong>.
          </p>

          <p className="mt-4 text-gray-400 italic">(June 2020 – November 2024)</p>
        </div>

        <div className="overflow-hidden relative rounded-md shadow-xl h-[400px]">
          <Image
            src="/assets/Show10.jpg"
            alt="Echo Show 10 Interface"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="overflow-hidden relative rounded-md shadow-xl h-[400px] mb-12"
      >
        <Image
          src="/assets/mobile.jpg"
          alt="Amazon Mobile UX"
          fill
          className="object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 rounded-lg overflow-hidden shadow-xl"
      >
        <Image
          src="/assets/Glanceability Animation.gif"
          alt="Alexa Glanceability Improvement"
          width={1200}
          height={700}
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </section>
  );
}

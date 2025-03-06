"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AmazonProjectCard() {
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
        <div className="text-gray-200 leading-relaxed text-left">
          <p className="mb-4">
            Designed and conducted <strong className="text-indigo-400">25+ mixed-methods studies</strong>, delivering actionable insights that informed <strong className="text-indigo-400">100+ design iterations</strong> across Alexa+ Generative AI, Echo Show, Echo Hub, and Fire TV.
          </p>

          <p>
            Strategically prioritized high-impact research programs, including a multi-year study that identified a <strong className="text-indigo-400">$1.5 billion opportunity</strong> by optimizing Alexa&apos;s response latency.
          </p>

          <p className="mt-4">
            Insights from my research defined Alexa Core Engineering latency targets for over <strong className="text-indigo-400">3 years</strong>, significantly improving <strong className="text-indigo-400">customer satisfaction, engagement, and measurable revenue growth</strong>.
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-md shadow-xl h-[400px] mb-12"
      >
        <Image
          src="/assets/mobile.jpg"
          alt="Amazon Mobile UX"
          fill
          className="object-contain object-top"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-lg shadow-xl mb-12"
      >
        <Image
          src="/assets/Glanceability Animation.gif"
          alt="Alexa Glanceability Improvement"
          width={1200}
          height={700}
          className="w-full h-auto object-cover"
        />
      </motion.div>

      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="italic border-l-4 border-indigo-500 pl-4 text-gray-300 text-xl"
      >
        &quot;Brandon&apos;s research directly translated to faster, more responsive interactions, significantly elevating the Alexa user experience and driving long-term product success.&quot;
        <span className="block font-bold mt-2">– Alexa Product Team Lead</span>
      </motion.blockquote>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center mt-16"
      >
        <div className="bg-neutral-800 rounded-xl p-4 shadow-xl">
          <h3 className="text-indigo-400 text-2xl font-bold">25+</h3>
          <p className="text-gray-300">Studies Conducted</p>
        </div>
        <div className="bg-neutral-800 rounded-xl p-4 shadow-xl">
          <h3 className="text-indigo-400 text-2xl font-bold">100+</h3>
          <p className="text-gray-300">Design Iterations</p>
        </div>
        <div className="bg-neutral-800 rounded-xl p-4 shadow-xl">
          <h3 className="text-indigo-400 text-2xl font-bold">$1.5B</h3>
          <p className="text-gray-300">Opportunity Unlocked</p>
        </div>
        <div className="bg-neutral-800 rounded-xl p-4 shadow-xl">
          <h3 className="text-indigo-400 text-2xl font-bold">3+ years</h3>
          <p className="text-gray-300">Latency Targets</p>
        </div>
      </motion.div>
    </section>
  );
}

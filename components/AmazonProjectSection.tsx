"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";

export default function AmazonProjectSection() {
  const { ref } = useParallax();

  return (
    <section id="amazon" className="relative max-w-6xl mx-auto py-24 px-4" ref={ref}>
      <div className="relative flex flex-col items-start">
        <LogoBadge
          logoSrc="/assets/amazon-logo.png"
          alt="Amazon Logo"
          className="absolute -top-32 left-0 opacity-10 w-72 h-auto"
        />
      </div>

      {/* Overview Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-left text-black"
        >
          <h3 className="text-2xl font-bold">Devices Design Research Group</h3>
          <p>
            Designed and conducted 25+ mixed-methods studies, delivering actionable insights that informed 100+ design iterations across Echo Show, Echo Hub, Fire TV, Alexa Mobile App, and Alexa+ Generative AI. Strategically prioritized high-impact research programs, including a multi-year study that identified a $1.5 billion opportunity by optimizing Alexa’s response latency.
          </p>
        </motion.div>

        <motion.video
          src="/assets/fnirs.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="rounded-xl object-cover w-full shadow-xl"
        />
      </div>

      {/* Case Studies Section */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-left mt-20 mb-8 text-black"
      >
        Case Studies
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Case Study 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-neutral-800 bg-opacity-70 rounded-xl shadow-lg p-8 space-y-4 text-white"
        >
          <h4 className="text-xl font-bold">Alexa Latency and Customer Experience</h4>
          <p>
            Conducted studies examining customer satisfaction related to Alexa response latency, establishing critical performance benchmarks.
          </p>
        </motion.div>

        {/* Case Study 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-neutral-800 bg-opacity-70 rounded-xl shadow-lg p-8 space-y-4 text-white"
        >
          <h4 className="text-xl font-bold">UI Attractiveness on TV Experiences</h4>
          <p>
            Analyzed customer perceptions of visual attractiveness across major TV interfaces, developing guidelines to optimize cognitive load and user satisfaction.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

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
          className="absolute -top-28 left-1/2 transform -translate-x-1/2 opacity-20 w-96 h-auto"
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
          <h3 className="text-2xl font-bold">Devices Design Group</h3>
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
          className="rounded-xl object-cover w-full shadow-xl hover:scale-105 transition-transform duration-500"
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
        {/* Case Study 1: Alexa Latency and Customer Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-neutral-800 bg-opacity-70 rounded-xl shadow-lg p-8 space-y-4 text-white"
        >
          <h4 className="text-xl font-bold">Alexa Latency and Customer Experience</h4>
          <p>
            Involved 30 participants performing 72 tasks across 12 intent types, examining latency between 500ms to 3000ms.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Quantitative Analysis, Usability Testing, Behavioral Metrics</li>
            <li><strong>Findings:</strong> Customer satisfaction dramatically decreased above 1000ms; identified 1500ms as maximum acceptable latency.</li>
            <li><strong>Impact:</strong> Guided performance targets, predicting substantial user engagement increases (50 billion additional interactions) and financial gains ($1.7 billion).</li>
          </ul>
        </motion.div>

        {/* Case Study 2: UI Attractiveness on TV Experiences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-neutral-800 bg-opacity-70 rounded-xl shadow-lg p-8 space-y-4 text-white"
        >
          <h4 className="text-xl font-bold">Customer Perceptions of UI Attractiveness</h4>
          <p>
            Evaluated visual attractiveness and cognitive load across popular TV interfaces using eye-tracking and brain-scanning (fNIRS).
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Eye-tracking, Brain Imaging (fNIRS), Surveys</li>
            <li><strong>Findings:</strong> Preferences for minimal visual density (Apple TV, Netflix), cognitive load associated with visual complexity.</li>
            <li><strong>Impact:</strong> Established UI design guidelines optimizing cognitive load, visual density, and content organization, significantly improving Amazon TV product designs.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

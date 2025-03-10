"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";

export default function NASAProjectSection() {
  const { ref } = useParallax();

  return (
    <section id="nasa" className="relative max-w-6xl mx-auto py-24 px-4" ref={ref}>
      <div className="relative flex flex-col items-start">
        <LogoBadge
          logoSrc="/assets/nasa-logo.png"
          alt="NASA Logo"
          className="absolute -top-28 left-0 opacity-20 w-72 h-auto"
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
          <h3 className="text-2xl font-bold">Astronaut Experience Research</h3>
          <p>
            Led four rounds of usability testing with NASA astronauts, informing iterative design improvements of medical workstation prototypes for use aboard Gateway, NASA's forthcoming lunar-orbiting space station. My findings ensured maximum usability, safety, and operational effectiveness.
          </p>
          <h4 className="font-semibold mt-4">Research Methods Used:</h4>
          <ul className="list-disc ml-6">
            <li>Usability Testing</li>
            <li>Task Analysis</li>
            <li>Structured Interviews</li>
          </ul>
        </motion.div>

        <Image
          src="/assets/nasahab2.PNG"
          alt="NASA Gateway Research"
          width={1200}
          height={700}
          className="rounded-lg object-cover w-full shadow-xl hover:scale-105 transition-transform duration-500"
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
          <h4 className="text-xl font-bold">Astronaut-Centered Medical Workstation Usability</h4>
          <p>
            Conducted astronaut-focused usability studies, uncovering critical insights that improved medical workstation interactions and ergonomics.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Usability Testing, Task Analysis, Structured Interviews</li>
            <li><strong>Findings:</strong> Identified usability challenges impacting astronaut performance.</li>
            <li><strong>Design Iterations:</strong> Optimized workstation layouts, significantly enhancing operational efficiency and safety.</li>
          </ul>
        </motion.div>

        {/* Case Study 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-neutral-800 bg-opacity-70 rounded-xl shadow-lg p-8 space-y-4 text-white"
        >
          <h4 className="text-xl font-bold">Medical Interface Optimization</h4>
          <p>
            Identified usability friction points in medical interfaces, informing redesigns that significantly reduced astronaut cognitive load and task errors.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Task Analysis, Structured Interviews, Heuristic Evaluations</li>
            <li><strong>Findings:</strong> Pinpointed and prioritized key usability barriers.</li>
            <li><strong>Impact:</strong> Streamlined interfaces, enhancing mission safety and operational reliability.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

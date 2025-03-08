"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import YearBadge from "@/components/YearBadge";
import useParallax from "@/app/hooks/useParallax";
import useDynamicTextColor from "@/app/hooks/useDynamicTextColor";

export default function NASAProjectSection() {
  const { ref, y } = useParallax();
  const textColor = useDynamicTextColor();

  return (
    <section id="nasa" className="relative max-w-6xl mx-auto py-24 px-4" ref={ref}>
      <YearBadge year="2018" className="opacity-100 text-black-900" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
        style={{ color: textColor }}
      >
        NASA Langley UX Research
      </motion.h2>

      {/* Overview Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
          style={{ color: '#222222' }}
        >
          <h3 className="text-2xl font-bold">Overview</h3>
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

        <motion.div style={{ y }} className="overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/assets/nasa.jpg"
            alt="NASA Gateway Research"
            width={1200}
            height={700}
            className="rounded-lg object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* Case Studies Section */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
        style={{ color: textColor }}
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
          className="bg-neutral-800 bg-opacity-40 rounded-xl shadow-lg p-8 space-y-4"
          style={{ color: textColor }}
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
          className="bg-neutral-800 bg-opacity-40 rounded-xl shadow-lg p-8 space-y-4"
          style={{ color: textColor }}
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
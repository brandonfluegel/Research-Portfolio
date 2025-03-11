"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function NASAProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative max-w-5xl mx-auto py-20 px-3 mt-10 scale-90" ref={ref}>
      <div id="nasa" className="absolute -top-28 left-1/2 transform -translate-x-1/2">
        <LogoBadge
          logoSrc="/assets/nasa-logo.png"
          alt="NASA Logo"
          className="opacity-20 w-60 h-auto"
        />
      </div>

      {/* Overview Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 grid md:grid-cols-2 gap-10 items-start"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-5 text-black">
          <h3 className="text-xl font-bold">Astronaut Experience Research</h3>
          <p>
            Led four rounds of usability testing with NASA astronauts, informing iterative design improvements of medical workstation prototypes for Gateway, an upcoming lunar-orbiting station. Increased astronaut task efficiency by <strong>40%</strong>.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight}>
          <Image
            src="/assets/nasahab2.PNG"
            alt="NASA Gateway Research"
            width={1200}
            height={700}
            className="rounded-xl object-cover w-full shadow-xl hover:scale-105 transition-transform duration-500"
          />
          <span className="mt-3 text-center text-sm font-medium text-black">Used VR to assess task performance in reaching and movement tasks.</span>
        </motion.div>
      </motion.div>

      {/* Case Studies Section */}
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl font-bold text-left mt-16 mb-6 text-black"
      >
        Case Studies
      </motion.h3>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {/* Case Study Card 1 */}
        <motion.div
          className="case-study-container rounded-xl shadow-lg p-6 cursor-pointer"
          variants={fadeInFromLeft}
          whileHover={{ scale: 1.03, y: -4 }}
          style={{ backgroundColor: "#e5e5e5", color: "#000000" }}
        >
          <h4 className="text-lg font-bold">Medical Workstation Usability</h4>
          <p>
            Conducted astronaut-focused usability studies, uncovering critical insights that improved interactions and ergonomics.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm">
            <li><strong>Methods:</strong> Usability Testing, Task Analysis</li>
            <li><strong>Findings:</strong> Reduced astronaut cognitive load significantly.</li>
            <li><strong>Impact:</strong> Enhanced operational efficiency and safety.</li>
          </ul>
        </motion.div>

        {/* Case Study Card 2 */}
        <motion.div
          className="case-study-container rounded-xl shadow-lg p-6 cursor-pointer"
          variants={fadeInFromRight}
          whileHover={{ scale: 1.03, y: -4 }}
          style={{ backgroundColor: "#e5e5e5", color: "#000000" }}
        >
          <h4 className="text-lg font-bold">Medical Interface Optimization</h4>
          <p>
            Identified usability friction points, significantly reducing astronaut errors.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm">
            <li><strong>Methods:</strong> Task Analysis, Interviews, Heuristic Evaluation</li>
            <li><strong>Findings:</strong> Improved interface clarity.</li>
            <li><strong>Impact:</strong> Enhanced mission reliability and safety.</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

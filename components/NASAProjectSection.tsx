"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function NASAProjectSection() {
  const { ref } = useParallax();

  return (
    <section id="nasa" className="relative max-w-6xl mx-auto py-24 px-4" ref={ref}>
      <LogoBadge
        logoSrc="/assets/nasa-logo.png"
        alt="NASA Logo"
        className="absolute -top-28 left-0 opacity-20 w-72 h-auto"
      />

      {/* Overview Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid md:grid-cols-2 gap-12 items-start"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-6 text-black">
          <h3 className="text-2xl font-bold">Astronaut Experience Research</h3>
          <p>
            Led four rounds of usability testing with NASA astronauts,
            informing iterative design improvements of medical workstation prototypes
            for Gateway, an upcoming lunar-orbiting station. Increased astronaut task efficiency by <strong><CountUp end={40} duration={2.5}/> %</strong>.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight}>
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.03}>
            <Image
              src="/assets/nasahab2.PNG"
              alt="NASA Gateway Research"
              width={1200}
              height={700}
              className="rounded-lg object-cover w-full shadow-xl"
            />
          </Tilt>
        </motion.div>
      </motion.div>

      {/* Case Studies Section */}
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl font-bold text-left mt-20 mb-8 text-black"
      >
        Case Studies
      </motion.h3>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10"
      >
        {/* Interactive Hover Card #1 */}
        <motion.div
          variants={fadeInFromLeft}
          whileHover={{ scale: 1.03, y: -5, boxShadow: "0 20px 30px rgba(0,0,0,0.35)" }}
          transition={{ duration: 0.3 }}
          className="bg-neutral-800 rounded-xl shadow-lg p-8 text-white cursor-pointer"
        >
          <h4 className="text-xl font-bold">Medical Workstation Usability</h4>
          <p>
            Conducted astronaut-focused usability studies, uncovering critical insights that improved interactions and ergonomics.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Usability Testing, Task Analysis</li>
            <li><strong>Findings:</strong> Reduced astronaut cognitive load</li>
            <li><strong>Impact:</strong> Increased operational efficiency and safety</li>
          </ul>
        </motion.div>

        {/* Interactive Hover Card #2 */}
        <motion.div
          variants={fadeInFromRight}
          whileHover={{ scale: 1.03, y: -5, boxShadow: "0 20px 30px rgba(0,0,0,0.35)" }}
          transition={{ duration: 0.3 }}
          className="bg-neutral-800 rounded-xl shadow-lg p-8 text-white cursor-pointer"
        >
          <h4 className="text-xl font-bold">Medical Interface Optimization</h4>
          <p>
            Identified usability friction points, significantly reducing astronaut errors.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Task Analysis, Interviews, Heuristic Evaluation</li>
            <li><strong>Findings:</strong> Improved interface clarity</li>
            <li><strong>Impact:</strong> Enhanced mission reliability and safety</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

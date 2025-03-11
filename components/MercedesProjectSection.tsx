"use client";

import { motion } from "framer-motion";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function MercedesProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative max-w-5xl mx-auto py-20 px-3 -mt-8 scale-90" ref={ref}>
      <div id="mercedes" className="absolute -top-30 left-1/2 transform -translate-x-1/2">
        <LogoBadge
          logoSrc="/assets/mercedes-logo.png"
          alt="Mercedes-Benz Logo"
          className="opacity-60 w-40 h-auto"
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
        <motion.div variants={fadeInFromLeft} className="space-y-5 text-white">
          <h3 className="text-xl font-bold">User Research Group</h3>
          <p>
            Conducted foundational research on passenger experiences in semi-autonomous vehicles and evaluated ambient noise levels in newly developed vehicle cabins. My findings guided critical improvements that significantly enhanced passenger comfort, luxury perception, and reinforced Mercedes-Benz’s market leadership.
          </p>
          <h4 className="font-semibold mt-3">Research Methods Used:</h4>
          <ul className="list-disc ml-5 text-sm">
            <li>Semi-structured Interviews</li>
            <li>Observational Studies</li>
            <li>Physiological Measurements</li>
          </ul>
        </motion.div>

        <motion.div variants={fadeInFromRight}>
          <video
            src="/assets/drive.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-xl object-cover w-full shadow-xl hover:scale-105 transition-transform duration-500"
            style={{ height: "40%" }}
          />
          <span className="mt-3 text-center text-sm font-medium text-white">Driving Simulator for Lab Research</span>
        </motion.div>
      </motion.div>

      {/* Case Studies Section */}
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl font-bold text-left mt-16 mb-6 text-white"
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
          style={{ backgroundColor: "#404040", color: "#ffffff" }}
        >
          <h4 className="text-lg font-bold">Passenger Trust in Semi-Autonomous Vehicles</h4>
          <p>
            Explored passenger experiences, identifying critical factors affecting comfort, trust, and anxiety.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm">
            <li><strong>Methods:</strong> Interviews, Observational Studies, Physiological Monitoring</li>
            <li><strong>Findings:</strong> Identified key trust-building factors</li>
            <li><strong>Impact:</strong> Improved vehicle interiors and interactions</li>
          </ul>
        </motion.div>

        {/* Case Study Card 2 */}
        <motion.div
          className="case-study-container rounded-xl shadow-lg p-6 cursor-pointer"
          variants={fadeInFromRight}
          whileHover={{ scale: 1.03, y: -4 }}
          style={{ backgroundColor: "#404040", color: "#ffffff" }}
        >
          <h4 className="text-lg font-bold">Acoustic Comfort in Luxury Vehicles</h4>
          <p>
            Conducted acoustic research identifying noise factors affecting luxury perceptions.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm">
            <li><strong>Methods:</strong> Acoustic Measurements, User Surveys</li>
            <li><strong>Findings:</strong> Identified critical noise issues</li>
            <li><strong>Impact:</strong> Significantly enhanced cabin comfort</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

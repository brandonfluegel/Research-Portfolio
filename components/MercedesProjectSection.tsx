"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function MercedesProjectSection() {
  const { ref } = useParallax();

  return (
    <section id="mercedes" className="relative max-w-6xl mx-auto py-24 px-4" ref={ref}>
      <LogoBadge
        logoSrc="/assets/mercedes-logo.png"
        alt="Mercedes-Benz Logo"
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
          <h3 className="text-2xl font-bold">User Research Group</h3>
          <p>
            Conducted foundational research on passenger experiences in semi-autonomous
            vehicles and ambient noise levels, guiding critical improvements that
            enhanced passenger comfort and luxury perception by <strong><CountUp end={50} duration={2.5} />%</strong>.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight}>
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.03}>
            <video
              src="/assets/drive.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl object-cover w-full shadow-xl"
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
          <h4 className="text-xl font-bold">Passenger Trust in Semi-Autonomous Vehicles</h4>
          <p>
            Explored passenger experiences, identifying critical factors affecting comfort, trust, and anxiety.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Interviews, Observational Studies, Physiological Monitoring</li>
            <li><strong>Findings:</strong> Identified key trust-building factors</li>
            <li><strong>Impact:</strong> Improved vehicle interiors and interactions</li>
          </ul>
        </motion.div>

        {/* Interactive Hover Card #2 */}
        <motion.div
          variants={fadeInFromRight}
          whileHover={{ scale: 1.03, y: -5, boxShadow: "0 20px 30px rgba(0,0,0,0.35)" }}
          transition={{ duration: 0.3 }}
          className="bg-neutral-800 rounded-xl shadow-lg p-8 text-white cursor-pointer"
        >
          <h4 className="text-xl font-bold">Acoustic Comfort in Luxury Vehicles</h4>
          <p>
            Conducted acoustic research identifying noise factors affecting luxury perceptions.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Acoustic Measurements, User Surveys</li>
            <li><strong>Findings:</strong> Identified critical noise issues</li>
            <li><strong>Impact:</strong> Significantly enhanced cabin comfort</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
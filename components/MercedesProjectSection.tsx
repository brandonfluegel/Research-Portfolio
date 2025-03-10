"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import CountUp from "react-countup";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function MercedesProjectSection() {
  const { ref } = useParallax();

  return (
    <section id="mercedes" className="relative max-w-6xl mx-auto py-24 px-4" ref={ref}>
      <div className="relative flex flex-col items-start">
        <LogoBadge
          logoSrc="/assets/mercedes-logo.png"
          alt="Mercedes-Benz Logo"
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
          <h3 className="text-2xl font-bold">User Research Group</h3>
          <p>
            Conducted foundational research on passenger experiences in semi-autonomous vehicles and evaluated ambient noise levels in newly developed vehicle cabins. My findings guided critical improvements that significantly enhanced passenger comfort, luxury perception, and reinforced Mercedes-Benz’s market leadership.
          </p>
          <h4 className="font-semibold mt-4">Research Methods Used:</h4>
          <ul className="list-disc ml-6">
            <li>Semi-structured Interviews</li>
            <li>Observational Studies</li>
            <li>Physiological Measurements</li>
          </ul>
        </motion.div>

        <motion.video
          src="/assets/drive.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="rounded-xl object-cover w-full md:w-3/4 mx-auto h-auto shadow-xl hover:scale-105 transition-transform duration-500"
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
          <h4 className="text-xl font-bold">Passenger Trust in Semi-Autonomous Vehicles</h4>
          <p>
            Explored passenger experiences, identifying factors affecting comfort, trust, and anxiety in semi-autonomous vehicles.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Interviews, Observational Studies, Physiological Monitoring</li>
            <li><strong>Findings:</strong> Highlighted crucial trust-building and comfort-enhancing design elements.</li>
            <li><strong>Impact:</strong> Guided iterative enhancements in vehicle interiors, UI/UX, and passenger interactions.</li>
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
          <h4 className="text-xl font-bold">Acoustic Comfort in Luxury Vehicles</h4>
          <p>
            Conducted detailed acoustic research identifying noise factors impacting luxury experience.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Acoustic Measurements, Physiological Monitoring, User Surveys</li>
            <li><strong>Findings:</strong> Identified critical noise sources reducing luxury perception.</li>
            <li><strong>Impact:</strong> Guided acoustic engineering improvements, significantly enhancing cabin comfort and luxury experience.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

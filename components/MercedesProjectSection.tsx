"use client";

import { motion } from "framer-motion";
import YearBadge from "@/components/YearBadge";
import useDynamicTextColor from "@/app/hooks/useDynamicTextColor";

export default function MercedesProjectSection() {
  const textColor = useDynamicTextColor();

  return (
    <section id="mercedes" className="relative max-w-6xl mx-auto py-24 px-4">
      <YearBadge year="2017" className="opacity-90 text-gray-900" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
        style={{ color: textColor }}
      >
        Mercedes-Benz Research & Development
      </motion.h2>

      {/* Overview Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
          style={{ color: textColor }}
        >
          <h3 className="text-2xl font-bold">Overview</h3>
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

        <video
          src="/assets/drive.mp4"
          autoPlay
          muted
          loop
          className="rounded-xl object-cover w-full md:w-3/4 mx-auto h-auto hover:scale-105 transition-transform duration-500 shadow-xl"
        />
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
          className="bg-neutral-800 bg-opacity-40 rounded-xl shadow-lg p-8 space-y-4"
          style={{ color: textColor }}
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

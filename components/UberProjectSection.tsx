"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function UberProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative max-w-5xl mx-auto py-20 px-3 -mt-8 scale-90" ref={ref}>
      <div id="uber" className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <LogoBadge
          logoSrc="/assets/uber-logo.png"
          alt="Uber Logo"
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
        <motion.div variants={fadeInFromLeft} className="space-y-5">
          <h3 className="text-xl font-bold">Driver Experience Research</h3>
          <p>
            Conducted international ethnography and contextual inquiry research in Brazil that informed the iterative design of the rental driver app and payments experience. My research significantly improved driver satisfaction, increasing retention by over <strong>30%</strong>.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight}>
          <Image
            src="/assets/project-image-2.jpg"
            alt="Uber Research Fieldwork"
            width={1200}
            height={800}
            className="rounded-xl object-cover w-full shadow-xl hover:scale-105 transition-transform duration-500"
          />
          <span className="mt-3 text-center text-sm font-medium text-white">Iterative Design of the Uber Driver App</span>
        </motion.div>
      </motion.div>

      {/* Case Studies Section */}
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl font-bold text-left mt-16 mb-6"
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
          style={{ backgroundColor: "#9ca3af", color: "#ffffff" }}
        >
          <h4 className="text-lg font-bold">Improving Driver Payment Experience</h4>
          <p>
            Investigated payment processing challenges, identifying key improvement areas.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm">
            <li><strong>Methods:</strong> Ethnographic Research, Contextual Inquiry, Interviews</li>
            <li><strong>Findings:</strong> Identified pain points in payment processing</li>
            <li><strong>Impact:</strong> Enhanced app usability and increased driver satisfaction</li>
          </ul>
        </motion.div>

        {/* Case Study Card 2 */}
        <motion.div
          className="case-study-container rounded-xl shadow-lg p-6 cursor-pointer"
          variants={fadeInFromRight}
          whileHover={{ scale: 1.03, y: -4 }}
          style={{ backgroundColor: "#9ca3af", color: "#ffffff" }}
        >
          <h4 className="text-lg font-bold">Rental App Usability Optimization</h4>
          <p>
            Conducted research significantly improving app usability.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm">
            <li><strong>Methods:</strong> Contextual Inquiry, Usability Testing, Field Observations</li>
            <li><strong>Findings:</strong> Identified critical usability challenges</li>
            <li><strong>Impact:</strong> Improved user engagement and satisfaction</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

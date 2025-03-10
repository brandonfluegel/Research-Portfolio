"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function UberProjectSection() {
  const { ref } = useParallax();

  return (
    <section id="uber" className="relative max-w-6xl mx-auto py-24 px-4" ref={ref}>
      <LogoBadge
        logoSrc="/assets/uber-logo.png"
        alt="Uber Logo"
        className="absolute -top-28 left-0 opacity-20 w-72 h-auto"
      />

      {/* Overview Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 md:flex md:justify-between md:items-start gap-12"
      >
        <motion.div variants={fadeInFromLeft} className="md:w-1/2 space-y-6 text-black">
          <h3 className="text-2xl font-bold">Driver Experience Research</h3>
          <p>
            Conducted international ethnography and contextual inquiry research in Brazil
            that informed the iterative design of the rental driver app and payments
            experience. My research significantly improved driver satisfaction, increasing
            retention by over <strong><CountUp end={30} duration={2.5} />%</strong>.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="md:w-1/2">
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.03} className="bg-transparent shadow-none">
            <Image
              src="/assets/project-image-2.jpg"
              alt="Uber Research Fieldwork"
              width={1200}
              height={800}
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
          <h4 className="text-xl font-bold">Improving Driver Payment Experience</h4>
          <p>
            Investigated payment processing challenges, identifying key areas
            for improvement to enhance driver satisfaction.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Ethnography, Contextual Inquiry, Field Interviews</li>
            <li><strong>Findings:</strong> Payment usability improvements needed</li>
            <li><strong>Impact:</strong> Boosted driver retention significantly</li>
          </ul>
        </motion.div>

        {/* Interactive Hover Card #2 */}
        <motion.div
          variants={fadeInFromRight}
          whileHover={{ scale: 1.03, y: -5, boxShadow: "0 20px 30px rgba(0,0,0,0.35)" }}
          transition={{ duration: 0.3 }}
          className="bg-neutral-800 rounded-xl shadow-lg p-8 text-white cursor-pointer"
        >
          <h4 className="text-xl font-bold">Rental App Usability Optimization</h4>
          <p>
            Conducted contextual inquiries, substantially improving app usability,
            engagement, and driver satisfaction.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Contextual Inquiry, Usability Testing</li>
            <li><strong>Findings:</strong> Key usability barriers identified</li>
            <li><strong>Impact:</strong> Improved user efficiency and app engagement</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
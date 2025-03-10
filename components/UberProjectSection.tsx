"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";

export default function UberProjectSection() {
  const { ref } = useParallax();

  return (
    <section id="uber" className="relative max-w-6xl mx-auto py-24 px-4" ref={ref}>
      <div className="relative flex flex-col items-start">
        <LogoBadge
          logoSrc="/assets/uber-logo.png"
          alt="Uber Logo"
          className="absolute -top-28 left-0 opacity-20 w-72 h-auto"
        />
      </div>

      {/* Overview Section */}
      <div className="mt-16 md:flex md:justify-between md:items-start gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6 text-left text-black"
        >
          <h3 className="text-2xl font-bold">Driver Experience Research</h3>
          <p>
            Conducted international ethnography and contextual inquiry research in Brazil to inform the iterative design of the rental driver app and payments experience. My research greatly improved driver satisfaction, streamlined payments, and enhanced the passenger experience.
          </p>
        </motion.div>

        <Image
          src="/assets/project-image-2.jpg"
          alt="Uber Research Fieldwork"
          width={1200}
          height={800}
          className="rounded-xl object-cover w-full md:w-1/2 shadow-xl hover:scale-105 transition-transform duration-500"
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
          <h4 className="text-xl font-bold">Improving Driver Payment Experience</h4>
          <p>
            Investigated payment processing challenges, identifying areas for improvement to enhance driver satisfaction.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Ethnographic Research, Contextual Inquiry, Field Interviews</li>
            <li><strong>Findings:</strong> Key pain points in payment processing and app usability.</li>
            <li><strong>Impact:</strong> Major improvements in payment efficiency and app usability, increasing driver retention.</li>
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
          <h4 className="text-xl font-bold">Rental App Usability Optimization</h4>
          <p>
            Conducted contextual inquiry that significantly improved app usability, increasing user engagement and overall satisfaction.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Contextual Inquiry, Usability Testing, Field Observations</li>
            <li><strong>Findings:</strong> Identified usability challenges directly impacting driver efficiency.</li>
            <li><strong>Impact:</strong> Drove iterative design improvements, enhancing user experience and efficiency.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

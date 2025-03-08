"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import YearBadge from "@/components/YearBadge";
import useParallax from "@/app/hooks/useParallax";
import useDynamicTextColor from "@/app/hooks/useDynamicTextColor";

export default function UberProjectSection() {
  const { ref } = useParallax();
  const textColor = useDynamicTextColor();

  return (
    <section id="uber" className="relative max-w-6xl mx-auto py-24 px-4" ref={ref}>
      <YearBadge year="2019" className="opacity-100 text-gray-800 drop-shadow-xl" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
        style={{ color: textColor }}
      >
        Uber UX Research
      </motion.h2>

      {/* Overview Section */}
      <div className="md:flex md:justify-between md:items-center gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6"
          style={{ color: textColor }}
        >
          <h3 className="text-2xl font-bold">Overview</h3>
          <p>
            Conducted international ethnography and contextual inquiry research in Brazil to inform the iterative design of the rental driver app and payments experience. My research greatly improved driver satisfaction, streamlined payments, and enhanced the passenger experience.
          </p>
          <h4 className="font-semibold mt-4">Research Methods Used:</h4>
          <ul className="list-disc ml-6">
            <li>Ethnographic Research</li>
            <li>Contextual Inquiry</li>
            <li>Field Interviews</li>
          </ul>
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
          <h4 className="text-xl font-bold">Improving Driver Payment Experience</h4>
          <p>
            Investigated challenges with payment processing and identified crucial areas for improvement, enhancing overall driver satisfaction and trust.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Ethnographic Research, Contextual Inquiry, Field Interviews</li>
            <li><strong>Findings:</strong> Uncovered key pain points in payment processing and app usability.</li>
            <li><strong>Impact:</strong> Led to major improvements in payment efficiency and driver app usability, resulting in increased driver retention and satisfaction.</li>
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
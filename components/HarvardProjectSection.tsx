"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function HarvardProjectSection() {
  const { ref } = useParallax();

  return (
    <section id="harvard" className="relative max-w-6xl mx-auto py-24 px-4" ref={ref}>
      <LogoBadge
        logoSrc="/assets/harvard-logo.png"
        alt="Harvard Logo"
        className="absolute -top-28 left-0 opacity-80 w-105 h-auto"
      />

      {/* Overview Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid md:grid-cols-2 gap-12 items-start"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-6">
          <h3 className="text-2xl font-bold">Clinical Neuroscience Lab</h3>
          <p>
            Conducted research using advanced brain imaging techniques (fMRI, EEG) to evaluate the effectiveness of transcutaneous vagus nerve stimulation (tVNS) therapy for major depression. Identified brain activity patterns correlating with symptom reduction, influencing clinical practices and improving patient care.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight}>
          <Image
            src="/assets/tVNS.png"
            alt="tVNS Therapy Device"
            width={900}
            height={600}
            className="rounded-lg object-cover w-full shadow-xl hover:scale-105 transition-transform duration-500"
          />
            <span className="mt-4 text-center text-sm font-medium text-white">Fixing tVNS Device on Patient (correct vs placebo)</span>
        </motion.div>
      </motion.div>

      {/* Case Studies Section */}
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl font-bold text-left mt-20 mb-8"
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
        {/* Case Study Card 1 */}
        <motion.div
          className="case-study-container rounded-xl shadow-lg p-8 cursor-pointer"
          variants={fadeInFromLeft}
          whileHover={{ scale: 1.03, y: -5 }}
          style={{ backgroundColor: "#262626", color: "#ffffff" }}
        >
          <h4 className="text-xl font-bold">Evaluating Neural Markers of Therapy Efficacy</h4>
          <p>
            Employed fMRI and EEG to determine neural correlates predicting successful responses to tVNS therapy.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> fMRI, EEG, Clinical Trials</li>
            <li><strong>Findings:</strong> Identified predictive neural markers</li>
            <li><strong>Impact:</strong> Personalized device adjustments for better outcomes</li>
          </ul>
        </motion.div>

        {/* Case Study Card 2 */}
        <motion.div
          className="case-study-container rounded-xl shadow-lg p-8 cursor-pointer"
          variants={fadeInFromRight}
          whileHover={{ scale: 1.03, y: -5 }}
          style={{ backgroundColor: "#262626", color: "#ffffff" }}
        >
          <h4 className="text-xl font-bold">Optimizing User Experience</h4>
          <p>
            Assessed cognitive and emotional effects of tVNS, improving device design significantly.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Cognitive Testing, Interviews, Physiological Monitoring</li>
            <li><strong>Findings:</strong> Positive emotional and cognitive outcomes</li>
            <li><strong>Impact:</strong> Enhanced device ergonomics and adherence</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

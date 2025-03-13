"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function HarvardProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative max-w-5xl mx-auto py-20 px-3 -mt-8 scale-90" ref={ref}>
      <div id="harvard" className="absolute -top-20 left-1/2 transform -translate-x-1/2">
        <LogoBadge
          logoSrc="/assets/harvard-logo.png"
          alt="Harvard Logo"
          className="opacity-70 w-100 h-auto"
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
          <h3 className="text-xl font-bold">Clinical Neuroscience Lab</h3>
          <p>
            Conducted research using advanced brain imaging techniques (fMRI, EEG) to evaluate the effectiveness of transcutaneous vagus nerve stimulation (tVNS) therapy for major depression. Identified brain activity patterns correlating with symptom reduction, influencing clinical practices and improving patient care.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="flex flex-col items-center">
          <Image
            src="/assets/tVNS.png"
            alt="tVNS Therapy Device"
            width={800}
            height={400}
            className="rounded-lg object-cover w-full shadow-xl hover:scale-105 transition-transform duration-500"
          />
          <span className="mt-3 text-center text-sm font-medium text-white">
            tVNS Device on Patient (correct vs placebo)
          </span>
        </motion.div>
      </motion.div>

      {/* Expanded Single Case Study */}
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl font-bold text-left mt-16 mb-6 text-white"
      >
        Case Study
      </motion.h3>

      <motion.div
        variants={fadeInFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full"
      >
        <motion.div
          className="case-study-container rounded-xl shadow-lg p-8 cursor-pointer"
          whileHover={{ scale: 1.02, y: -4 }}
          style={{ backgroundColor: "#262626", color: "#ffffff" }}
        >
          <h4 className="text-xl font-bold">Pioneering Non-Invasive Treatments for Anxiety and Depression</h4>
          <p className="mt-3">
            Pharmaceutical treatments for anxiety and depression often have challenging side effects. My research evaluated a promising alternative: transcutaneous vagus nerve stimulation (tVNS). Using brain imaging techniques (EEG, fMRI), participant interviews, quantitative symptom assessments, and physiological monitoring, we identified neurological markers predictive of successful treatment.
          </p>
          <p className="mt-3">
            This approach resulted in significant symptom reduction in over 60% of participants, influencing clinical practices and providing patients a safer therapeutic alternative without medication side effects.
          </p>
         
         
        </motion.div>
      </motion.div>
    </section>
  );
}

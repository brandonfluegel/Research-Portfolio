"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";

export default function HarvardProjectSection() {
  const { ref } = useParallax();

  return (
    <section id="harvard" className="relative max-w-6xl mx-auto py-24 px-4" ref={ref}>
      <div className="relative flex flex-col items-start">
        <LogoBadge
          logoSrc="/assets/harvard-logo.png"
          alt="Harvard Logo"
          className="absolute -top-28 left-0 opacity-20 w-96 h-auto"
        />
      </div>

      {/* Overview Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-left text-black"
        >
          <h3 className="text-2xl font-bold mb-4">Clinical Neuroscience Lab</h3>
          <p>
            Conducted research using advanced brain imaging techniques (fMRI, EEG) to evaluate the effectiveness of transcutaneous vagus nerve stimulation (tVNS) therapy for major depression under the mentorship of Dr. Ronald Garcia. My research identified brain activity patterns correlating with symptom reduction, influencing clinical practices and improving patient care.
          </p>
        </motion.div>

        <motion.div className="overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/assets/tVNS.png"
            alt="tVNS Therapy Device"
            width={900}
            height={600}
            className="rounded-lg object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
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
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-neutral-800 bg-opacity-70 rounded-xl shadow-lg p-6 text-white"
        >
          <h3 className="text-xl font-bold">Evaluating Neural Markers of Therapy Efficacy</h3>
          <p className="mt-3">
            Employed fMRI and EEG methodologies to determine neural correlates predicting successful treatment responses to tVNS therapy.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> fMRI, EEG, Clinical Trials</li>
            <li><strong>Findings:</strong> Neural markers predicting treatment success.</li>
            <li><strong>Impact:</strong> Informed personalized device adjustments for enhanced therapeutic outcomes.</li>
          </ul>
        </motion.div>

        {/* Case Study 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-neutral-800 bg-opacity-70 rounded-xl shadow-lg p-6 text-white"
        >
          <h3 className="text-xl font-bold">Optimizing User Experience</h3>
          <p>
            Assessed cognitive and emotional effects of tVNS therapy, influencing iterative device design improvements.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Cognitive Testing, Physiological Monitoring, Interviews</li>
            <li><strong>Findings:</strong> Positive cognitive and emotional outcomes.</li>
            <li><strong>Impact:</strong> Improved ergonomics, interfaces, and user adherence.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

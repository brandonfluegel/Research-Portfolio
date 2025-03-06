"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import YearBadge from "@/components/YearBadge";

export default function HarvardProjectSection() {
  return (
    <section id="harvard" className="relative max-w-4xl mx-auto py-24 px-4">
      <YearBadge year="2015" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-8 relative z-10"
      >
        Harvard Medical School
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 mb-12 relative z-10"
      >
        <Image
          src="/assets/odu.jpg"
          alt="Harvard Research Environment"
          width={600}
          height={400}
          className="rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-500"
        />

        <Image
          src="/assets/tVNS.png"
          alt="tVNS Therapy Device"
          width={600}
          height={400}
          className="rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-500"
        />

        <div className="md:col-span-2">
          <Image
            src="/assets/project-image-5.jpg"
            alt="Harvard Project Image 5"
            width={1200}
            height={600}
            className="rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-500 w-full h-auto"
          />
        </div>
      </motion.div>

      <div className="text-gray-300 text-left max-w-3xl mx-auto relative z-10">
        <p className="mb-4">
          Conducted research using advanced brain imaging techniques (fMRI, EEG) to evaluate the effectiveness of transcutaneous vagus nerve stimulation (tVNS) therapy for major depression under mentorship of Dr. Ronald Garcia. My research identified brain activity patterns correlating with symptom reduction, influencing clinical practices and improving patient care.
        </p>

        <h3 className="font-bold mt-6">Research Methods Used:</h3>
        <ul className="list-disc ml-6">
          <li>Functional Magnetic Resonance Imaging (fMRI)</li>
          <li>Electroencephalography (EEG)</li>
          <li>Experimental Design and Analysis</li>
          <li>Clinical Trials</li>
        </ul>
      </div>
    </section>
  );
}

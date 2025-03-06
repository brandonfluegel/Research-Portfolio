"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import YearBadge from "@/components/YearBadge";

export default function UberProjectSection() {
  return (
    <section id="uber" className="relative max-w-4xl mx-auto py-24 px-4">
      <YearBadge year="2019" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-8 relative z-10"
      >
        Uber UX Research
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 mb-12 relative z-10"
      >
        <Image
          src="/assets/Uber.jpg"
          alt="Uber Field Research"
          width={600}
          height={400}
          className="rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-500"
        />

        <Image
          src="/assets/talk.jpg"
          alt="Conducting Interviews"
          width={600}
          height={400}
          className="rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-500"
        />

        <div className="md:col-span-2">
          <Image
            src="/assets/project-image-2.jpg"
            alt="Uber Project Image 2"
            width={1200}
            height={600}
            className="rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-500 w-full h-auto"
          />
        </div>
      </motion.div>

      <div className="text-gray-300 text-left max-w-3xl mx-auto relative z-10">
        <p className="mb-4">
          Conducted detailed ethnographic research in Brazil, closely observing and interacting with Uber rental drivers to understand their daily challenges. Insights from this work drove critical improvements in the rental driver app and payment processes, significantly enhancing driver satisfaction, earnings, and passenger experiences, thereby supporting Uber’s strategic growth initiatives.
        </p>

        <h3 className="font-bold mt-6">Research Methods Used:</h3>
        <ul className="list-disc ml-6">
          <li>Ethnographic Field Research</li>
          <li>Contextual Inquiry</li>
          <li>In-depth Interviews</li>
          <li>Participatory Design Sessions</li>
        </ul>
      </div>
    </section>
  );
}

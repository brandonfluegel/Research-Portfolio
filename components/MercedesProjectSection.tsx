"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import YearBadge from "@/components/YearBadge";

export default function MercedesProjectSection() {
  return (
    <section id="mercedes" className="relative max-w-4xl mx-auto py-24 px-4">
      <YearBadge year="2017" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-8 relative z-10"
      >
        Mercedes-Benz Research & Development
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 mb-12 relative z-10"
      >
        <Image
          src="/assets/mercedes.jpg"
          alt="Mercedes-Benz Passenger Experience"
          width={600}
          height={400}
          className="rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-500"
        />

        <video
          src="/assets/drive.mp4"
          autoPlay
          muted
          loop
          className="rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-500"
        />

        <div className="md:col-span-2">
          <Image
            src="/assets/project-image-4.jpg"
            alt="Mercedes Project Image 4"
            width={1200}
            height={600}
            className="rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-500 w-full h-auto"
          />
        </div>
      </motion.div>

      <div className="text-gray-300 text-left max-w-3xl mx-auto relative z-10">
        <p className="mb-4">
          Conducted comprehensive research on passenger experiences in semi-autonomous vehicles, including interviews, observational studies, and physiological measurements. Evaluated interior noise levels to enhance passenger comfort. My research influenced critical design improvements, significantly enhancing passenger comfort and vehicle acoustics, thus boosting customer satisfaction and reinforcing Mercedes-Benz's market leadership in luxury vehicles.
        </p>

        <h3 className="font-bold mt-6">Research Methods Used:</h3>
        <ul className="list-disc ml-6">
          <li>Semi-structured Interviews</li>
          <li>Observational Studies</li>
          <li>Physiological Measurements</li>
          <li>Acoustic Evaluation</li>
        </ul>
      </div>
    </section>
  );
}

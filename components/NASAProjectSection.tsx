"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import YearBadge from "@/components/YearBadge";

export default function NASAProjectSection() {
  return (
    <section id="nasa" className="relative max-w-4xl mx-auto py-24 px-4">
      <YearBadge year="2018" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-8 relative z-10"
      >
        NASA Langley UX Research
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 mb-12 relative z-10"
      >
        <Image
          src="/assets/nasa.jpg"
          alt="NASA Gateway Research"
          width={600}
          height={400}
          className="rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-500"
        />

        <Image
          src="/assets/vr.jpg"
          alt="NASA VR Simulation"
          width={600}
          height={400}
          className="rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-500"
        />

        <div className="md:col-span-2">
          <Image
            src="/assets/project-image-3.jpg"
            alt="NASA Project Image 3"
            width={1200}
            height={600}
            className="rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-500 w-full h-auto"
          />
        </div>
      </motion.div>

      <div className="text-gray-300 text-left max-w-3xl mx-auto relative z-10">
        <p className="mb-4">
          Led four rounds of usability tests with NASA astronauts to refine medical workstation prototypes intended for Gateway, NASA’s future space station orbiting the Moon. Through realistic simulations and task-based scenarios, I identified usability issues and cognitive challenges astronauts faced. Collaborating with engineers and medical experts, we simplified interactions and reduced mental workload, enhancing astronaut safety and effectiveness for critical missions.
        </p>

        <h3 className="font-bold mt-6">Research Methods Used:</h3>
        <ul className="list-disc ml-6">
          <li>Usability Testing</li>
          <li>Task Analysis</li>
          <li>Cognitive Walkthroughs</li>
          <li>Scenario-based Simulations</li>
        </ul>
      </div>
    </section>
  );
}

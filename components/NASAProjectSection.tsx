"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import {
  fadeInFromLeft,
  fadeInFromRight,
  fadeInUp,
  staggerContainer,
} from "@/app/utils/animationVariants";

export default function NASAProjectSection() {
  const { ref } = useParallax();

  return (
    <section
      className="relative max-w-5xl mx-auto py-20 px-3 mt-10 scale-90"
      ref={ref}
    >
      <div
        id="NASA"
        className="absolute -top-28 left-1/2 transform -translate-x-1/2"
      >
        <LogoBadge
          logoSrc="/assets/nasa-logo.png"
          alt="NASA Logo"
          className="opacity-70 w-60 h-auto"
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
        <motion.div variants={fadeInFromLeft} className="space-y-5 text-black">
          <h3 className="text-xl font-bold">Astronaut Experience Research</h3>
          <p>
            Led four rounds of usability testing with NASA astronauts, informing iterative design improvements of medical workstation prototypes for Gateway, an upcoming lunar-orbiting station. Increased astronaut task efficiency by <strong>30%</strong>.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInFromRight}
          className="flex flex-col items-center"
        >
          <Image
            src="/assets/nasahab2.PNG"
            alt="NASA Gateway Research"
            width={1200}
            height={700}
            className="rounded-xl object-cover w-full shadow-xl hover:scale-105 transition-transform duration-500"
          />
          <span className="mt-3 text-center text-sm font-medium text-black">
            Used VR to assess task performance in reaching and movement tasks.
          </span>
        </motion.div>
      </motion.div>

      {/* Expanded Single Case Study */}
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl font-bold text-left mt-16 mb-6 text-black"
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
          style={{ backgroundColor: "#e5e5e5", color: "#000000" }}
        >
          <h4 className="text-xl font-bold">
            Medical Workstation Optimization for NASA's Lunar Gateway
          </h4>
          <p className="mt-3">
            Designing medical workstations for astronauts aboard NASAs Lunar
            Gateway presented unique challenges due to severe space, mass, and
            energy constraints. Conducting usability testing, virtual reality
            simulations, ergonomic assessments, task analyses, and cognitive load
            measurements, I collaborated with the Habitat Design teams from Langley and Johnson Space Centers. Over four rounds of
            rigorous testing, our iterative refinements reduced astronauts'
            perceived workload by 18% and improved task completion time by up to
            30%.
          </p>
          
           
        </motion.div>
      </motion.div>
    </section>
  );
}

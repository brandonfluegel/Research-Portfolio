"use client";

import { motion } from "framer-motion";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function MercedesProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative max-w-5xl mx-auto py-20 px-3 -mt-8 scale-90" ref={ref}>
      <div id="mercedes" className="absolute -top-30 left-1/2 transform -translate-x-1/2">
        <LogoBadge
          logoSrc="/assets/benz.png"
          alt="Mercedes-Benz Logo"
          className="opacity-80 w-50 h-auto"
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
          <h3 className="text-xl font-bold">Vehicle Innovation Group</h3>
          <p>
            Conducted foundational research on passenger experiences in semi-autonomous vehicles and evaluated ambient noise levels in newly developed vehicle cabins. My findings guided critical improvements that enhanced passenger trust, comfort, and luxury perception.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="flex flex-col items-center">
          <video
            src="/assets/drive.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-xl object-cover w-full shadow-xl hover:scale-105 transition-transform duration-500 max-h-[500px]"
          />
          <span className="mt-3 text-center text-sm font-medium text-black">
            Driving Simulator for Lab Research
          </span>
        </motion.div>
      </motion.div>

      {/* Case Studies Section */}
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl font-bold text-left mt-16 mb-6 text-black"
      >
        Case Studies
      </motion.h3>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {/* Trust Case Study */}
        <motion.div
          className="case-study-container rounded-xl shadow-lg p-6 cursor-pointer text-black"
          variants={fadeInFromLeft}
          whileHover={{ scale: 1.03, y: -4 }}
        >
          <h4 className="text-lg font-bold">Building Trust in Semi-Autonomous Vehicles</h4>
          <p className="mt-2">
            My research examined driver performance and trust with automnous driving features using a mix of simulator studies, in-vehicle interviews, contextual inquiries, and physiological monitoring. Collaborating with the core Engineering & Design teams, my research reccomendations informed the redesign of the driver instrument cluster, dashboard, and attention systems. These design iterations led to improvements in driver trust ratings by ~25%.
          </p>
        </motion.div>

        {/* Acoustic Comfort Case Study */}
        <motion.div
          className="case-study-container rounded-xl shadow-lg p-6 cursor-pointer text-black"
          variants={fadeInFromRight}
          whileHover={{ scale: 1.03, y: -4 }}
        >
          <h4 className="text-lg font-bold">Quiet Comfort: Redefining Luxury Vehicle Interiors</h4>
          <p className="mt-2">
            Identified key sound issues through acoustic testing, surveys, and observational studies. Collaborated closely with acoustic engineers and interior designers, achieving a 15% reduction in perceived cabin noise and significantly enhancing customer comfort.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}


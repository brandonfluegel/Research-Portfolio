"use client";

import { motion } from "framer-motion";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function MercedesProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative max-w-5xl mx-auto py-20 px-3 -mt-8 scale-90" ref={ref}>
      <div id="mercedes" className="absolute -top-45 left-1/2 transform -translate-x-1/2">
        <LogoBadge
          logoSrc="/assets/benz.png"
          alt="Mercedes-Benz Logo"
          className="opacity-80 w-60 h-auto"
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
    className="case-study-container rounded-xl shadow-lg p-6 cursor-pointer"
    variants={fadeInFromLeft}
    whileHover={{ scale: 1.03, y: -4 }}
    style={{ color: "#000000" }}
  >
    <h4 className="text-lg font-bold">Building Trust in Semi-Autonomous Vehicles</h4>

    <div className="space-y-3 mt-3">
      <p>
        My research investigated driver trust issues with semi-autonomous driving assistance, leveraging simulator studies, on-road driving observations, contextual inquiries, and physiological monitoring (e.g., heart rate variability).
      </p>
      <p>
        Working closely with Mercedes Core Engineering and Interior Design teams, I translated driver insights into actionable dashboard interface and feedback system improvements. These design iterations led to measurable improvements, with driver trust ratings increasing by approximately 25%.
      </p>
    </div>
  </motion.div>

  {/* Acoustic Comfort Case Study */}
  <motion.div
    className="case-study-container rounded-xl shadow-lg p-6 cursor-pointer"
    variants={fadeInFromRight}
    whileHover={{ scale: 1.03, y: -4 }}
    style={{ color: "#000000" }}
  >
    <h4 className="text-lg font-bold">Quiet Comfort: Redefining Luxury Vehicle Interiors</h4>

    <div className="space-y-3 mt-3">
      <p>
        Cabin noise critically impacts luxury vehicle comfort. Using acoustic testing, surveys, user interviews, and observational studies, I identified key acoustic pain points.
      </p>
      <p>
        In close collaboration with acoustic engineers and interior designers, I guided targeted cabin improvements to address these issues. My research recomendations successfully reduced perceived cabin noise by 15%, significantly enhancing customer perceptions of comfort and luxury.
      </p>
    </div>
  </motion.div>
</motion.div>

    </section>
  );
}


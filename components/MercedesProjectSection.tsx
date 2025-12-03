"use client";

import { motion } from "framer-motion";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function MercedesProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative max-w-5xl mx-auto py-12 px-4 mb-16 md:py-24 md:mb-24" ref={ref}>
      <div id="mercedes" className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50 md:-top-20">
        <LogoBadge
          logoSrc="/assets/benz.png"
          alt="Mercedes-Benz Logo"
          className="w-32 md:w-60 h-auto opacity-100"
        />
      </div>

      {/* Overview Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-5 rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-8 md:p-10 shadow-2xl h-full flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Increasing Driver Trust in Autonomous Handoffs</h3>
          <p className="text-base text-zinc-200 leading-loose">
            Conducted foundational research on passenger experiences in semi-autonomous vehicles and evaluated ambient noise levels in newly developed vehicle cabins. My findings guided critical improvements that enhanced passenger trust, comfort, and luxury perception.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="h-full w-full rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden">
          <video
            src="/assets/drive.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Case Studies Section */}
<motion.h3
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="text-2xl md:text-3xl font-bold text-left mt-16 md:mt-24 mb-6 text-white"
>
  Case Studies
</motion.h3>

<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-2 gap-8"
>
  {/* Trust Case Study */}
  <motion.div
    className="case-study-container rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-8 md:p-10 shadow-2xl cursor-pointer transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1"
    variants={fadeInFromLeft}
    whileHover={{ scale: 1.03, y: -4 }}
  >
    <h4 className="text-lg md:text-xl font-bold text-white mb-4 leading-tight">Calibrating User Trust in Level 3 Autonomy</h4>

    <div className="flex flex-wrap gap-2 mt-4 mb-6">
      <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Impact: +24% Increase in Driver Trust Ratings</span>
      <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Domain: Autonomous Driving Alert Systems</span>
      <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Method: Human-in-the-Loop Driving Simulation</span>
    </div>

    <div className="space-y-3 mt-3">
      <p className="text-base md:text-lg text-zinc-300/90 leading-loose">
        Led simulator studies to define the &apos;Alert Modality&apos; standards for autonomous handovers. My research identified the precise signaling required to keep drivers in the loop, increasing trust ratings by 24% during critical transitions.
      </p>
    </div>
  </motion.div>

  {/* Acoustic Comfort Case Study */}
  <motion.div
    className="case-study-container rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-8 md:p-10 shadow-2xl cursor-pointer transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1"
    variants={fadeInFromRight}
    whileHover={{ scale: 1.03, y: -4 }}
  >
    <h4 className="text-lg md:text-xl font-bold text-white mb-4 leading-tight">Psychoacoustics of Luxury</h4>

    <div className="flex flex-wrap gap-2 mt-4 mb-6">
      <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Impact: Reduction of Perceived Noise by 15%</span>
      <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Domain: Human Factors & Auditory Perception</span>
      <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Method: Survey & Acoustic Analysis</span>
    </div>

    <div className="space-y-3 mt-3">
      <p className="text-base md:text-lg text-zinc-300/90 leading-loose">
        Quantified the subjective experience of &apos;quiet.&apos; By correlating acoustic cabin data with subjective auditory perception data, my research guided cabin insulation strategies that significantly reduced the perception of interior cabin noise.
      </p>
    </div>
  </motion.div>
</motion.div>

    </section>
  );
}


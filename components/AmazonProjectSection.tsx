"use client";

import { motion } from "framer-motion";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function AmazonProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative max-w-5xl mx-auto py-24 px-4 mb-24" ref={ref}>
      <div id="amazon" className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <LogoBadge
          logoSrc="/assets/amazon-logo.png"
          alt="Amazon Logo"
          className="opacity-40 w-60 h-auto brightness-0 invert"
        />
      </div>

      {/* Overview Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt- grid md:grid-cols-2 gap-10 items-start"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-5 rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-8 shadow-2xl">
          <h3 className="text-xl font-bold text-white">Amazon: Multimodal AI & Latency Strategy</h3>
          <p className="text-zinc-200">
            Designed and conducted 25+ mixed-methods studies, delivering actionable insights that informed 100+ design iterations across Alexa+ Generative AI, Echo Show, Echo Hub, and Fire TV. Strategically prioritized high-impact research programs, including a multi-year study that identified a $1.3 billion opportunity by optimizing Alexa’s response latency.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="flex flex-col items-center">
          <video
            src="/assets/fnirs.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-xl object-cover w-full shadow-xl hover:scale-105 transition-transform duration-500"
          />
          <span className="mt-3 text-center text-sm font-medium text-white">Functional Brain Imaging During TV Search</span>
        </motion.div>
      </motion.div>

      {/* Case Studies Section */}
<motion.h3
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="text-2xl font-bold text-left mt-16 mb-6 text-white"
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
  {/* Alexa Latency Case Study */}
  <motion.div
    className="case-study-container rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-8 shadow-2xl cursor-pointer transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1"
    variants={fadeInFromLeft}
    whileHover={{ scale: 1.03, y: -4 }}
  >
    <h4 className="text-xl font-bold text-white">Quantifying the $1.3B Cost of Milliseconds</h4>
    <div className="flex flex-wrap gap-2 mt-3 mb-4">
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white">Impact: $1.3B Revenue Opportunity</span>
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white">Domain: Psychophysics</span>
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white">Method: Longitudinal Diary Studies</span>
    </div>
    <div className="space-y-3 mt-3">
      <p className="text-zinc-300">
        Proposed and led a multi-year initiative correlating human latency perception with downstream engagement. Established the &apos;Just Noticeable Difference&apos; (JND) benchmarks now used by Core Engineering to prioritize speed investments.
      </p>
    </div>
  </motion.div>

  {/* TV Interface Design Case Study */}
  <motion.div
    className="case-study-container rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-8 shadow-2xl cursor-pointer transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1"
    variants={fadeInFromRight}
    whileHover={{ scale: 1.03, y: -4 }}
  >
    <h4 className="text-xl font-bold text-white">Reducing Cognitive Load in Content Discovery</h4>
    <div className="flex flex-wrap gap-2 mt-3 mb-4">
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white">Impact: -25% Search Time</span>
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white">Domain: 10-foot UI</span>
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white">Method: Eye-Tracking & fNIRS</span>
    </div>
    <div className="space-y-3 mt-3">
      <p className="text-zinc-300">
        Combined neuroimaging (fNIRS) with heuristic evaluation to identify the neurological &apos;cost&apos; of complex UI. My framework guided the Fire TV redesign, significantly reducing time-to-content for millions of viewers.
      </p>
    </div>
  </motion.div>
</motion.div>

    </section>
  );
}

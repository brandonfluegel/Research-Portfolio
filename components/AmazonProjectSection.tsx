"use client";

import { motion } from "framer-motion";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function AmazonProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative max-w-5xl mx-auto py-12 px-4 mb-16 md:py-24 md:mb-24" ref={ref}>
      <div id="amazon" className="absolute -top-8 left-1/2 transform -translate-x-1/2 md:-top-12">
        <LogoBadge
          logoSrc="/assets/amazon-logo.png"
          alt="Amazon Logo"
          className="w-32 md:w-60 h-auto opacity-100"
        />
      </div>

      {/* Overview Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-5 rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-8 md:p-10 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Amazon: Multimodal AI & Latency Strategy</h3>
          <p className="text-base text-zinc-200 leading-loose">
            Designed and conducted 25+ mixed-methods studies, delivering actionable insights that informed 100+ design iterations across Alexa+ Generative AI, Echo Show, Echo Hub, and Fire TV. Strategically prioritized high-impact research programs, including a multi-year study that identified a $1.3 billion opportunity by optimizing Alexa’s response latency.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="flex flex-col items-center mb-12 md:mb-0">
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
  {/* Alexa Latency Case Study */}
  <motion.div
    className="case-study-container rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-8 md:p-10 shadow-2xl cursor-pointer transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1"
    variants={fadeInFromLeft}
    whileHover={{ scale: 1.03, y: -4 }}
  >
    <h4 className="text-lg md:text-xl font-bold text-white mb-4 leading-tight">Quantifying the $1.3B Cost of Latency</h4>
    <div className="flex flex-wrap gap-2 mt-4 mb-6">
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white">Impact: $1.3B Revenue Opportunity</span>
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white">Domain: Alexa AI </span>
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white">Method: Lab-based A/B testing & Economic Modeling</span>
    </div>
    <div className="space-y-3 mt-3">
      <p className="text-base md:text-lg text-zinc-300/90 leading-loose">
Acting as Lead Researcher, I proposed and drove a multi-year research initiative on &quot;Customer Perception of Response Latency&quot; that identified a $1.3B revenue opportunity by correlating human latency perception with downstream engagement and on-device purchase behavior. Established the 3-year performance benchmarks used by Alexa Core Engineering to optimize system latency across Alexa+.
      </p>
    </div>
  </motion.div>

  {/* TV Interface Design Case Study */}
  <motion.div
    className="case-study-container rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-8 md:p-10 shadow-2xl cursor-pointer transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1"
    variants={fadeInFromRight}
    whileHover={{ scale: 1.03, y: -4 }}
  >
    <h4 className="text-lg md:text-xl font-bold text-white mb-4 leading-tight">Reducing Cognitive Load in Content Discovery</h4>
    <div className="flex flex-wrap gap-2 mt-4 mb-6">
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white">Impact: 25% Reduction in Content Discovery Time</span>
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white">Domain: Fire TV</span>
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md text-white">Method: Eye-Tracking & fNIRS</span>
    </div>
    <div className="space-y-3 mt-3">
      <p className="text-base md:text-lg text-zinc-300/90 leading-loose">
        Combined neuroimaging (fNIRS) with task-based moderated evaluation to identify the neurological &apos;cost&apos; of visually complex UI. My framework guided the Fire TV Home iterative redesign, significantly reducing time-to-content for millions of viewers.
      </p>
    </div>
  </motion.div>
</motion.div>

    </section>
  );
}

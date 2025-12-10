"use client";

import { motion } from "framer-motion";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function AmazonProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative w-full py-16 md:py-24" ref={ref}>
      
      {/* 1. HEADER ROW (Full Width) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 md:mb-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-b border-white/10 pb-6"
      >
        <LogoBadge 
          logoSrc="/assets/amazon-logo.png" 
          alt="Amazon" 
          className="w-20 md:w-24 h-auto opacity-100 brightness-0 invert" 
        />
        <div className="hidden sm:block h-6 w-[1px] bg-white/20"></div>
        <span className="text-xs md:text-sm font-mono text-zinc-400 uppercase tracking-widest">Devices Design Group</span>
      </motion.div>

      {/* 2. CONTENT GRID */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
      >
        {/* Left Column: Text */}
        <motion.div variants={fadeInFromLeft} className="flex flex-col justify-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Multimodal AI & Latency</h3>
          
          <div className="py-6 border-y border-white/10 my-8">
            <div className="text-6xl md:text-7xl font-bold text-white tracking-tighter">
              $1.3B
            </div>
            <div className="text-xs md:text-sm text-zinc-400 uppercase tracking-widest mt-2 font-medium">
              Revenue Opportunity Identified
            </div>
          </div>

          <p className="text-lg text-zinc-200 leading-relaxed">
Led end-to-end Human Factors research for high-visibility consumer AI hardware (Echo Show). Directly informed product requirements and engineering roadmaps for the Alexa+ ecosystem, influencing core user experience for 75M+ customers. Received the Amazon Inventor Award for contributions on a novel multimodal interaction pattern.          </p>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div variants={fadeInFromRight} className="relative group w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <video
            src="/assets/fnirs.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="relative w-full h-auto rounded-xl shadow-2xl border border-white/10 aspect-video object-cover"
          />
          <span className="block mt-4 text-center text-xs font-mono text-zinc-500 uppercase tracking-wider">Functional Brain Imaging (fNIRS)</span>
        </motion.div>
      </motion.div>

      {/* 3. OUTCOMES */}
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-xl font-medium text-zinc-400 mt-20 mb-8 uppercase tracking-widest border-b border-white/10 pb-4 inline-block"
      >
        Selected Outcomes
      </motion.h3>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <motion.div
          className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 p-8 transition-all duration-300"
          variants={fadeInFromLeft}
        >
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/10 border border-white/20 rounded-full text-zinc-200">Strategy</span>
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/10 border border-white/20 rounded-full text-zinc-200">Econ Modeling</span>
          </div>

          <h4 className="text-2xl font-bold text-white mb-4">Quantifying the Cost of Latency</h4>
          <p className="text-zinc-300 group-hover:text-zinc-100 transition-colors leading-relaxed">
 Defined the UX roadmap for latency perception thresholds across the Alexa ecosystem. Correlated millisecond-level latency metrics with customer purchase behavior to identify a $1.3B opportunity, establishing the response latency benchmarks now used by Alexa Core Engineering.          </p>
        </motion.div>

        <motion.div
          className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 p-8 transition-all duration-300"
          variants={fadeInFromRight}
        >
          <div className="flex justify-between items-start mb-6">
             <div className="flex flex-wrap gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/10 border border-white/20 rounded-full text-zinc-200">Neuroscience</span>
             </div>
             <div className="text-right">
                <div className="text-3xl font-bold text-white tracking-tighter">-25%</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest">Discovery Time</div>
             </div>
          </div>

          <h4 className="text-2xl font-bold text-white mb-4">Reducing Cognitive Load</h4>
          <p className="text-zinc-300 group-hover:text-zinc-100 transition-colors leading-relaxed">
            Combined neuroimaging (fNIRS) with task-based evaluation to identify the neurological &apos;cost&apos; of content search. My framework guided the Fire TV Home iterative redesign.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
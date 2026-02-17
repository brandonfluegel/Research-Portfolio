"use client";

import { motion } from "framer-motion";
import LogoBadge from "@/components/ui/LogoBadge";
import LazyVideo from "@/components/ui/LazyVideo";
import { fadeInFromLeft, fadeInFromRight, staggerContainer } from "@/lib/utils/animationVariants";

export default function MercedesProjectSection() {
  return (
    <section className="relative w-full py-16 md:py-32 overflow-hidden bg-black">

      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-slate-900/10 blur-[80px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transform-gpu"></div>
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gray-900/10 blur-[80px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3 transform-gpu"></div>

      {/* 1. SECTION HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mb-12 md:mb-24 max-w-7xl mx-auto px-6 border-b border-white/10 pb-6 md:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="flex items-center gap-6">
          <LogoBadge 
            logoSrc="/assets/benz.png" 
            alt="Mercedes" 
            className="w-12 md:w-16 h-auto opacity-100 brightness-0 invert" 
          />
          <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
          <div className="hidden md:block">
            <h2 className="text-lg text-white font-medium tracking-tight">Automotive UX & HMI</h2>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">UX Researcher</p>
          </div>
        </div>
        
        <div className="md:hidden">
          <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono">UX Researcher</p>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT STACK */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 space-y-32 md:space-y-48">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-24 items-start"
        >
          {/* LEFT: VISUAL MEDIA (on desktop) */}
          <motion.div variants={fadeInFromLeft} className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center h-full pt-8 lg:pt-0">
             <div className="relative w-full bg-zinc-900/80 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-2xl group media-card">
                <LazyVideo
                  src="/assets/drive.mp4"
                  className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
             </div>
             {/* Caption Below */}
             <p className="mt-4 text-xs font-mono text-zinc-400 uppercase tracking-widest text-center">Semi-Autonomous Driving Simulator</p>
          </motion.div>

          {/* RIGHT: NARRATIVE (on desktop) */}
          <motion.div variants={fadeInFromRight} className="lg:col-span-5 order-1 lg:order-2 pt-2">
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full shadow-[0_0_8px_rgba(100,116,139,0.8)]"></span>
                <span className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-widest">Human Machine Interface</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Trust in Semi-Autonomous <br/> <span className="text-zinc-500">Driving</span>
              </h3>

              {/* --- MOBILE ONLY: KEY METRIC --- */}
              <div className="block md:hidden mb-6 p-4 bg-zinc-900/50 border border-green-500/30 rounded-lg">
                 <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider">Research Impact</span>
                 </div>
                 <div className="text-3xl font-bold text-green-400">+24%</div>
                 <p className="text-xs text-zinc-400 mt-1">Increase in user trust during automated handoffs.</p>
              </div>
              {/* ------------------------------------------------ */}

              <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-light">
                &quot;How does the car communicate intent?&quot; Conducted foundational research on passenger experiences in L2 vehicles to guide critical improvements to the HMI that enhanced trust.
              </p>
            </div>

            {/* PROCESS TIMELINE */}
            <div className="relative ml-3 md:ml-0 pl-6 md:pl-8 border-l border-white/10 space-y-8 md:space-y-12">
              
              {/* Block 1 */}
              <div className="relative">
                <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2 leading-tight">HMI Design Standards</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Defined <span className="text-white font-medium">Alert Modality standards</span> for autonomous handovers. These findings directly influenced internal design guidelines, ensuring clear communication of system status during critical control transitions.
                </p>
              </div>

              {/* Block 2 */}
              <div className="relative">
                <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2 leading-tight">Psychoacoustic Modeling</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Operationalized the subjective experience of &quot;quiet&quot; by correlating acoustic sensor data with human perception. This model guided engineering adjustments that <span className="text-green-400 font-bold">reduced perceived cabin noise by 15%</span>.
                </p>
              </div>

              {/* Block 3 */}
              <div className="relative">
                 <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                 <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2 leading-tight">Research Impact</h4>
                 <p className="text-sm text-zinc-400 leading-relaxed">
                  The implemented HMI improvements resulted in a verifiable <span className="text-green-400 font-bold">24% increase in user trust scores</span> during automated lane changes and handoffs.
                </p>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
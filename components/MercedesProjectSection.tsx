"use client";

import { motion } from "framer-motion";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, staggerContainer } from "@/app/utils/animationVariants";

export default function MercedesProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative w-full py-16 md:py-24" ref={ref}>
      
      {/* HEADER ROW */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 md:mb-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-b border-white/10 pb-6"
      >
          <LogoBadge 
            logoSrc="/assets/benz.png" 
            alt="Mercedes" 
            className="w-12 md:w-16 h-auto opacity-100 brightness-0 invert" 
          />
          <div className="hidden sm:block h-6 w-[1px] bg-white/20"></div>
          <span className="text-xs md:text-sm font-mono text-zinc-400 uppercase tracking-widest">UX Researcher</span>
      </motion.div>

      {/* CONTENT GRID */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-8">
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Trust in Semi-Autonomous Driving</h3>
          
          {/* Metric Refactor: Glass Card Standard (Mobile Overlay) */}
          <div className="md:hidden bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl my-6">
             <div className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
               +24%
             </div>
             <div className="text-xs md:text-sm text-zinc-400 uppercase tracking-widest mt-2 font-medium">
               Trust Score (Automated Handoffs)
             </div>
          </div>

          <p className="text-lg text-zinc-200 leading-relaxed border-l-2 border-white/20 pl-6 my-6">
            &quot;How does the car communicate intent?&quot; <br/>
            <span className="text-base text-zinc-400 mt-2 block font-normal leading-relaxed">
            Conducted foundational research on passenger experiences in L2 vehicles. Findings guided critical improvements to the HMI (Human Machine Interface) that enhanced trust during automated lane changes.
            </span>
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="relative group w-full">
           {/* Kept 'aspect-video' to maintain tile size, changed video to 'object-contain' to prevent zooming */}
           <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl aspect-video w-full">
              <video
                src="/assets/drive.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="object-contain w-full h-full"
              />
           </div>
        </motion.div>
      </motion.div>

      {/* OUTCOMES GRID */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
      >
        <motion.div
          className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 p-8 transition-all duration-300"
          variants={fadeInFromLeft}
        >
          <div className="flex justify-between items-start mb-6">
             <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/10 border border-white/20 rounded-full text-zinc-200">HMI Design</span>
             <div className="text-right">
                <div className="text-3xl font-bold text-white tracking-tighter">+24%</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest">Trust Score</div>
             </div>
          </div>
          <h4 className="text-2xl font-bold text-white mb-2">Autonomous Handoffs</h4>
          <p className="text-zinc-300 text-sm leading-relaxed">
             Defined Alert Modality standards for autonomous handovers, directly influencing internal design guidelines for L2 vehicles. 
          </p>
        </motion.div>

        <motion.div
          className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 p-8 transition-all duration-300"
          variants={fadeInFromRight}
        >
          <div className="flex justify-between items-start mb-6">
             <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/10 border border-white/20 rounded-full text-zinc-200">Psychoacoustics</span>
             <div className="text-right">
                <div className="text-3xl font-bold text-white tracking-tighter">-15%</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest">Perceived Noise</div>
             </div>
          </div>
          <h4 className="text-2xl font-bold text-white mb-2">The Sound of Luxury</h4>
          <p className="text-zinc-300 text-sm leading-relaxed">
             Operationalized the subjective experience of &quot;quiet&quot; by correlating acoustic sensor data with human perception.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
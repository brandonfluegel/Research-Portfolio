"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/ui/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, staggerContainer } from "@/app/utils/animationVariants";

export default function NASAProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative w-full py-16 md:py-32 overflow-hidden bg-black" ref={ref}>
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-sky-900/10 blur-[80px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transform-gpu"></div>
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-900/10 blur-[80px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3 transform-gpu"></div>

      {/* 1. SECTION HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mb-12 md:mb-24 max-w-7xl mx-auto px-6 border-b border-white/10 pb-6 md:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="flex items-center gap-6">
          <LogoBadge 
            logoSrc="/assets/nasa-logo.png" 
            alt="NASA" 
            className="w-20 md:w-24 h-auto opacity-100 brightness-0 invert" 
          />
          <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
          <div className="hidden md:block">
            <h2 className="text-lg text-white font-medium tracking-tight">Human Factors Research</h2>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Research Lead</p>
          </div>
        </div>
        
        <div className="md:hidden">
          <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono">Human Factors Researcher</p>
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
          {/* LEFT: NARRATIVE */}
          <motion.div variants={fadeInFromLeft} className="lg:col-span-5 pt-2">
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                <span className="text-[10px] md:text-xs font-mono text-blue-500 uppercase tracking-widest">Space Systems & Cognition</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Reducing Astronaut <br/> <span className="text-zinc-500">Cognitive Load</span>
              </h3>

              {/* --- MOBILE ONLY: KEY METRIC --- */}
              <div className="block md:hidden mb-6 p-4 bg-zinc-900/50 border border-green-500/30 rounded-lg">
                 <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider">Operational Impact</span>
                 </div>
                 <div className="text-3xl font-bold text-green-400">30%</div>
                 <p className="text-xs text-zinc-400 mt-1">Reduction in critical Time-on-Task for medical procedures.</p>
              </div>
              {/* ------------------------------------------------ */}

              <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-light">
                Led Human Factors validation for next-gen medical workstations on the Lunar Gateway, minimizing critical operator errors in high-stress zero-G environments.
              </p>
            </div>

            {/* PROCESS TIMELINE */}
            <div className="relative ml-3 md:ml-0 pl-6 md:pl-8 border-l border-white/10 space-y-8 md:space-y-12">
              
              {/* Block 1 */}
              <div className="relative">
                <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2 leading-tight">Validation: Lunar Gateway</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Executed human factors validation studies for the <span className="text-white font-medium">Lunar Gateway medical workstation</span>. This rigorous testing environment simulated zero-gravity constraints to identify physical and cognitive ergonomic failure points.
                </p>
              </div>

              {/* Block 2 */}
              <div className="relative">
                <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2 leading-tight">Cognitive Load Analysis</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Leveraged cognitive load analysis to redesign critical medical workflows. By simplifying procedure execution steps and information architecture, we minimized the risk of <span className="text-white font-medium">critical operator errors</span> during high-stress operational scenarios.
                </p>
              </div>

              {/* Block 3 */}
              <div className="relative">
                 <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                 <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2 leading-tight">Operational Impact: <span className="text-green-400 font-bold">-30% Time-on-Task</span></h4>
                 <p className="text-sm text-zinc-400 leading-relaxed">
                  The redesigned interface and physical layout resulted in a significant <span className="text-green-400 font-bold">30% reduction in time-on-task</span> for complex medical procedures, ensuring astronaut safety and mission efficiency.
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT: VISUAL MEDIA */}
          <motion.div variants={fadeInFromRight} className="lg:col-span-7 flex flex-col justify-center h-full pt-8 lg:pt-0">
             <div className="relative w-full aspect-video bg-zinc-900/80 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="/assets/nasahab2.PNG"
                  alt="NASA Gateway Research"
                  fill
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
             </div>
             {/* Caption Below */}
             <p className="mt-4 text-xs font-mono text-zinc-400 uppercase tracking-widest text-center">VR Simulation: Medical Workstation</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
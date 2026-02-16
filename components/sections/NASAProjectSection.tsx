"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/ui/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

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

      {/* 2. MAIN CONTENT — FULL-WIDTH IMMERSIVE LAYOUT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 space-y-12 md:space-y-16">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center"
        >
          {/* CENTERED NARRATIVE */}
          <motion.div variants={fadeInUp} className="max-w-3xl text-center mb-8 md:mb-16 px-2">
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              <span className="text-[10px] md:text-xs font-mono text-blue-500 uppercase tracking-widest">Space Systems & Cognition</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Reducing Astronaut <br/> <span className="text-zinc-500">Cognitive Load</span>
            </h3>

            {/* --- MOBILE ONLY: KEY METRIC --- */}
            <div className="block md:hidden mb-6 mx-auto max-w-xs p-4 bg-zinc-900/50 border border-green-500/30 rounded-lg">
               <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider">Operational Impact</span>
               </div>
               <div className="text-3xl font-bold text-green-400">30%</div>
               <p className="text-xs text-zinc-400 mt-1">Reduction in critical Time-on-Task for medical procedures.</p>
            </div>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-light max-w-2xl mx-auto">
              Led Human Factors validation for next-gen medical workstations on the Lunar Gateway, minimizing critical operator errors in high-stress zero-G environments.
            </p>
          </motion.div>

          {/* FULL-WIDTH IMMERSIVE MEDIA */}
          <motion.div variants={fadeInUp} className="w-full">
            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-zinc-900/80 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-2xl group media-card">
              <Image
                src="/assets/nasahab2.PNG"
                alt="NASA Gateway Research"
                fill
                priority
                loading="eager"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
              />
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Inline stats overlay — visible on desktop */}
              <div className="absolute bottom-0 left-0 right-0 hidden md:flex justify-between items-end p-8">
                <div>
                  <div className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-1">Lunar Gateway</div>
                  <div className="text-sm text-zinc-300 max-w-xs leading-relaxed">Medical workstation validated for zero-gravity constraints</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-400">30%</div>
                  <div className="text-xs text-zinc-400">Reduction in Time-on-Task</div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs font-mono text-zinc-400 uppercase tracking-widest text-center">VR Simulation: Medical Workstation</p>
          </motion.div>

          {/* PROCESS BLOCKS — TWO-COLUMN ON DESKTOP */}
          <motion.div variants={fadeInUp} className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8 md:mt-16 max-w-4xl mx-auto">
            <div className="p-4 md:p-6 bg-zinc-900/50 border border-white/10 rounded-xl">
              <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2 leading-tight">Validation: Lunar Gateway</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Executed human factors validation studies for the <span className="text-white font-medium">Lunar Gateway medical workstation</span>. This rigorous testing environment simulated zero-gravity constraints to identify physical and cognitive ergonomic failure points.
              </p>
            </div>
            <div className="p-4 md:p-6 bg-zinc-900/50 border border-white/10 rounded-xl">
              <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2 leading-tight">Operational Impact</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                The redesigned interface and physical layout resulted in a significant <span className="text-green-400 font-bold">30% reduction in time-on-task</span> for complex medical procedures, ensuring astronaut safety and mission efficiency.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { m } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/ui/LogoBadge";
import { fadeInUp, staggerContainer } from "@/lib/utils/animationVariants";

export default function NASAProjectSection() {
  return (
    <section className="relative w-full py-16 md:py-32 overflow-hidden bg-black">
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-0 w-75 md:w-125 h-75 md:h-125 bg-sky-900/10 blur-[80px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transform-gpu"></div>
      <div className="absolute bottom-0 right-0 w-75 md:w-150 h-75 md:h-150 bg-indigo-900/10 blur-[80px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3 transform-gpu"></div>

      {/* 1. SECTION HEADER */}
      <m.div 
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
          <div className="h-8 w-px bg-white/10 hidden md:block"></div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2.5 mb-0.5">
              <h2 className="text-lg text-white font-medium tracking-tight">Human Factors Research</h2>
            </div>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Human Factors PhD Intern</p>
          </div>
        </div>
        
        <div className="md:hidden">
          <div className="flex items-center gap-2">
            <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono">Human Factors PhD Intern</p>
          </div>
        </div>
      </m.div>

      {/* 2. MAIN CONTENT — FULL-WIDTH IMMERSIVE LAYOUT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 space-y-12 md:space-y-16">

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center"
        >
          {/* CENTERED NARRATIVE */}
          <m.div variants={fadeInUp} className="max-w-3xl text-center mb-8 md:mb-16 px-2">
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              <span className="text-[10px] md:text-xs font-mono text-blue-500 uppercase tracking-widest">Space Systems & Cognition</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Reducing Astronaut <br/> <span className="text-zinc-500">Cognitive Load</span>
            </h3>

            <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-light max-w-2xl mx-auto">
              Led Human Factors validation for next-gen medical workstations on the Lunar Gateway, identifying and eliminating critical operator error modes under simulated microgravity conditions.
            </p>
          </m.div>

          {/* FULL-WIDTH IMMERSIVE MEDIA */}
          <m.div variants={fadeInUp} className="w-full">
            <div className="relative w-full aspect-video bg-zinc-900/80 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-2xl group media-card">
              <Image
                src="/assets/nasahab2.PNG"
                alt="NASA Gateway Research"
                fill
                quality={80}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
              />
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

              {/* Inline stats overlay — visible on desktop */}
              <div className="absolute bottom-0 left-0 right-0 hidden md:flex justify-between items-end p-8">
                <div>
                  <div className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-1">Lunar Gateway</div>
                  <div className="text-sm text-zinc-300 max-w-xs leading-relaxed">Medical workstation validated under simulated microgravity constraints</div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs font-mono text-zinc-400 uppercase tracking-widest text-center">VR Simulation: Medical Workstation</p>
          </m.div>

          {/* PROCESS BLOCKS — TWO-COLUMN ON DESKTOP */}
          <m.div variants={fadeInUp} className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8 md:mt-16 max-w-4xl mx-auto">
            <div className="p-4 md:p-6 bg-zinc-900/50 border border-white/10 rounded-xl">
              <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2 leading-tight">Validation: Lunar Gateway</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Executed human factors validation studies for the Lunar Gateway medical workstation in a simulated microgravity environment, ahead of hardware specification lock. Testing surfaced physical and cognitive failure modes — including reach envelope violations, attention overload during timed procedures, and display legibility limits under restricted head mobility — before designs were committed to flight hardware.
              </p>
            </div>
            <div className="p-4 md:p-6 bg-zinc-900/50 border border-white/10 rounded-xl">
              <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2 leading-tight">Operational Impact</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                The redesigned interface and physical layout produced a measurable reduction in time-on-task for complex medical procedures compared to the baseline hardware configuration — eliminating critical failure modes at the validation stage, with a corresponding reduction in error rate across procedural steps.
              </p>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
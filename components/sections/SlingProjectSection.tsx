"use client";

import { motion } from "framer-motion";
import LogoBadge from "@/components/ui/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, staggerContainer } from "@/app/utils/animationVariants";

export default function SlingProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative w-full py-16 md:py-32 overflow-hidden bg-black" ref={ref}>
      
      {/* BACKGROUND ACCENTS - MATCHING ALEXA SECTION */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-900/10 blur-[80px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transform-gpu"></div>
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-900/10 blur-[80px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3 transform-gpu"></div>

      {/* 1. SECTION HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mb-12 md:mb-24 max-w-7xl mx-auto px-6 border-b border-white/10 pb-6 md:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="flex items-center gap-6">
          <LogoBadge 
            logoSrc="/assets/Sling-logo.png" 
            alt="Sling" 
            className="w-20 md:w-28 h-auto opacity-100 brightness-0 invert" 
          />
          <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
          <div className="hidden md:block">
            <h2 className="text-lg text-white font-medium tracking-tight">Staff Product Researcher</h2>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Product Strategy Lead</p>
          </div>
        </div>
        
        <div className="md:hidden">
          <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono">Staff Product Researcher</p>
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
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Product Research Leadership
              </h3>

              {/* --- MOBILE ONLY: KEY METRIC --- */}
              <div className="block md:hidden mb-6 p-4 bg-zinc-900/50 border border-green-500/30 rounded-lg">
                 <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider">Business Impact</span>
                 </div>
                 <div className="text-3xl font-bold text-green-400">+17% Lift</div>
                 <p className="text-xs text-zinc-400 mt-1">Lift in subscription conversion via checkout innovations.</p>
              </div>
              {/* ------------------------------------------------ */}

              <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-light">
                Directing the research roadmap for monetization and Human-AI interaction, reporting directly to the VP of Product.
              </p>
            </div>

            {/* PROCESS TIMELINE / CONTENT BLOCKS */}
            <div className="relative ml-3 md:ml-0 pl-6 md:pl-8 border-l border-white/10 space-y-12 md:space-y-16">
              
              {/* Block 1: SXI (Framework) */}
              <div className="relative">
                <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2 leading-tight">STRATEGIC FRAMEWORK: THE SLING EXPERIENCE INDEX (SXI)</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Architected a proprietary quantitative framework (SXI) that merged behavioral telemetry with user-perceived friction, transitioning leadership to a proactive prioritization model now used for all VP+ product reviews.
                </p>
              </div>

               {/* Block 2: Human-AI */}
               <div className="relative">
                <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2 leading-tight">HUMAN-AI INTERACTION: ARCHITECTING TRUST</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Led foundational research for an LLM-powered assistant, defining the interaction model for the 10-foot experience. Established a &quot;Trust & System Status&quot; framework to align mental models during complex tasks.
                </p>
              </div>

              {/* Block 3: Executive Influence */}
              <div className="relative">
                <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2 leading-tight">EXECUTIVE INFLUENCE & RISK MITIGATION</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Leveraged longitudinal research to successfully influence the CEO to halt a high-stakes campaign launch, mitigating projected churn and protecting brand sentiment.
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT: VISUAL MEDIA */}
          <motion.div variants={fadeInFromRight} className="lg:col-span-7 flex flex-col justify-center h-full pt-8 lg:pt-0">
             <div className="relative w-full aspect-video bg-zinc-900/80 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                {/* VIDEO */}
                <video
                  src="/assets/sling-workshop.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* DARK GRADIENT OVERLAY (Requested) */}
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none"></div>
            </div>
            {/* Caption Below */}
            <p className="mt-4 text-xs font-mono text-zinc-400 uppercase tracking-widest text-center">2025 Product & AI Workshop</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
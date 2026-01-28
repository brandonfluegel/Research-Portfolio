"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, staggerContainer } from "@/app/utils/animationVariants";

export default function UberProjectSection() {
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
            logoSrc="/assets/uber-logo.png" 
            alt="Uber" 
            className="w-16 md:w-20 h-auto opacity-100 brightness-0 invert" 
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
        // Layout Pivot: Image Left (Order 1), Text Right (Order 2) on Desktop (lg)
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-16 items-start"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-8 lg:order-2">
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Driver Retention Strategy in Brazil</h3>
          
          {/* Metric Refactor: Glass Card Standard */}
          <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl my-6">
             <div className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
               15%
             </div>
             <div className="text-xs md:text-sm text-zinc-400 uppercase tracking-widest mt-2 font-medium">
               Lift in Driver Retention
             </div>
          </div>

          <p className="text-lg text-zinc-200 leading-relaxed">
Conducted foundational research in Brazil to inform global product strategy. Insights directly steered the driver app redesign, successfully reducing cognitive load and improving rental driver retention by 15%.          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="relative group w-full lg:order-1">
           <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] w-full">
              <Image
                src="/assets/project-image-2.jpg"
                alt="Uber Research"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
           </div>
           <span className="block mt-4 text-center text-xs font-mono text-zinc-500 uppercase tracking-wider">
           Research Led to Driver App Redesign
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, staggerContainer } from "@/app/utils/animationVariants";

export default function SlingProjectSection() {
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
            logoSrc="/assets/Sling-logo.png" 
            alt="Sling" 
            className="w-16 md:w-20 h-auto opacity-100 brightness-0 invert" 
          />
          <div className="hidden sm:block h-6 w-[1px] bg-white/20"></div>
          <span className="text-xs md:text-sm font-mono text-zinc-400 uppercase tracking-widest">Product Strategy Lead</span>
      </motion.div>

      {/* CONTENT GRID */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        // Layout Pivot: Image Left (Order 1), Text Right (Order 2) on Desktop (lg)
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-8 lg:order-2">
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Product Leadership & Human-AI Strategy</h3>
          
          {/* INJECTED METRIC BLOCK */}
          <div className="py-6 border-y border-white/10 md:hidden">
             <div className="text-6xl font-bold text-white tracking-tighter">
               17%
             </div>
             <div className="text-sm text-zinc-400 uppercase tracking-widest mt-2 font-medium">
               Lift in Purchase Confidence
             </div>
          </div>

          <p className="text-lg text-zinc-200 leading-relaxed">
Own the strategic research roadmap for monetization, retention, and Human-AI interaction, reporting directly to the VP of Product.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="relative group w-full lg:order-1">
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl aspect-video w-full">
            <video
              src="/assets/sling-workshop.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full"
            />
          </div>
          <span className="block mt-4 text-center text-xs font-mono text-zinc-500 uppercase tracking-wider">
            2025 Product & AI Workshop
          </span>
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
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/10 border border-white/20 rounded-full text-zinc-200">GenAI</span>
          </div>
          <h4 className="text-2xl font-bold text-white mb-4">Architecting Trust in AI</h4>
          {/* FIX IS BELOW: Used &quot; instead of " */}
          <p className="leading-relaxed text-zinc-300 text-sm">
Architected the multi-turn interaction model for an LLM-powered agentic TV assistant. Defined response latency targets and addressed response ambiguity challenges through the creation of a &quot;Trust & System Status&quot; framework, ensuring users understand agent intent during complex tasks.
          </p>
        </motion.div>

        <motion.div
          className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 p-8 transition-all duration-300"
          variants={fadeInFromRight}
        >
          <div className="flex justify-between items-start mb-6">
             <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/10 border border-white/20 rounded-full text-zinc-200">Growth</span>
             <div className="text-right">
                <div className="text-3xl font-bold text-white tracking-tighter">+17%</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest">Conversion Lift</div>
             </div>
          </div>
          <h4 className="text-2xl font-bold text-white mb-4">Boosting Subscriber Conversion</h4>
          <p className="leading-relaxed text-zinc-300 text-sm">
Directed research to identify specific friction points where users were abandoning the subscription signup flow. Partnered with leadership from Product, Engineering, and Design to streamline the path to purchase, directly driving a 17% increase in plan subscription conversion on Sling.com.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, staggerContainer } from "@/app/utils/animationVariants";

export default function AmazonProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative w-full py-16 md:py-24" ref={ref}>
      
      {/* 1. HEADER ROW */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-b border-white/10 pb-6"
      >
        <LogoBadge 
          logoSrc="/assets/amazon-logo.png" 
          alt="Amazon" 
          className="w-20 md:w-24 h-auto opacity-100 brightness-0 invert" 
        />
        <div className="hidden sm:block h-6 w-[1px] bg-white/20"></div>
        <span className="text-xs md:text-sm font-mono text-zinc-400 uppercase tracking-widest">Lead Researcher, Devices Design Group</span>
      </motion.div>

      {/* 2. ZIG-ZAG LAYOUT CONTAINER */}
      <div className="space-y-24 md:space-y-32">
        
        {/* ROW 1: LATENCY STRATEGY */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Text Block */}
          <motion.div variants={fadeInFromLeft} className="flex flex-col justify-center order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
              Alexa AI & <br className="hidden lg:block"/> Revenue Strategy
            </h3>
            
            {/* TIGHTER GROUPING */}
            <div className="py-4 border-b border-white/10 mb-6 mt-4">
              <div className="text-6xl md:text-7xl font-bold text-white tracking-tighter">
                $1.7B
              </div>
              <div className="text-xs md:text-sm text-zinc-400 uppercase tracking-widest mt-1 font-medium">
                Incremental Revenue Strategy
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">The Biological Cost of Latency</h4>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  Rearchitected Alexa’s performance strategy by replacing arbitrary engineering targets with <span className="text-white font-semibold">biological thresholds</span> derived from my foundational research on user perception. 
                </p>
              </div>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Directed Alexa Economics to ingest my threshold data into their NVA models, proving that meeting intent-specific latency standards would drive $1.7B in incremental OPS over a 15-month period. Consequently, these latency targets were established as launch criteria for the entire Alexa ecosystem.
              </p>
            </div>
          </motion.div>

          {/* Asset Block: Latency Chart with Dark Mode Filter */}
          <motion.div variants={fadeInFromRight} className="relative group w-full order-1 lg:order-2">
            <div className="absolute -inset-1 bg-gradient-to-tr from-orange-600/20 to-amber-600/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            {/* UPDATED: Added background and tweaked filters for better readability */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50">
               <Image
                src="/assets/latency.png"
                alt="Latency Economic Model"
                width={800}
                height={600}
                className="object-cover w-full h-auto filter invert hue-rotate-180 contrast-150 brightness-110 opacity-100"
              />
            </div>
            <span className="block mt-4 text-center text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Latency Perception Threshold Model
            </span>
          </motion.div>
        </motion.div>


        {/* ROW 2: NEUROSCIENCE */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <motion.div variants={fadeInFromLeft} className="relative group w-full">
            <div className="absolute -inset-1 bg-gradient-to-bl from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <video
              src="/assets/fnirs.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10 aspect-video object-cover bg-zinc-900"
            />
            <span className="block mt-4 text-center text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Real-time Prefrontal Cortex Activation (fNIRS)
            </span>
          </motion.div>

          <motion.div variants={fadeInFromRight} className="flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Neuroscience + Iterative Design Strategy
            </h3>
            
            <div className="space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                Created the organization&apos;s first objective metric for cognitive load. Leveraged neuroscience methods (fNIRS) to quantify the biological &quot;cost&quot; of UI complexity.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                This research directly informed design decisions that reduced cognitive load by <span className="text-white font-semibold">25%</span>, enhancing user satisfaction and engagement.
              </p>
            </div>
          </motion.div>
        </motion.div>


        {/* ROW 3: HARDWARE (Floating) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <motion.div variants={fadeInFromLeft} className="flex flex-col justify-center order-2 lg:order-1">
             <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Multimodal AI & Hardware
             </h3>
             
             <div className="space-y-6 mb-8">
               <p className="text-lg text-zinc-300 leading-relaxed">
                 Led end-to-end Human Factors strategy for high-visibility consumer AI hardware (Echo Show), shaping product requirements for the Alexa+ ecosystem serving <span className="text-white font-bold">75M+ customers</span>.
               </p>
             </div>

             <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 rounded-xl border border-white/10 w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.699-3.181a1 1 0 011.827.954L17.5 7.677V13a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2.5l-2.481-.992-.472 2.361c-.13.65-.694 1.131-1.358 1.131H5.452c-.664 0-1.229-.481-1.358-1.131L3.622 9.508l-2.481.992V13a1 1 0 01-1 1h-2a1 1 0 01-1-1V7.677l-.98-3.92a1 1 0 011.827-.954L1.046 5.905 5 4.323V3a1 1 0 011-1h4z" clipRule="evenodd" />
                  <path d="M10 18a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span className="text-sm font-bold text-white uppercase tracking-wider">Amazon Inventor Award Recipient</span>
             </div>
          </motion.div>

          {/* Asset Block: FLOATING ECHO SHOW */}
          <motion.div 
            variants={fadeInFromRight} 
            className="relative w-full order-1 lg:order-2 flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              // UPDATED: Reduced max-width significantly to balance with text
              className="relative w-full max-w-sm mx-auto"
            >
              {/* Blue Backlight Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[80px] rounded-full -z-10"></div>
              
              <Image
                src="/assets/echo.png"
                alt="Echo Show 10 Motion-Tracking"
                width={800}
                height={500}
                className="relative z-10 w-full h-auto drop-shadow-2xl rounded-2xl select-none" 
              />
            </motion.div>
            
            <span className="block mt-8 text-center text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Led end-to-end research for Echo Show 10 w/ motion-tracking
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
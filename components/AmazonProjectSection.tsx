"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, staggerContainer } from "@/app/utils/animationVariants";

export default function AmazonProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-black" ref={ref}>
      
      {/* BACKGROUND ACCENTS (Subtle Mesh) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      {/* 1. SECTION HEADER (Minimalist) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mb-24 max-w-7xl mx-auto px-6 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="flex items-center gap-6">
          <LogoBadge 
            logoSrc="/assets/amazon-logo.png" 
            alt="Amazon" 
            className="w-28 h-auto opacity-100 brightness-0 invert" 
          />
          <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
          <div className="hidden md:block">
            <h2 className="text-lg text-white font-medium tracking-tight">Devices Design Group</h2>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Lead Researcher</p>
          </div>
        </div>
        
        {/* Mobile-only subheader */}
        <div className="md:hidden">
          <p className="text-sm text-zinc-400">Lead Researcher, Devices Design Group</p>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT STACK */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-48">
        
        {/* === CASE STUDY 1: REVENUE STRATEGY ($1.7B) === */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"
        >
          {/* LEFT: NARRATIVE (Timeline Style) */}
          <motion.div variants={fadeInFromLeft} className="lg:col-span-5 pt-4">
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Psychophysics & Strategy</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Calibrating the <br /> <span className="text-zinc-500">Revenue Model</span>
              </h3>
              <p className="text-lg text-zinc-300 leading-relaxed font-light">
                Engineering latency targets for Alexa were historically arbitrary. I proposed and led a multi-year research program to identify the precise response latency threshold where user satisfaction collapses.
              </p>
            </div>

            {/* PROCESS TIMELINE */}
            <div className="relative pl-8 border-l border-white/10 space-y-10">
              {/* Node 1 */}
              <div className="relative">
                <span className="absolute -left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2">Phase 1: Mixed Methods Research</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Manipulated verbal response latency (500ms–3000ms) in a controlled setting over 1000+ trials. Mapped the non-linear degradation of satisfaction to find the <span className="text-white font-medium">&quot;Cliff of User Dissatisfaction&quot; at 1000ms</span>.
                </p>
              </div>
              {/* Node 2 */}
              <div className="relative">
                <span className="absolute -left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2">Phase 2: Economic Model</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Partnered with Alexa Economics to integrate response latency thresholds into the NVA (Negative Value Action) model. We redefined &quot;defects&quot; as <span className="text-white font-medium">any interaction slower than human latency perception</span>.
                </p>
              </div>
               {/* Node 3 */}
               <div className="relative">
                <span className="absolute -left-[37px] top-1.5 w-3 h-3 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] rounded-full"></span>
                <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wide mb-2">Outcome: $1.7B Projection</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  The calibrated model forecasted that hitting these human perceptual thresholds for high-utility intents would save <span className="text-white font-medium">50.3B dialogs</span> annually, preventing $1.7B in downstream churn.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: DATA VISUALIZATION (Mock UI) */}
          <motion.div variants={fadeInFromRight} className="lg:col-span-7">
            <div className="relative group">
              {/* Back Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              
              {/* "Internal Tool" Frame */}
              <div className="relative rounded-xl overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-2xl">
                {/* Window Controls */}
                <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 justify-between">
                   <div className="flex gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                   </div>
                </div>

                {/* Graph Content */}
                <div className="p-8 relative">
                   <Image
                    src="/assets/economic_threshold_model.png"
                    alt="Graph showing user satisfaction dropping as latency increases"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain opacity-90 mix-blend-screen" 
                  />
                  
                  {/* Floating Data Annotation */}
                  <div className="absolute bottom-8 left-8 bg-zinc-900/90 backdrop-blur border border-white/10 p-4 rounded-lg max-w-xs shadow-xl hidden sm:block">
                     <div className="flex items-center gap-2 mb-2">
                       <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                       <span className="text-[10px] font-bold text-white uppercase tracking-wider">Critical Insight</span>
                     </div>
                     <p className="text-[11px] text-zinc-400 leading-relaxed">
                       Latency {">"}1000ms is not just &quot;slow&quot;, it is a psychophysical defect that directly correlates to 90-day retention loss.
                     </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* === CASE STUDY 2: NEUROIMAGING DURING VISUAL SEARCH (fNIRS) === */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"
        >
          {/* LEFT: EVIDENCE (Video in "Lab Monitor" Frame) */}
          <motion.div variants={fadeInFromLeft} className="lg:col-span-7 order-2 lg:order-1">
             <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-black shadow-2xl">
                {/* Overlay UI elements to make it look like lab software */}
                <div className="absolute top-4 left-4 z-20 flex gap-3">
                   <div className="px-2 py-1 bg-red-900/30 border border-red-500/30 rounded text-[10px] font-mono text-red-400 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                     LIVE SIGNAL
                   </div>
                   <div className="px-2 py-1 bg-black/50 border border-white/10 rounded text-[10px] font-mono text-zinc-400">
                   </div>
                </div>
                
                <video
                  src="/assets/fnirs.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-cover opacity-70 grayscale-[30%] hover:grayscale-0 transition duration-700"
                />

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
             </div>
             <p className="mt-4 text-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
               Fig 2. Measuring Cognitive Load (DLPFC Activation) via fNIRS
             </p>
          </motion.div>

          {/* RIGHT: NARRATIVE */}
          <motion.div variants={fadeInFromRight} className="lg:col-span-5 order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(192,132,252,0.8)]"></span>
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Neuroscience & UX</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Biometric <br/> <span className="text-zinc-500">UI Benchmarking</span>
            </h3>

            <div className="space-y-8">
              <div className="group">
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Operationalizing &quot;Clutter&quot;</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Stakeholders debated UI &quot;density&quot; vs &quot;minimalism&quot; on aesthetic preference. My research shifted the conversation to <strong>cognitive cost</strong>. Using fNIRS (neuroimaging), we proved that FireTV&apos;s visual density triggered significantly higher activation in the Left DLPFC (working memory) compared to Apple TV.
                </p>
              </div>
              
              <div className="w-full h-[1px] bg-white/5"></div>

              <div className="group">
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">The Strategic Pivot</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  The data showed users were cognitively fatigued while searching for content. This research led to a redesign of the FireTV home page, seperating Video content to reduce the cognitive load required to parse the UI.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* === CASE STUDY 3: HARDWARE (Echo Show) === */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center pb-24"
        >
          {/* LEFT: NARRATIVE */}
          <motion.div variants={fadeInFromLeft} className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.8)]"></span>
              <span className="text-xs font-mono text-yellow-400 uppercase tracking-widest">Hardware & AI</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Multimodal AI <br /> <span className="text-zinc-500">+ Hardware</span>
            </h3>

            <p className="text-lg text-zinc-300 mb-8 leading-relaxed font-light">
              Led end-to-end Human Factors strategy for the Echo Show portfolio. My research informed 50+ iterative design updates that improved the core user experience for 75M+ customers.
            </p>

            <div className="inline-flex items-center gap-4 px-5 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
               <div className="p-1 bg-yellow-500/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.699-3.181a1 1 0 011.827.954L17.5 7.677V13a1 1 0 01-1 1h-2a1 1 0 01-1 1v-2.5l-2.481-.992-.472 2.361c-.13.65-.694 1.131-1.358 1.131H5.452c-.664 0-1.229-.481-1.358-1.131L3.622 9.508l-2.481.992V13a1 1 0 01-1 1h-2a1 1 0 01-1-1V7.677l-.98-3.92a1 1 0 011.827-.954L1.046 5.905 5 4.323V3a1 1 0 011-1h4z" clipRule="evenodd" />
                  </svg>
               </div>
               <span className="text-xs font-bold text-zinc-200 uppercase tracking-wider">2023 Amazon Inventor Award Recipient</span>
            </div>
          </motion.div>

          {/* RIGHT: FLOATING ASSET */}
          <motion.div variants={fadeInFromRight} className="lg:col-span-7 flex justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 blur-[80px] rounded-full -z-10"></div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-lg"
            >
              <Image
                src="/assets/echo.png"
                alt="Echo Show 10"
                width={800}
                height={600}
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-700" 
              />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
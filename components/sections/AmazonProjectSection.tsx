"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/ui/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, staggerContainer } from "@/app/utils/animationVariants";

export default function AmazonProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative w-full py-16 md:py-32 overflow-hidden bg-black" ref={ref}>
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-900/10 blur-[80px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transform-gpu"></div>
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-900/10 blur-[80px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3 transform-gpu"></div>

      {/* 1. SECTION HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mb-12 md:mb-24 max-w-7xl mx-auto px-6 border-b border-white/10 pb-6 md:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="flex items-center gap-6">
          <LogoBadge 
            logoSrc="/assets/amazon-logo.png" 
            alt="Amazon" 
            className="w-20 md:w-28 h-auto opacity-100 brightness-0 invert" 
          />
          <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
          <div className="hidden md:block">
            <h2 className="text-lg text-white font-medium tracking-tight">Devices Design Group</h2>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">UX Researcher</p>
          </div>
        </div>
        
        <div className="md:hidden">
          <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono">UX Researcher</p>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT STACK */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 space-y-32 md:space-y-48">
        
        {/* === CASE STUDY 1: REVENUE STRATEGY ($100M+) === */}
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
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                <span className="text-[10px] md:text-xs font-mono text-cyan-400 uppercase tracking-widest">Human Factors & Business Strategy</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Calibrating Alexa Latency Targets <br /> <span className="text-zinc-500">to Human Perception</span>
              </h3>

              {/* --- MOBILE ONLY: KEY METRIC (Recruiter Glance) --- */}
              <div className="block md:hidden mb-6 p-4 bg-zinc-900/50 border border-green-500/30 rounded-lg">
                 <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider">Projected Impact</span>
                 </div>
                 <div className="text-3xl font-bold text-white text-green-400">$50M+</div>
                 <p className="text-xs text-zinc-400 mt-1">Incremental OPS prevented by fixing latency thresholds.</p>
              </div>
              {/* ------------------------------------------------ */}

              <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-light">
                Engineering targets for Alexa were historically arbitrary. I led a multi-year research program to replace legacy technical benchmarks with human-centered thresholds, directly linking millisecond delays to long-term revenue loss.
              </p>
            </div>

            {/* PROCESS TIMELINE */}
            <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-8 md:space-y-12">
              
              {/* Step 1 */}
              <div className="relative">
                <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2">Experimental Design: Human Factors</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Used a custom &quot;Wizard of Oz&quot; latency engine to manipulate response times with millisecond precision across 2,160 controlled interactions with Alexa. This rigorous mapping identified the <span className="text-white font-medium">&quot;High Satisfaction Threshold&quot; as all responses faster than 1000ms</span>, where user satisfaction is highest and perception of &quot;slowness&quot; is minimized.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2">Strategic Integration: Economics</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Partnered with Alexa Economics to integrate these perceptual thresholds into the <span className="text-white font-medium">Negative Value Action (NVA) model</span>. We redefined &quot;system defects&quot; not just as technical failures, but as any interaction slower than the 1000ms satisfaction cliff—the point where the probability of customer churn and engagement loss sharply increases.
                </p>
              </div>

              {/* Step 3 (Outcome - Visible on Desktop flow, Mobile sees top block) */}
               <div className="relative">
                <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2">Outcome: $50M+ Projection</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  The calibrated model forecasted that achieving these human-centered thresholds for high-utility intents would save <span className="text-white font-medium">50.3B dialogs</span> with Alexa. Realizing these interaction gains was projected to generate <span className="text-green-400 font-bold">$50M+</span> in incremental revenue over the subsequent 15 months, providing a definitive financial North Star for Alexa’s global engineering roadmap.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: DATA VISUALIZATION */}
          <motion.div variants={fadeInFromRight} className="lg:col-span-7 flex flex-col justify-center h-full pt-8 lg:pt-0">
            {/* Aspect Ratio tweaked for mobile legibility */}
            <div className="relative w-full max-w-2xl mx-auto aspect-[16/11] md:aspect-[16/10] bg-zinc-900/80 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-2xl p-5 md:p-8 group">
  
              {/* Chart Header */}
              <div className="flex justify-between items-start mb-6 md:mb-8 z-20 relative">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <h4 className="text-[8px] md:text-[10px] font-mono text-zinc-400 uppercase tracking-widest">NVA Model</h4>
                  </div>
                  <div className="text-white font-bold text-base md:text-xl tracking-tight">Alexa Latency vs. User Satisfaction</div>
                </div>
                <div className="text-right">
                  <div className="text-[8px] md:text-[10px] font-mono text-zinc-500 uppercase">Impact</div>
                  <div className="text-green-400 font-mono font-bold text-lg md:text-xl">$50M+</div>
                </div>
              </div>

              {/* The Chart Area */}
              <div className="relative w-full h-[60%] md:h-[65%]">
                
                {/* Grid Lines - HIDDEN ON MOBILE for cleanliness */}
                <div className="hidden md:flex absolute inset-0 z-0 flex-col justify-between opacity-40">
                    <div className="w-full h-[1px] bg-white/10"></div>
                    <div className="w-full h-[1px] bg-white/10"></div>
                    <div className="w-full h-[1px] bg-white/10"></div>
                    <div className="w-full h-[1px] bg-white/10"></div>
                </div>

                {/* SVG Layer */}
                <svg className="absolute inset-0 w-full h-full overflow-visible z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4ade80" />
                      <stop offset="30%" stopColor="#4ade80" />
                      <stop offset="45%" stopColor="#facc15" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                  
                  {/* Threshold Line */}
                  <line x1="33" y1="0" x2="33" y2="100" stroke="white" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                  
                  {/* The Curve */}
                  <motion.path
                    d="M0,15 C 15,15 25,18 33,45 C 45,90 70,95 100,98" 
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    style={{ filter: "drop-shadow(0px 0px 8px rgba(74, 222, 128, 0.3))" }}
                  />
                  
                  {/* The "Cliff" Marker Point */}
                   <motion.circle 
                    cx="33" 
                    cy="45" 
                    r="8" 
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                    opacity="0.5"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.circle 
                    cx="33" 
                    cy="45" 
                    r="4" 
                    fill="#18181b" 
                    stroke="#fff"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 1.4, type: "spring" }}
                  />
                </svg>

                {/* DATA LABELS - Optimized Sizes for Mobile */}
                
                {/* Threshold Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                  className="absolute top-[2%] md:top-[5%] left-[15%] md:left-[26%] bg-zinc-800 border border-zinc-600 px-2 py-1 md:px-3 md:py-1.5 rounded shadow-xl z-20"
                >
                  <div className="text-[9px] md:text-xs font-bold text-white whitespace-nowrap">
                    1000ms Threshold
                  </div>
                  <div className="text-[7px] md:text-[9px] text-zinc-300 text-center">High Satisfaction</div>
                </motion.div>

                {/* Safe Zone Label */}
                <div className="absolute bottom-2 left-0 md:bottom-6 md:left-6">
                    <div className="text-[8px] md:text-[10px] font-mono text-green-400 uppercase tracking-wider mb-0.5 md:mb-1">Safe Zone</div>
                    <div className="text-[9px] md:text-xs text-zinc-300 max-w-[80px] md:max-w-[120px] leading-tight font-medium">
                        Revenue opportunity
                    </div>
                </div>

                {/* Danger Zone Label */}
                 <div className="absolute top-2 right-0 md:top-6 md:right-6 text-right">
                    <div className="text-[8px] md:text-[10px] font-mono text-red-400 uppercase tracking-wider mb-0.5 md:mb-1">Dissatisfaction Zone</div>
                    <div className="text-[9px] md:text-xs text-zinc-300 max-w-[90px] md:max-w-[140px] leading-tight font-medium">
                        Churn risk increases
                    </div>
                </div>

              </div>

              {/* X-Axis Labels */}
              <div className="hidden md:flex justify-between mt-4 md:mt-8 text-[8px] md:text-[10px] font-mono text-zinc-600 uppercase tracking-widest border-t border-white/5 pt-3">
                <span>0ms</span>
                <span className="text-zinc-300 relative left-[-5%]">1000ms</span>
                <span>2000ms</span>
                <span>3000ms</span>
              </div>
            </div>

            <p className="mt-8 text-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
              Fig 1. The &quot;Satisfaction Cliff&quot;: User satisfaction drops sharply after 1000ms
            </p>
          </motion.div>
        </motion.div>

        {/* === CASE STUDY 2: NEUROIMAGING === */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-24 items-center"
        >
             {/* LEFT: VIDEO/IMAGE */}
             <motion.div variants={fadeInFromLeft} className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-center">
                <div className="relative w-full aspect-video bg-zinc-900/80 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                    <video
                        src="/assets/fnirs.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="object-cover w-full h-full opacity-60 grayscale-[20%] hover:grayscale-0 transition duration-700"
                    />
                </div>
                {/* Caption Below */}
                <p className="mt-4 text-xs font-mono text-zinc-400 uppercase tracking-widest text-center">Fig 2. Measuring Cognitive Load via fNIRS</p>
             </motion.div>

             {/* RIGHT: CONTENT */}
             <motion.div variants={fadeInFromRight} className="lg:col-span-5 order-1 lg:order-2">
                 <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(192,132,252,0.8)]"></span>
                  <span className="text-[10px] md:text-xs font-mono text-purple-400 uppercase tracking-widest">Neuroscience & UX</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
                  Biometric <br/> <span className="text-zinc-500">UI Benchmarking</span>
                </h3>
                
                 <div className="space-y-6 md:space-y-8">
                  <div className="group">
                    <h4 className="text-sm md:text-base font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Operationalizing &quot;Clutter&quot;</h4>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                    The FireTV Home UI design was historically based on aesthetic preferences. I shifted the conversation to <strong>cognitive cost</strong>. Using fNIRS (functional neuroimaging), we proved that FireTV&apos;s UI density triggered significantly higher activation in the Left DLPFC (working memory) compared to competitors (Apple TV & Netflix).
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-white/5"></div>
                  <div className="group">
                    <h4 className="text-sm md:text-base font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">The Strategic Pivot</h4>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                      We optimized the Home UI to reduce cognitive load for 75M+ customers, resulting in increased engagement metrics and a simpler mental model for content discovery.
                    </p>
                  </div>
                </div>
             </motion.div>
        </motion.div>

        {/* === CASE STUDY 3: HARDWARE === */}
        <motion.div
          id="hardware-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-24 items-center pb-16 md:pb-24"
        >
           {/* LEFT: CONTENT */}
           <motion.div variants={fadeInFromLeft} className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.8)]"></span>
                <span className="text-[10px] md:text-xs font-mono text-yellow-400 uppercase tracking-widest">Hardware & AI</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Multimodal AI <br /> <span className="text-zinc-500">+ Hardware</span>
              </h3>
              <p className="text-base md:text-lg text-zinc-300 mb-6 md:mb-8 leading-relaxed font-light">
                Led end-to-end Human Factors strategy for the Echo Show portfolio. My research informed 50+ iterative design updates that improved the core user experience for 75M+ customers.
              </p>
               <div className="inline-flex items-center gap-4 px-4 py-2 md:px-5 md:py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                 <div className="p-1 bg-yellow-500/20 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.699-3.181a1 1 0 011.827.954L17.5 7.677V13a1 1 0 01-1 1h-2a1 1 0 01-1 1v-2.5l-2.481-.992-.472 2.361c-.13.65-.694 1.131-1.358 1.131H5.452c-.664 0-1.229-.481-1.358-1.131L3.622 9.508l-2.481.992V13a1 1 0 01-1 1h-2a1 1 0 01-1-1V7.677l-.98-3.92a1 1 0 011.827-.954L1.046 5.905 5 4.323V3a1 1 0 011-1h4z" clipRule="evenodd" />
                    </svg>
                 </div>
                 <span className="text-[10px] md:text-xs font-bold text-zinc-200 uppercase tracking-wider">2023 Amazon Inventor Award Recipient</span>
              </div>
           </motion.div>

           {/* RIGHT: IMAGE */}
           <motion.div variants={fadeInFromRight} className="lg:col-span-7 flex flex-col items-center justify-center h-full pt-8 lg:pt-0">
             <div className="relative w-full aspect-video bg-zinc-900/80 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-2xl group flex items-center justify-center p-8">
                 
                 {/* Background Glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>

                 <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src="/assets/echo.png"
                      alt="Echo Show 10"
                      width={800}
                      height={600}
                      className="w-auto h-full max-h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-700" 
                    />
                  </motion.div>
             </div>
             {/* Caption Below */}
             <p className="mt-4 text-xs font-mono text-zinc-400 uppercase tracking-widest text-center">Fig 3. Echo Show 10 with Motion Tracking</p>
           </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
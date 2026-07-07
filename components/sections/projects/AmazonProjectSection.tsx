"use client";

import { m } from "framer-motion";
import LogoBadge from "@/components/ui/LogoBadge";
import LazyVideo from "@/components/ui/LazyVideo";
import { fadeInFromLeft, fadeInFromRight, staggerContainer } from "@/lib/utils/animationVariants";

export default function AmazonProjectSection() {
  return (
    <section className="relative w-full py-16 md:py-32 overflow-hidden bg-black">
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-0 w-75 md:w-125 h-75 md:h-125 bg-blue-900/10 blur-[80px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transform-gpu"></div>
      <div className="absolute bottom-0 right-0 w-75 md:w-150 h-75 md:h-150 bg-purple-900/10 blur-[80px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3 transform-gpu"></div>

      {/* 1. SECTION HEADER */}
      <m.div 
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
          <div className="h-8 w-px bg-white/10"></div>
          <div>
            <h2 className="text-lg text-white font-medium tracking-tight">Devices Design Group</h2>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Human Factors Researcher</p>
          </div>
        </div>
      </m.div>

      {/* 2. MAIN CONTENT STACK */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-16 md:space-y-40">

        {/* === PROJECT 1: NEUROIMAGING, COGNITIVE LOAD & PATENT === */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative isolate grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-24 items-start"
        >
          {/* LEFT: VIDEO */}
          <m.div variants={fadeInFromLeft} className="relative z-10 lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center h-full pt-8 lg:pt-0">
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="relative w-full aspect-video bg-zinc-900/80 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-2xl group media-card">
                <div className="absolute -inset-4 bg-purple-500/6 blur-[60px] rounded-full pointer-events-none"></div>
                <LazyVideo
                  sources={[{ src: "/assets/fnirs.webm", type: "video/webm" }]}
                  poster="/assets/fnirs-poster.jpg"
                  className="relative object-cover w-full h-full opacity-70 grayscale-20 group-hover:opacity-90 group-hover:grayscale-0 transition duration-700"
                />
              </div>
              <p className="meta-caption">Fig 1. Measuring Cognitive Load via fNIRS</p>
            </div>
          </m.div>

          {/* RIGHT: COMBINED NARRATIVE */}
          <m.div variants={fadeInFromRight} className="relative z-20 lg:col-span-5 order-1 lg:order-2 pt-2">

            {/* fNIRS Narrative */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(192,132,252,0.8)]"></span>
                <span className="text-[10px] md:text-xs font-mono text-purple-400 uppercase tracking-widest">Neuroimaging & Product Strategy</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Mapping Cognitive Load <span className="text-zinc-500">to Product Decisions</span>
              </h3>

              {/* --- MOBILE ONLY: KEY METRIC --- */}
              <div className="block md:hidden mb-6 p-4 bg-zinc-900/50 border border-purple-500/30 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">Product Impact</span>
                </div>
                <div className="text-3xl font-bold text-purple-400">75M+</div>
                <p className="text-xs text-zinc-400 mt-1">Active customers reached through Echo Show and Echo Hub, shaped by neuroimaging-driven design requirements.</p>
              </div>

              <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-light">
                I co-established Amazon&apos;s first neuroimaging framework — combining fNIRS brain scanning with eye-tracking to quantify cognitive load across streaming UIs, replacing assumption-driven design with direct neural and gaze evidence.
              </p>
            </div>

            <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-8 md:space-y-12">
              <div className="relative">
                <span className="absolute -left-7.25 md:-left-9.25 top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2">Neuroimaging Methodology</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Applied a controlled within-subjects fNIRS protocol measuring prefrontal cortex activation, synchronized with eye-tracking to separate gaze behavior from cognitive effort. Findings translated directly into product requirements, shaping the interaction design of Echo Show and Echo Hub — reaching 75M+ active customers.
                </p>
              </div>
              <div className="relative">
                <span className="absolute -left-7.25 md:-left-9.25 top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2">Context-Aware Interaction Patent</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Beyond neuroimaging, I co-invented a context-aware interaction system — where the same physical input routes to contextually appropriate actions based on active UI state — granted as{" "}
                  <a href="https://patents.google.com/patent/US12532040B1" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">US Patent 12,532,040 B1</a>{" "}
                  in January 2026. This work earned the 2023 Amazon Inventor Award.
                </p>
              </div>
            </div>
          </m.div>
        </m.div>

        {/* === PROJECT 3: PERCEPTION SCIENCE & $50M IMPACT === */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative isolate grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-24 items-start pb-16 md:pb-24"
        >
          {/* LEFT: NARRATIVE */}
          <m.div variants={fadeInFromLeft} className="relative z-20 lg:col-span-5 pt-2">
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                <span className="text-[10px] md:text-xs font-mono text-cyan-400 uppercase tracking-widest">Human Factors & Business Strategy</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Replacing Arbitrary Targets <span className="text-zinc-500">with Perception Science</span>
              </h3>

              {/* --- MOBILE ONLY: KEY METRIC --- */}
              <div className="block md:hidden mb-6 p-4 bg-zinc-900/50 border border-green-500/30 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider">Alexa Economics Projection</span>
                </div>
                <div className="text-3xl font-bold text-green-400">$50M</div>
                <p className="text-xs text-zinc-400 mt-1">Projected by Alexa Economics via NVA modeling, applied against human-centered latency thresholds over 15 months.</p>
              </div>

              <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-light">
                Alexa&apos;s response time targets were set by engineers, not by perceptual data. I led a multi-year psychophysics program to replace those arbitrary benchmarks — isolating exactly where latency stops being imperceptible and starts eroding user trust.
              </p>
            </div>

            <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-8 md:space-y-12">
              <div className="relative">
                <span className="absolute -left-7.25 md:-left-9.25 top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2">Psychophysics at Scale: Mapping the Perception Cliff</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Engineered a custom &quot;Wizard of Oz&quot; latency injection system to vary Alexa response times with millisecond precision across 20,000+ controlled interactions. The psychophysical data revealed a clear <strong>High Satisfaction Threshold (HST)</strong> at <strong>1,000ms</strong> — the boundary where &gt;70% of users rate a response as &quot;not slow&quot; and the &quot;too slow&quot; rate stays below 5%. Beyond it, satisfaction drops sharply and non-linearly.
                </p>
              </div>
              <div className="relative">
                <span className="absolute -left-7.25 md:-left-9.25 top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2">Translating Perception Into Economic Defects</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Partnered with Alexa Economics to embed the HST directly into the Negative Value Action (NVA) model — redefining any interaction slower than 1,000ms as a measurable system defect. At that boundary, &quot;somewhat slow&quot; ratings nearly triple and downstream customer engagement drops in a statistically reliable pattern.
                </p>
              </div>
              <div className="relative">
                <span className="absolute -left-7.25 md:-left-9.25 top-1.5 w-3 h-3 bg-zinc-900 border border-zinc-600 rounded-full"></span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1 md:mb-2">Independent Validation: $50M Projected Impact</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Alexa Economics independently applied the HST thresholds to their NVA model and projected that closing the latency gap on four high-priority intents — PlayMusic, TurnOff, TurnOn, and Q&A — would generate <span className="text-green-400 font-bold">$50M in incremental operational value</span> over 15 months. A third-party financial validation of what the perceptual data had predicted — and the foundation of Alexa&apos;s Latency North Star.
                </p>
              </div>
            </div>
          </m.div>

          {/* RIGHT: DATA VISUALIZATION */}
          <m.div variants={fadeInFromRight} className="relative z-10 lg:col-span-7 flex flex-col justify-center h-full pt-8 lg:pt-0">
            <div className="relative w-full max-w-2xl mx-auto aspect-16/11 md:aspect-16/10 bg-zinc-900/80 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-2xl p-5 md:p-8 group">

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
                  <div className="text-green-400 font-mono font-bold text-lg md:text-xl">$50M</div>
                </div>
              </div>

              <div className="relative w-full h-[60%] md:h-[65%]">
                <div className="hidden md:flex absolute inset-0 z-0 flex-col justify-between opacity-40">
                  <div className="w-full h-px bg-white/10"></div>
                  <div className="w-full h-px bg-white/10"></div>
                  <div className="w-full h-px bg-white/10"></div>
                  <div className="w-full h-px bg-white/10"></div>
                </div>

                <svg className="absolute inset-0 w-full h-full overflow-visible z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4ade80" />
                      <stop offset="30%" stopColor="#4ade80" />
                      <stop offset="45%" stopColor="#facc15" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                  <line x1="33" y1="0" x2="33" y2="100" stroke="white" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                  <m.path
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
                  <m.circle cx="33" cy="45" r="8" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <m.circle cx="33" cy="45" r="4" fill="#18181b" stroke="#fff" strokeWidth="2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 1.4, type: "spring" }}
                  />
                </svg>

                <m.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                  className="absolute top-[2%] md:top-[5%] left-[15%] md:left-[26%] bg-zinc-800 border border-zinc-600 px-2 py-1 md:px-3 md:py-1.5 rounded shadow-xl z-20"
                >
                  <div className="text-[9px] md:text-xs font-bold text-white whitespace-nowrap">1,000ms Threshold</div>
                  <div className="text-[7px] md:text-[9px] text-zinc-300 text-center">HST</div>
                </m.div>

                <div className="absolute bottom-2 left-0 md:bottom-6 md:left-6">
                  <div className="text-[8px] md:text-[10px] font-mono text-green-400 uppercase tracking-wider mb-0.5 md:mb-1">Safe Zone</div>
                  <div className="text-[9px] md:text-xs text-zinc-300 max-w-20 md:max-w-30 leading-tight font-medium">Revenue opportunity</div>
                </div>
                <div className="absolute top-2 right-0 md:top-6 md:right-6 text-right">
                  <div className="text-[8px] md:text-[10px] font-mono text-red-400 uppercase tracking-wider mb-0.5 md:mb-1">Dissatisfaction Zone</div>
                  <div className="text-[9px] md:text-xs text-zinc-300 max-w-22.5 md:max-w-35 leading-tight font-medium">Churn risk increases</div>
                </div>
              </div>

              <div className="hidden md:flex justify-between mt-4 md:mt-8 text-[8px] md:text-[10px] font-mono text-zinc-600 uppercase tracking-widest border-t border-white/5 pt-3">
                <span>0ms</span>
                <span className="text-zinc-300 relative left-[2%]">1000ms</span>
                <span>2000ms</span>
                <span>3000ms</span>
              </div>
            </div>

            <p className="mt-8 text-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
              Fig 3. High Satisfaction Threshold (HST): Ratings of &quot;not slow&quot; fall sharply beyond 1,000ms
            </p>
            <p className="mt-1 text-center text-[9px] font-mono text-zinc-700 tracking-wide">
              Source: Alexa Response Latency Research — Devices Design Group, UX Research, April 2021
            </p>
          </m.div>
        </m.div>

      </div>
    </section>
  );
}
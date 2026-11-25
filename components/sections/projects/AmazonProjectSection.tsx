// v3 - Winter 2026
"use client";

import { m } from "framer-motion";
import LazyVideo from "@/components/ui/LazyVideo";
import {
  ProjectSectionHeader,
  ProjectTimelineItem,
} from "@/components/sections/projects/ProjectSectionPrimitives";
import { SITE_LINKS } from "@/lib/constants/site";
import { fadeInFromLeft, fadeInFromRight, staggerContainer } from "@/lib/utils/animationVariants";

export default function AmazonProjectSection() {
  return (
    <section data-analytics-section="amazon-section" className="relative w-full pt-8 pb-16 md:pt-16 md:pb-32 overflow-hidden bg-black">
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-0 w-75 md:w-125 h-75 md:h-125 bg-blue-900/10 blur-[80px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transform-gpu"></div>
      <div className="absolute bottom-0 right-0 w-75 md:w-150 h-75 md:h-150 bg-purple-900/10 blur-[80px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3 transform-gpu"></div>

      {/* 1. SECTION HEADER */}
      <ProjectSectionHeader
        logoSrc="/assets/amazon-logo.webp"
        logoAlt="Amazon"
        logoWidth={800}
        logoHeight={291}
        logoWidthClass="w-20 md:w-28"
        logoPriority
        title="Devices Design Group"
        role="Human Factors Researcher"
      />

      {/* 2. MAIN CONTENT STACK */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-16 md:space-y-40">

        {/* === PROJECT 1: NEUROIMAGING, COGNITIVE LOAD & PATENT === */}
        <m.div
          variants={staggerContainer}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative isolate grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start"
        >
          {/* LEFT: VIDEO */}
          <m.div variants={fadeInFromLeft} className="relative z-10 lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center h-full pt-8 lg:pt-0">
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="media-frame aspect-video group media-card">
                <div className="absolute -inset-4 bg-purple-500/6 blur-[60px] rounded-full pointer-events-none"></div>
                <LazyVideo
                  sources={[
                    { src: "/assets/fnirs.mp4", type: "video/mp4" },
                    { src: "/assets/fnirs.webm", type: "video/webm" },
                  ]}
                  poster="/assets/fnirs-poster.webp"
                  ariaLabel="Measuring cognitive load via fNIRS neuroimaging"
                  className="w-full h-full"
                />
              </div>
              <p className="meta-caption">Fig 1. Measuring Cognitive Load via fNIRS</p>
            </div>
          </m.div>

          {/* RIGHT: COMBINED NARRATIVE */}
          <m.div variants={fadeInFromRight} className="relative z-20 lg:col-span-6 order-1 lg:order-2 pt-2">

            {/* fNIRS Narrative */}
            <div className="mb-8 md:mb-10">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-5 leading-[1.1] tracking-tight">
                Mapping Cognitive Load <span className="text-zinc-500">to Echo Device Design</span>
              </h3>

              {/* KEY METRIC CALLOUT (Mobile & Desktop) */}
              <div className="mb-6 p-4 info-card border-purple-500/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6">
                <div className="shrink-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">Product Reach</span>
                  </div>
                  <div className="text-3xl font-bold text-purple-400">75M+</div>
                </div>
                <p className="text-xs text-zinc-400 sm:max-w-xs leading-relaxed">
                  The work informed Echo Show and Echo Hub products serving 75M+ active customers.
                </p>
              </div>

              <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-light">
                I co-established Amazon&apos;s first neuroimaging framework — combining fNIRS brain scanning with eye-tracking to quantify cognitive load across streaming UIs, replacing assumption-driven design with direct neural and gaze evidence.
              </p>
            </div>

            <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-8 md:space-y-12">
              <ProjectTimelineItem title="Neuroimaging Methodology">
                Applied a controlled within-subjects fNIRS protocol measuring prefrontal cortex activation, synchronized with eye-tracking to separate gaze behavior from cognitive effort. Findings informed Echo Show and Echo Hub product requirements.
              </ProjectTimelineItem>
              <ProjectTimelineItem title="Context-Aware Interaction Patent">
                Beyond neuroimaging, I co-invented a context-aware interaction system — where the same physical input routes to contextually appropriate actions based on active UI state — granted as{" "}
                <a href={SITE_LINKS.patent} target="_blank" rel="noopener noreferrer" data-analytics-cta="patent_link" data-analytics-location="amazon_section" data-analytics-id="US12532040B1" className="text-blue-400 underline underline-offset-4 hover:text-blue-300 transition-colors">US Patent 12,532,040 B1</a>{" "}
                in January 2026.
              </ProjectTimelineItem>
            </div>
          </m.div>
        </m.div>

        {/* === PROJECT 2: PERCEPTION SCIENCE & $50M IMPACT === */}
        <m.div
          variants={staggerContainer}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative isolate grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start pb-16 md:pb-24"
        >
          {/* LEFT: NARRATIVE */}
          <m.div variants={fadeInFromLeft} className="relative z-20 lg:col-span-6 pt-2">
            <div className="mb-8 md:mb-10">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-5 leading-[1.1] tracking-tight">
                Calibrating Alexa Response Latency <span className="text-zinc-500">to Human Perceptual Limits</span>
              </h3>

              {/* --- MOBILE ONLY: KEY METRIC --- */}
              <div className="block md:hidden mb-6 p-4 info-card border-green-500/30">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider">Projected Operational Value</span>
                </div>
                <div className="text-3xl font-bold text-green-400">$50M</div>
                  <p className="text-xs text-zinc-400 mt-1">I established Alexa&apos;s latency satisfaction thresholds, then Alexa Economics projected $50M in incremental operational value over 15 months if those latency targets were met across high-priority voice intents.</p>
              </div>

              <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-light">
                Alexa&apos;s response latency targets were defined by engineering constraints, not human perception. I led a multi-year Human Factors research program to establish empirically grounded thresholds — identifying precisely where response delay crosses from imperceptible to trust-eroding, and anchoring those findings in the economic models that drive product investment.
              </p>
            </div>

            <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-8 md:space-y-12">
              <ProjectTimelineItem title="Isolating the Latency Satisfaction Threshold">
                Used a Wizard of Oz latency injection system to manipulate visual and auditory response latency on users&apos; devices across 20,000+ trials — controlling latency as an isolated variable while keeping other system factors constant. Analysis identified a <strong>High Satisfaction Threshold (HST)</strong> at <strong>1,000ms</strong>: the point where &quot;too slow&quot; ratings climbed and satisfaction declined.
              </ProjectTimelineItem>
              <ProjectTimelineItem title="NVA Model Integration & Economic Validation">
                Alexa Economics adopted the HST in its Negative Value Action (NVA) model. It projected that meeting latency targets across high-priority voice intents could generate <span className="text-green-400 font-bold">$50M in incremental operational value</span> over 15 months.
              </ProjectTimelineItem>
            </div>
          </m.div>

          {/* RIGHT: DATA VISUALIZATION */}
          <m.div variants={fadeInFromRight} className="relative z-10 lg:col-span-6 flex flex-col justify-center h-full pt-8 lg:pt-0">
            <div className="media-frame max-w-2xl mx-auto p-5 md:p-8 group media-card">

              <div className="flex justify-between items-start mb-6 md:mb-8 z-20 relative">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest">NVA Model</h4>
                  </div>
                  <div className="text-white font-bold text-base md:text-xl tracking-tight">Alexa Latency vs. User Satisfaction</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-zinc-400 uppercase">Impact</div>
                  <div className="text-green-400 font-mono font-bold text-lg md:text-xl">$50M</div>
                </div>
              </div>

              <p className="mb-3 text-xs font-medium text-zinc-300">1,000ms High Satisfaction Threshold</p>
              <div className="relative w-full h-36 sm:h-44 md:h-52">
                <div className="hidden md:flex absolute inset-0 z-0 flex-col justify-between opacity-40">
                  <div className="w-full h-px bg-white/10"></div>
                  <div className="w-full h-px bg-white/10"></div>
                  <div className="w-full h-px bg-white/10"></div>
                  <div className="w-full h-px bg-white/10"></div>
                </div>

                <svg className="absolute inset-0 w-full h-full overflow-visible z-10" preserveAspectRatio="none" viewBox="0 0 100 100" role="img" aria-label="Illustrative curve: satisfaction decreases sharply beyond the 1,000 millisecond threshold.">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4ade80" />
                      <stop offset="30%" stopColor="#4ade80" />
                      <stop offset="45%" stopColor="#facc15" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                  <line x1="33" y1="0" x2="33" y2="100" stroke="white" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                  <path
                    d="M0,15 C 15,15 25,18 33,45 C 45,90 70,95 100,98"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{ filter: "drop-shadow(0px 0px 8px rgba(74, 222, 128, 0.3))" }}
                  />
                  <circle cx="33" cy="45" r="4" fill="#18181b" stroke="#fff" strokeWidth="2" />
                </svg>
              </div>

              <div className="flex justify-between gap-1 mt-4 text-xs font-mono text-zinc-400 border-t border-white/5 pt-3">
                <span>0ms</span>
                <span className="text-zinc-300">1000ms</span>
                <span>2000ms</span>
                <span>3000ms</span>
              </div>
              <div className="flex justify-between gap-4 mt-4 text-xs">
                <div><span className="text-green-400">Safe Zone</span><p className="text-zinc-300">Revenue opportunity</p></div>
                <div className="text-right"><span className="text-red-400">Dissatisfaction Zone</span><p className="text-zinc-300">Churn risk increases</p></div>
              </div>
              <p className="mt-3 text-xs text-zinc-400">Illustrative relationship</p>
            </div>

            <p className="meta-caption">
              Fig 2. High Satisfaction Threshold (HST): Ratings of &quot;not slow&quot; fall sharply beyond 1,000ms
            </p>
            <p className="mt-1 text-center text-xs font-mono text-zinc-400 tracking-wide">
              Source: Alexa Response Latency Research — Devices Design Group, April 2021
            </p>
          </m.div>
        </m.div>

      </div>
    </section>
  );
}
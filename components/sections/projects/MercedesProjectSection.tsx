"use client";

import { m } from "framer-motion";
import LazyVideo from "@/components/ui/LazyVideo";
import {
  ProjectSectionHeader,
  ProjectTimelineItem,
} from "@/components/sections/projects/ProjectSectionPrimitives";
import { fadeInFromLeft, fadeInFromRight, staggerContainer } from "@/lib/utils/animationVariants";

export default function MercedesProjectSection() {
  return (
    <section className="relative w-full py-16 md:py-32 overflow-hidden bg-black">

      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-0 w-75 md:w-125 h-75 md:h-125 bg-slate-900/10 blur-[80px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transform-gpu"></div>
      <div className="absolute bottom-0 right-0 w-75 md:w-150 h-75 md:h-150 bg-gray-900/10 blur-[80px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3 transform-gpu"></div>

      {/* 1. SECTION HEADER */}
      <ProjectSectionHeader
        logoSrc="/assets/benz.webp"
        logoAlt="Mercedes"
        logoWidthClass="w-12 md:w-16"
        title="Semi-Autonomous HMI · Trust Research"
        role="Human Factors PhD Intern"
        compactMobile
      />

      {/* 2. MAIN CONTENT STACK */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-16 md:space-y-48">

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative isolate grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start"
        >
          {/* LEFT: VISUAL MEDIA (on desktop) */}
          <m.div variants={fadeInFromLeft} className="relative z-10 lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center h-full pt-8 lg:pt-0">
             <div className="media-frame aspect-video group media-card">
                <LazyVideo
                  sources={[
                    { src: "/assets/drive.webm", type: "video/webm" },
                  ]}
                  poster="/assets/drive-poster.webp"
                  ariaLabel="Mercedes-Benz semi-autonomous driving simulator"
                  className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
             </div>
             {/* Caption Below */}
             <p className="meta-caption">Semi-Autonomous Driving Simulator</p>
          </m.div>

          {/* RIGHT: NARRATIVE (on desktop) */}
          <m.div variants={fadeInFromRight} className="relative z-20 lg:col-span-6 order-1 lg:order-2 pt-2">
            <div className="mb-8 md:mb-10">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-5 leading-[1.1] tracking-tight">
                Trust in Semi-Autonomous <br/> <span className="text-zinc-500">Driving</span>
              </h3>

              <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-light">
                &quot;How does the car communicate intent?&quot; Conducted foundational research on passenger experiences in L2 vehicles to guide critical improvements to the HMI that enhanced trust.
              </p>
            </div>

            {/* PROCESS TIMELINE */}
            <div className="relative ml-3 md:ml-0 pl-6 md:pl-8 border-l border-white/10 space-y-8 md:space-y-12">
              <ProjectTimelineItem title="HMI Design Standards">
                Defined <span className="text-white font-medium">Alert Modality standards</span> for autonomous handovers. These findings directly influenced internal design guidelines, ensuring clear communication of system status during critical control transitions.
              </ProjectTimelineItem>

              <ProjectTimelineItem title="Psychoacoustic Modeling">
                Operationalized the subjective experience of &quot;quiet&quot; by correlating acoustic sensor data with human perception. This model guided engineering adjustments that produced a measurable reduction in perceived cabin noise.
              </ProjectTimelineItem>

              <ProjectTimelineItem title="Trust Score Lift: Automated Lane Changes & Handoffs">
                Across a structured pre/post comparative study, the implemented HMI improvements produced a verifiable increase in user trust scores during automated lane changes and handoffs.
              </ProjectTimelineItem>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
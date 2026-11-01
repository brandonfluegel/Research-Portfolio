"use client";

import { m } from "framer-motion";
import Image from "next/image";
import {
  ProjectSectionHeader,
  ProjectTimelineItem,
} from "@/components/sections/projects/ProjectSectionPrimitives";
import { fadeInFromLeft, fadeInFromRight, staggerContainer } from "@/lib/utils/animationVariants";

export default function UberProjectSection() {
  return (
    <section className="relative w-full py-16 md:py-32 overflow-hidden bg-black">

      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-0 w-75 md:w-125 h-75 md:h-125 bg-emerald-900/10 blur-[80px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transform-gpu"></div>
      <div className="absolute bottom-0 right-0 w-75 md:w-150 h-75 md:h-150 bg-teal-900/10 blur-[80px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3 transform-gpu"></div>

      {/* 1. SECTION HEADER */}
      <ProjectSectionHeader
        logoSrc="/assets/uber-logo.webp"
        logoAlt="Uber"
        logoWidthClass="w-20 md:w-24"
        title="Driver Growth & Global Strategy"
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
             <div className="media-frame aspect-video group media-card flex items-center justify-center p-3 md:p-6">
                <Image
                  src="/assets/uber-app.webp"
                  alt="Uber Research"
                  fill
                  quality={85}
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
             </div>
             {/* Caption Below */}
               <p className="meta-caption">Research Led to Driver App Redesign</p>
          </m.div>

          {/* RIGHT: NARRATIVE (on desktop) */}
          <m.div variants={fadeInFromRight} className="relative z-20 lg:col-span-6 order-1 lg:order-2 pt-2">
            <div className="mb-8 md:mb-10">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-5 leading-[1.1] tracking-tight">
                Driver Retention Strategy <br/> <span className="text-zinc-500">in Brazil</span>
              </h3>

              <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-light">
                Conducted contextual inquiry and diary studies with rental drivers in São Paulo to surface friction unique to the LATAM market. Findings directly informed the driver app redesign, reducing task complexity and improving new-driver retention in the critical first 30 days of onboarding.
              </p>
            </div>

            {/* PROCESS TIMELINE */}
            <div className="relative ml-3 md:ml-0 pl-6 md:pl-8 border-l border-white/10 space-y-8 md:space-y-12">
              <ProjectTimelineItem title="Foundational Research in Brazil">
                Conducted contextual inquiry and in-situ diary studies with rental drivers across São Paulo. Found that the app’s multi-step task flows imposed high cognitive load — measured via NASA-TLX and task completion analysis — and was a primary churn driver for new rental drivers in the first 30 days.
              </ProjectTimelineItem>

              <ProjectTimelineItem title="Driver Retention Lift: First 30 Days Post-Launch">
                The redesigned driver app reduced NASA-TLX workload subscale scores and produced a measurable lift in driver retention for the rental segment in the LATAM region within the first post-launch quarter.
              </ProjectTimelineItem>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function SlingProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative max-w-5xl mx-auto py-12 px-4 mb-16 md:py-24 md:mb-24" ref={ref}>
      {/* Overview Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-5 rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-6 md:p-8 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Product Leadership & AI Strategy</h3>
          <p className="text-base text-zinc-200">
            Recruited to report directly to the VP of Product to build the Product Research function. I operationalize user insights into high-level product strategy, focusing on AI trust, monetization, and long-term subscriber retention.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
             <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Role: Staff Product Researcher</span>
             <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Focus: GenAI & Revenue</span>
          </div>
        </motion.div>

        {/* Placeholder for Visual - You can replace this src with a relevant image or video later */}
        <motion.div variants={fadeInFromRight} className="flex flex-col items-center">
          <Image
            src="/assets/sling.png"
            alt="Sling TV Logo"
            width={800}
            height={400}
            className="rounded-xl object-contain w-full h-auto shadow-xl hover:scale-105 transition-transform duration-500"
          />
          <span className="mt-3 text-center text-sm font-medium text-zinc-300 block">
            Defining the Future of TV Interaction
          </span>
        </motion.div>
      </motion.div>

      {/* Case Studies Section */}
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-left mt-16 mb-6 text-white"
      >
        Strategic Initiatives
      </motion.h3>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* GenAI Case Study */}
        <motion.div
          className="case-study-container rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-6 md:p-8 shadow-2xl cursor-pointer transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1"
          variants={fadeInFromLeft}
          whileHover={{ scale: 1.03, y: -4 }}
        >
          <h4 className="text-lg md:text-xl font-bold text-white">Architecting Trust in GenAI Companions</h4>
          
          <div className="flex flex-wrap gap-2 mt-3 mb-4">
            <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Outcome: Trust Framework Adoption</span>
            <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Domain: Human-AI Interaction</span>
            <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Method: Mental Model Mapping</span>
          </div>

          <div className="space-y-3 mt-3 text-base text-zinc-300">
            <p>
              Architected the interaction model for a probabilistic AI companion. By applying Human Factors principles, I defined a &apos;System Status&apos; framework that mitigates hallucination risks and aligns user expectations with model capabilities.
            </p>
          </div>
        </motion.div>

        {/* Monetization Case Study */}
        <motion.div
          className="case-study-container rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-6 md:p-8 shadow-2xl cursor-pointer transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1"
          variants={fadeInFromRight}
          whileHover={{ scale: 1.03, y: -4 }}
        >
          <h4 className="text-lg md:text-xl font-bold text-white">The Science of Conversion (+17% Lift)</h4>

          <div className="flex flex-wrap gap-2 mt-3 mb-4">
            <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Outcome: +17% Conversion</span>
            <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Domain: Growth Strategy</span>
            <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Method: Mixed-Methods Funnel Analysis</span>
          </div>

          <div className="space-y-3 mt-3 text-base text-zinc-300">
            <p>
              Orchestrated a data-backed redesign of the acquisition funnel. By triangulating behavioral drop-off points with qualitative friction analysis, I drove a design strategy that unlocked significant revenue growth while protecting long-term brand integrity.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
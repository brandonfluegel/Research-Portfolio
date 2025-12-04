"use client";

import { motion } from "framer-motion";
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
        <motion.div variants={fadeInFromLeft} className="space-y-5 rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-8 md:p-10 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Product Leadership & Human-AI Strategy</h3>
          <p className="text-zinc-200 leading-relaxed">
            Reporting directly to the VP of Product, I was recruited to build and lead the Product Research function at Sling.
          </p>
          <p className="text-zinc-200 leading-relaxed mt-4">
            I operationalize user insights into high-level product strategy, focusing on AI trust, monetization, and long-term subscriber retention.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
          </div>
        </motion.div>

        {/* Placeholder for Visual - You can replace this src with a relevant image or video later */}
        <motion.div variants={fadeInFromRight} className="flex flex-col items-center mb-12 md:mb-0">
          <video
            src="/assets/sling-workshop.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-xl object-cover w-full h-auto shadow-xl hover:scale-105 transition-transform duration-500"
          />
          <span className="mt-3 text-center text-sm font-medium text-white">
            Led the 2025 Product & Design workshop to explore the intersection of UX, AI, and customer delight. Generated 50+ concepts that are being triaged into our 2026 product roadmap.
          </span>
        </motion.div>
      </motion.div>

      {/* Case Studies Section */}
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-left mt-16 md:mt-24 mb-6 text-white"
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
          className="case-study-container rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-8 md:p-10 shadow-2xl cursor-pointer transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1"
          variants={fadeInFromLeft}
          whileHover={{ scale: 1.03, y: -4 }}
        >
          <h4 className="text-lg md:text-xl font-bold text-white mb-4 leading-tight">Architecting Trust in an AI Companion</h4>
          
          <div className="flex flex-wrap gap-2 mt-4 mb-6">
            <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Outcome: AI Trust Framework Adoption</span>
            <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Domain: Human-AI Interaction</span>
            <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Method: Iterative Concept Testing & Expert Review</span>
          </div>

          <div className="space-y-3 mt-3">
            <p className="text-base md:text-lg text-zinc-300/90 leading-loose">
              Architected the interaction model for a novel TV-based AI companion. By applying Human Factors principles, I defined a &apos;Trust & System Status&apos; framework that increased customer trust and product usability, ensuring safe and delightful adoption for mass-market audiences.
            </p>
          </div>
        </motion.div>

        {/* Monetization Case Study */}
        <motion.div
          className="case-study-container rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-8 md:p-10 shadow-2xl cursor-pointer transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1"
          variants={fadeInFromRight}
          whileHover={{ scale: 1.03, y: -4 }}
        >
          <h4 className="text-lg md:text-xl font-bold text-white mb-4 leading-tight">Boosting Sling Subscriber Conversion</h4>

          <div className="flex flex-wrap gap-2 mt-4 mb-6">
            <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Outcome: 17% Increase in Purchase Conversion on Sling.com</span>
            <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Domain: Sling Web & Mobile</span>
            <span className="px-2 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-md text-white">Method: Mixed-Methods Funnel Analysis & Iterative Redesign</span>
          </div>

          <div className="space-y-3 mt-3">
            <p className="text-base md:text-lg text-zinc-300/90 leading-loose">
Orchestrated the redesign of the end-to-end user acquisition funnel. Identified critical friction points and implemented a design strategy that increased conversion performance on Sling.com by 17%.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
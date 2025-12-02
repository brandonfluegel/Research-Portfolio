"use client";

import { motion } from "framer-motion";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function AmazonProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative max-w-5xl mx-auto py-20 px-3 -mt-8 scale-90" ref={ref}>
      <div id="amazon" className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <LogoBadge
          logoSrc="/assets/amazon-logo.png"
          alt="Amazon Logo"
          className="opacity-20 w-60 h-auto"
        />
      </div>

      {/* Overview Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt- grid md:grid-cols-2 gap-10 items-start"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-5 text-white">
          <h3 className="text-xl font-bold">Amazon: Multimodal AI & Latency Strategy</h3>
          <p>
            Designed and conducted 25+ mixed-methods studies, delivering actionable insights that informed 100+ design iterations across Alexa+ Generative AI, Echo Show, Echo Hub, and Fire TV. Strategically prioritized high-impact research programs, including a multi-year study that identified a $1.3 billion opportunity by optimizing Alexa’s response latency.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="flex flex-col items-center">
          <video
            src="/assets/fnirs.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-xl object-cover w-full shadow-xl hover:scale-105 transition-transform duration-500"
          />
          <span className="mt-3 text-center text-sm font-medium text-white">Functional Brain Imaging During TV Search</span>
        </motion.div>
      </motion.div>

      {/* Case Studies Section */}
<motion.h3
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="text-2xl font-bold text-left mt-16 mb-6 text-white"
>
  Case Studies
</motion.h3>

<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid md:grid-cols-2 gap-8"
>
  {/* Alexa Latency Case Study */}
  <motion.div
    className="case-study-container rounded-xl shadow-lg p-6 cursor-pointer"
    variants={fadeInFromLeft}
    whileHover={{ scale: 1.03, y: -4 }}
    style={{ color: "#ffffff" }}
  >
    <h4 className="text-lg font-bold">Quantifying the $1.3B Cost of Latency</h4>
    <div className="flex gap-2 mt-2 mb-3 flex-wrap">
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md">Method: Psychophysics</span>
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md">Impact: $1.3B Revenue Opportunity</span>
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md">Stakeholder: VP Engineering</span>
    </div>
    <div className="space-y-3 mt-3">
      <p>
        Slow Alexa responses negatively impact customer experience and reduce their subsequent spending across Amazon services.
      </p>
      <p>
        As Lead Researcher, I led a multi-year effort that used longitudinal diary studies, lab-based A/B tests, and large-scale quantitative surveys. Results from my research identified task- and device-specific latency thresholds critical to customer satisfaction.
      </p>
      <p>
        Partnering with Amazon’s Economics team, we demonstrated how meeting these thresholds could drive an additional 5+ billion Alexa interactions and approximately $1.3 billion in downstream revenue within 18 months.
      </p>
    </div>
  </motion.div>

  {/* TV Interface Design Case Study */}
  <motion.div
    className="case-study-container rounded-xl shadow-lg p-6 cursor-pointer"
    variants={fadeInFromRight}
    whileHover={{ scale: 1.03, y: -4 }}
    style={{ color: "#ffffff" }}
  >
    <h4 className="text-lg font-bold">Neuro-Optimized TV Interfaces</h4>
    <div className="flex gap-2 mt-2 mb-3 flex-wrap">
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md">Method: Eye-Tracking & fNIRS</span>
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md">Result: -25% Search Time</span>
      <span className="text-xs font-medium px-2 py-1 bg-white/10 border border-white/20 rounded-md">Scale: Fire TV Global</span>
    </div>
    <div className="space-y-3 mt-3">
      <p>
      To identify what makes a TV interface truly engaging, I collaborated closely with Fire TV and Prime Video design teams over the course of six months.
      </p>
      <p>
      Combining eye-tracking, brain imaging (fNIRS), heuristic evaluations, and customer interviews, I defined several UI design attributes that significantly lowered customer cognitive load and improved usability.
      </p>
      <p>
      My insights directly guided Fire TV and Prime Video interface redesigns, reducing content discovery time by 25% and enhancing customer satisfaction across millions of viewers.
      </p>
    </div>
  </motion.div>
</motion.div>

    </section>
  );
}

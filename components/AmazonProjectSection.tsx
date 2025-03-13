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
          <h3 className="text-xl font-bold">Devices Design Group</h3>
          <p>
            Designed and conducted 25+ mixed-methods studies, delivering actionable insights that informed 100+ design iterations across Echo Show, Echo Hub, Fire TV, Alexa Mobile App, and Alexa+ Generative AI. Strategically prioritized high-impact research programs, including a multi-year study that identified a $1.5 billion opportunity by optimizing Alexa’s response latency.
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
          <span className="mt-3 text-center text-sm font-medium text-white">Functional Brain Imaging During Visual TV Search</span>
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
        {/* Case Study Card 1: Alexa Latency */}
        <motion.div
          className="case-study-container rounded-xl shadow-lg p-6 cursor-pointer"
          variants={fadeInFromLeft}
          whileHover={{ scale: 1.03, y: -4 }}
        >
          <h4 className="text-lg font-bold">Optimizing Alexa Latency to Enhance Customer Engagement</h4>
          <p className="mt-2">
          Slow Alexa responses caused customer frustration, reducing their engagement and spending on Amazon services. As the Lead Reseacher in this multi-year series of diary studies, lab-based A/B tests, and large-scale surveys, I identified precise latency thresholds that influenced customer satisfaction.          </p>
          <p className="mt-2">
          Partnering with the Alexa Economics team, we modeled the business impact: improving latency for 75M Alexa users would yield over 5 billion additional interactions and approximately $1.7B in incremental revenue over 18 months.          </p>
         
        </motion.div>

        {/* Case Study Card 2: TV Interface Attractiveness */}
        <motion.div
          className="case-study-container rounded-xl shadow-lg p-6 cursor-pointer"
          variants={fadeInFromRight}
          whileHover={{ scale: 1.03, y: -4 }}
        >
          <h4 className="text-lg font-bold">Designing Engaging TV Interfaces with Cognitive Research</h4>
          <p className="mt-2">
          To identify what makes a TV interface truly engaging, I collaborated closely with Fire TV and Prime Video design teams over two months. Combining eye-tracking, brain imaging (fNIRS), heuristic evaluations, and user interviews, I uncovered how minimalistic layouts significantly lowered cognitive load and improved usability.

</p>
          <p className="mt-2">
          My insights directly guided interface redesigns, reducing content discovery time by 25% and enhancing customer satisfaction across millions of viewers.          </p>
          
         
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function AmazonProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative max-w-5xl mx-auto py-20 px-3 -mt-8 scale-90" ref={ref}>
      <div id="amazon" className="absolute -top-12 left-1/2 transform -translate-x-1/2">
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
        className="mt-6 grid md:grid-cols-2 gap-10 items-start"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-5">
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
        className="text-2xl font-bold text-left mt-16 mb-6"
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
        {/* Case Study Card 1 */}
        <motion.div
          className="case-study-container rounded-xl shadow-lg p-6 cursor-pointer"
          variants={fadeInFromLeft}
          whileHover={{ scale: 1.03, y: -4 }}
          style={{ backgroundColor: "#333333", color: "#ffffff" }}
        >
          <h4 className="text-lg font-bold">Alexa Latency and Customer Experience</h4>
          <p>
            Involved <strong>30 participants</strong> performing <strong>72 tasks</strong> across 12 intent types, examining latency between 500ms to 3000ms.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm">
            <li><strong>Methods:</strong> Quantitative Analysis, Usability Testing, Behavioral Metrics</li>
            <li><strong>Findings:</strong> Customer satisfaction dramatically decreased above 1000ms.</li>
            <li><strong>Impact:</strong> Guided performance targets, unlocking substantial financial gains.</li>
          </ul>
        </motion.div>

        {/* Case Study Card 2 */}
        <motion.div
          className="case-study-container rounded-xl shadow-lg p-6 cursor-pointer"
          variants={fadeInFromRight}
          whileHover={{ scale: 1.03, y: -4 }}
          style={{ backgroundColor: "#404040", color: "#ffffff" }}
        >
          <h4 className="text-lg font-bold">Customer Perceptions of UI Attractiveness</h4>
          <p>
            Evaluated visual attractiveness and cognitive load across popular TV interfaces.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm">
            <li><strong>Methods:</strong> Eye-tracking, Brain Imaging (fNIRS), Surveys</li>
            <li><strong>Findings:</strong> Preferences for minimal visual density (Apple TV, Netflix).</li>
            <li><strong>Impact:</strong> Improved Amazon TV UI, significantly enhancing user satisfaction.</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

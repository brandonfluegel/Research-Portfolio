"use client";

import { motion } from "framer-motion";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function AmazonProjectSection() {
  const { ref } = useParallax();

  return (
    <section id="amazon" className="relative max-w-6xl mx-auto py-24 px-4" ref={ref}>
      <LogoBadge
        logoSrc="/assets/amazon-logo.png"
        alt="Amazon Logo"
        className="absolute -top-28 left-1/2 transform -translate-x-1/2 opacity-20 w-96 h-auto"
      />

      {/* Overview Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid md:grid-cols-2 gap-12 items-start"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-6 text-black">
          <h3 className="text-2xl font-bold">Devices Design Group</h3>
          <p>
            Designed and conducted <strong>25+</strong> mixed-methods studies,
            delivering actionable insights that informed <strong>100+</strong>
            design iterations across Echo Show, Echo Hub, Fire TV, Alexa Mobile
            App, and Alexa+ Generative AI. Strategically prioritized high-impact
            research programs, including a multi-year study identifying a significant
            <strong>
              ${""}
              <CountUp end={1.7} decimals={1} duration={2.5} /> billion
            </strong>{" "}
            opportunity by optimizing Alexa’s response latency.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight}>
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.03}>
            <video
              src="/assets/fnirs.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl object-cover w-full shadow-xl"
            />
          </Tilt>
        </motion.div>
      </motion.div>

      {/* Case Studies Section */}
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl font-bold text-left mt-20 mb-8 text-black"
      >
        Case Studies
      </motion.h3>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10"
      >
        {/* Interactive Hover Card #1 */}
        <motion.div
          variants={fadeInFromLeft}
          whileHover={{ scale: 1.03, y: -5, boxShadow: "0 20px 30px rgba(0,0,0,0.35)" }}
          transition={{ duration: 0.3 }}
          className="bg-neutral-800 rounded-xl shadow-lg p-8 text-white cursor-pointer"
        >
          <h4 className="text-xl font-bold">Alexa Latency and Customer Experience</h4>
          <p>
            Involved <strong>30 participants</strong> performing <strong>72 tasks</strong> across 12 intent types, examining latency between 500ms to 3000ms.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Quantitative Analysis, Usability Testing, Behavioral Metrics</li>
            <li><strong>Findings:</strong> Customer satisfaction dramatically decreased above 1000ms.</li>
            <li><strong>Impact:</strong> Guided performance targets, unlocking substantial financial gains.</li>
          </ul>
        </motion.div>

        {/* Interactive Hover Card #2 */}
        <motion.div
          variants={fadeInFromRight}
          whileHover={{ scale: 1.03, y: -5, boxShadow: "0 20px 30px rgba(0,0,0,0.35)" }}
          transition={{ duration: 0.3 }}
          className="bg-neutral-800 rounded-xl shadow-lg p-8 text-white cursor-pointer"
        >
          <h4 className="text-xl font-bold">Customer Perceptions of UI Attractiveness</h4>
          <p>
            Evaluated visual attractiveness and cognitive load across popular TV interfaces.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Eye-tracking, Brain Imaging (fNIRS), Surveys</li>
            <li><strong>Findings:</strong> Preferences for minimal visual density (Apple TV, Netflix).</li>
            <li><strong>Impact:</strong> Improved Amazon TV UI, significantly enhancing user satisfaction.</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

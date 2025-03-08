"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import YearBadge from "@/components/YearBadge";
import useParallax from "@/app/hooks/useParallax";
import useDynamicTextColor from "@/app/hooks/useDynamicTextColor";

export default function AmazonProjectSection() {
  const { ref, y } = useParallax();
  const textColor = useDynamicTextColor();

  return (
    <section id="amazon" className="relative max-w-6xl mx-auto py-24 px-4" ref={ref}>
      <YearBadge year="2025" className="opacity-90 text-gray-900" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
        style={{ color: textColor }}
      >
        Amazon Devices Design Group
      </motion.h2>

      {/* Overview Section */}
      <div className="md:flex md:justify-between md:items-start gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6"
          style={{ color: textColor }}
        >
          <h3 className="text-2xl font-bold">Overview</h3>
          <p>
            Designed and conducted 25+ mixed-methods studies, delivering actionable insights that informed 100+ design iterations across Echo Show, Echo Hub, Fire TV, Alexa Mobile App, and Alexa+ Generative AI. Strategically prioritized high-impact research programs, including a multi-year study that identified a $1.5 billion opportunity by optimizing Alexa’s response latency.
          </p>
          <h4 className="font-semibold mt-4">Research Methods Used:</h4>
          <ul className="list-disc ml-6">
            <li>Mixed-Methods Research</li>
            <li>Usability Testing</li>
            <li>Quantitative Analysis</li>
          </ul>
        </motion.div>

        <div className="md:w-1/2 flex flex-col gap-6">
          <div className="flex gap-4">
            <motion.video
              style={{ y }}
              src="/assets/Glance.mp4"
              autoPlay
              muted
              loop
              className="rounded-xl object-cover w-1/2 h-auto hover:scale-105 transition-transform duration-500 shadow-xl"
            />

            <motion.div style={{ y }} className="overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/assets/FinalWidgetViz.png"
                alt="Final Widget Visualization"
                width={600}
                height={600}
                className="rounded-xl object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          <Image
            src="/assets/fnirs.jpg"
            alt="fNIRS Brain Imaging"
            width={1200}
            height={400}
            className="rounded-xl object-cover w-full shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Case Studies Section */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
        style={{ color: textColor }}
      >
        Case Studies
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Case Study 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-neutral-800 bg-opacity-40 rounded-xl shadow-lg p-8 space-y-4"
          style={{ color: textColor }}
        >
          <h4 className="text-xl font-bold">Optimizing Alexa Response Latency</h4>
          <p>
            Conducted detailed studies that uncovered latency as a significant friction point affecting user satisfaction and engagement.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Quantitative Analysis, Usability Testing, Behavioral Metrics</li>
            <li><strong>Findings:</strong> Identified optimal latency thresholds for user satisfaction.</li>
            <li><strong>Impact:</strong> Established engineering performance targets, driving significant revenue growth and enhanced customer engagement.</li>
          </ul>
        </motion.div>

        {/* Case Study 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-neutral-800 bg-opacity-40 rounded-xl shadow-lg p-8 space-y-4"
          style={{ color: textColor }}
        >
          <h4 className="text-xl font-bold">Enhancing Echo Show Experience</h4>
          <p>
            Leveraged mixed-methods research to significantly enhance Echo Show usability and customer delight.
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li><strong>Methods:</strong> Mixed-Methods Research, Diary Studies, Contextual Inquiry</li>
            <li><strong>Findings:</strong> Discovered user-centric opportunities for interface and interaction improvements.</li>
            <li><strong>Impact:</strong> Informed over 40 design iterations, greatly improving device usability and user satisfaction.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
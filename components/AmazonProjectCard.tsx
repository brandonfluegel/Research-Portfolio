"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function AmazonProjectCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="max-w-3xl mx-auto my-20 overflow-hidden rounded-lg shadow-xl bg-neutral-900 cursor-pointer p-6 sm:p-8"
      >
        <div className="overflow-hidden h-[400px] relative rounded-md">
          <Image
            src="/assets/mobile.jpg"
            alt="Amazon Devices Design Group"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Amazon Devices Design Group
          </h2>
          <p className="text-gray-300">
            Conducted 25+ mixed-methods studies, prioritized strategic research initiatives, and identified a $1.5 billion opportunity optimizing Alexa's performance.
          </p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-lg z-[9999] flex justify-center items-center overflow-y-auto py-12 px-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto bg-neutral-800 rounded-3xl p-8 sm:p-12 shadow-xl overflow-y-auto max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Amazon Devices Design Group
              </h2>

              <p className="text-gray-200 mb-6 leading-relaxed">
                Designed and conducted <strong className="text-indigo-400">25+ mixed-methods studies</strong>, delivering actionable insights that informed <strong className="text-indigo-400">100+ design iterations</strong> across Alexa+ Generative AI, Echo Show, Echo Hub, and Fire TV.
              </p>

              <p className="text-gray-200 mb-6 leading-relaxed">
                Strategically prioritized high-impact research programs, including a multi-year study that identified a <strong className="text-indigo-400">$1.5 billion opportunity</strong> by optimizing Alexa’s response latency. Insights defined Alexa Core Engineering latency targets for over 3 years, driving increased customer satisfaction, engagement, and measurable revenue growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Image
                  src="/assets/colleagues.jpg"
                  alt="Team Collaboration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl object-cover"
                />
                <Image
                  src="/assets/mobile.jpg"
                  alt="Mobile Interface Testing"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>

              <div className="mb-8 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/assets/Glanceability Animation.gif"
                  alt="Glanceability Animation"
                  width={1200}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="flex justify-center mb-8">
                <Image
                  src="/assets/Show10.jpg"
                  alt="Echo Show 10 Interface"
                  width={800}
                  height={500}
                  className="rounded-xl shadow-2xl"
                />
              </div>

              <blockquote className="italic border-l-4 border-indigo-500 pl-4 text-gray-300">
                "Brandon's research directly translated to faster, more responsive interactions, significantly elevating the Alexa user experience and driving long-term product success."
                <span className="block font-bold mt-2">– Alexa Product Team Lead</span>
              </blockquote>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-8 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

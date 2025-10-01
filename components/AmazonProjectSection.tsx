"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function AmazonProjectSection() {
  const { ref } = useParallax();

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-white shadow-2xl backdrop-blur"
      ref={ref}
    >
      <div id="amazon" className="absolute -top-12 left-1/2 -translate-x-1/2">
        <LogoBadge
          logoSrc="/assets/amazon-logo.png"
          alt="Amazon Logo"
          className="opacity-40 w-48 h-auto"
        />
      </div>

      {/* Overview Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 grid gap-10 md:grid-cols-2"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-5">
          <h3 className="text-2xl font-semibold">Devices Design Group</h3>
          <p className="text-gray-200">
            Designed and conducted 25+ mixed-methods studies, delivering actionable insights that informed 100+ design iterations across Alexa + Generative AI, Echo Show, Echo Hub, and Fire TV. Prioritized high-impact research programs, including a multi-year study that revealed a $1.7 billion opportunity by optimizing Alexa response latency.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="flex flex-col items-center">
          <video
            src="/assets/fnirs.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-2xl object-cover shadow-xl transition-transform duration-500 hover:scale-105"
          />
          <span className="mt-3 text-center text-sm font-medium text-gray-300">
            Functional brain imaging during Fire TV search flows
          </span>
        </motion.div>
      </motion.div>

      {/* Case Studies Section */}
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 text-2xl font-semibold text-white"
      >
        Case studies
      </motion.h3>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2"
      >
        {/* Alexa Latency Case Study */}
        <motion.article
          className="group flex h-full flex-col justify-between rounded-2xl bg-white p-6 text-neutral-900 shadow-lg transition"
          variants={fadeInFromLeft}
          whileHover={{ y: -6 }}
        >
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Alexa latency: the cost of waiting</h4>
            <p>
              Slow Alexa responses erode trust and reduce spending across Amazon services. I led a multi-year mixed-methods program to pinpoint device-specific latency thresholds that keep customers engaged.
            </p>
            <p>
              Partnering with Amazon’s Economics team, we proved that meeting those thresholds could unlock 5B+ additional interactions and $1.7B in downstream revenue.
            </p>
          </div>
          <Link
            href="/case-studies/alexa-latency"
            className="mt-6 inline-flex items-center font-semibold text-indigo-600 transition group-hover:text-indigo-500"
          >
            Read the case study →
          </Link>
        </motion.article>

        {/* TV Interface Design Case Study */}
        <motion.article
          className="group flex h-full flex-col justify-between rounded-2xl bg-white p-6 text-neutral-900 shadow-lg transition"
          variants={fadeInFromRight}
          whileHover={{ y: -6 }}
        >
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Designing immersive TV browsing with neuroscience</h4>
            <p>
              Collaborating with Fire TV and Prime Video teams, I combined eye-tracking, fNIRS brain imaging, and qualitative feedback to define UI patterns that reduce cognitive load during content discovery.
            </p>
            <p>
              These principles informed a redesign that cut discovery time by 25% while boosting satisfaction for millions of households.
            </p>
          </div>
          <Link
            href="/case-studies/fire-tv-neuroscience"
            className="mt-6 inline-flex items-center font-semibold text-indigo-600 transition group-hover:text-indigo-500"
          >
            Read the case study →
          </Link>
        </motion.article>
      </motion.div>

    </section>
  );
}

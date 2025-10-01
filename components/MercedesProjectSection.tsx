"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function MercedesProjectSection() {
  const { ref } = useParallax();

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-white shadow-2xl backdrop-blur"
      ref={ref}
    >
      <div id="mercedes" className="absolute -top-16 left-1/2 -translate-x-1/2">
        <LogoBadge
          logoSrc="/assets/benz.png"
          alt="Mercedes-Benz Logo"
          className="w-48 h-auto opacity-70"
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
          <h3 className="text-2xl font-semibold">Vehicle innovation group</h3>
          <p className="text-gray-200">
            Conducted foundational research on passenger experiences in semi-autonomous vehicles and evaluated acoustic comfort in next-gen cabins. Insights guided critical improvements that strengthened passenger trust, comfort, and luxury perception.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="flex flex-col items-center">
          <video
            src="/assets/drive.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="max-h-[500px] w-full rounded-2xl object-cover shadow-xl transition-transform duration-500 hover:scale-105"
          />
          <span className="mt-3 text-center text-sm font-medium text-gray-300">
            Driving Simulator for Lab Research
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
        {/* Trust Case Study */}
        <motion.article
          className="group flex h-full flex-col justify-between rounded-2xl bg-white p-6 text-neutral-900 shadow-lg transition"
          variants={fadeInFromLeft}
          whileHover={{ y: -6 }}
        >
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Building trust in semi-autonomous driving</h4>

            <p>
              Leveraging simulator rides, on-road shadowing, and physiological monitoring, I diagnosed where drivers lost trust in ADAS handoff moments.
            </p>
            <p>
              Co-creating with engineering and interior design teams, we introduced interface cues and haptic feedback that raised trust ratings by ~25%.
            </p>
          </div>
          <Link
            href="/case-studies/mercedes-adas-trust"
            className="mt-6 inline-flex items-center font-semibold text-indigo-600 transition group-hover:text-indigo-500"
          >
            Read the case study →
          </Link>
        </motion.article>

        {/* Acoustic Comfort Case Study */}
        <motion.article
          className="group flex h-full flex-col justify-between rounded-2xl bg-white p-6 text-neutral-900 shadow-lg transition"
          variants={fadeInFromRight}
          whileHover={{ y: -6 }}
        >
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Redefining quiet comfort for luxury interiors</h4>

            <p>
              Using acoustic chamber tests, contextual interviews, and sensory evaluations, I pinpointed ambient noise triggers that broke the premium experience.
            </p>
            <p>
              Our recommendations informed material updates and sound masking strategies that reduced perceived cabin noise by 15%.
            </p>
          </div>
          <Link
            href="/case-studies/mercedes-acoustic-comfort"
            className="mt-6 inline-flex items-center font-semibold text-indigo-600 transition group-hover:text-indigo-500"
          >
            Read the case study →
          </Link>
        </motion.article>
      </motion.div>

    </section>
  );
}


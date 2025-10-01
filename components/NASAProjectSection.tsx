"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import {
  fadeInFromLeft,
  fadeInFromRight,
  fadeInUp,
  staggerContainer,
} from "@/app/utils/animationVariants";

export default function NASAProjectSection() {
  const { ref } = useParallax();

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-white shadow-2xl backdrop-blur"
      ref={ref}
    >
      <div
        id="NASA"
        className="absolute -top-20 left-1/2 -translate-x-1/2"
      >
        <LogoBadge
          logoSrc="/assets/nasa-logo.png"
          alt="NASA Logo"
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
          <h3 className="text-2xl font-semibold">Astronaut experience research</h3>
          <p className="text-gray-200">
            Led four rounds of usability testing with NASA astronauts to evolve medical workstation prototypes for Gateway, the upcoming lunar-orbiting station. My recommendations increased task efficiency by <strong>30%</strong> while lowering perceived workload by 18%.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="flex flex-col items-center">
          <Image
            src="/assets/nasahab2.PNG"
            alt="NASA Gateway Research"
            width={1200}
            height={700}
            className="w-full rounded-2xl object-cover shadow-xl transition-transform duration-500 hover:scale-105"
          />
          <span className="mt-3 text-center text-sm font-medium text-gray-300">
            Used VR to assess performance in reaching and movement tasks.
          </span>
        </motion.div>
      </motion.div>

      {/* Single Expanded Case Study */}
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 text-2xl font-semibold text-white"
      >
        Case study
      </motion.h3>

      <motion.article
        variants={fadeInFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="group flex flex-col gap-4 rounded-2xl bg-white p-8 text-neutral-900 shadow-lg transition hover:-translate-y-1"
      >
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">
            Optimizing NASA Gateway medical workstations for microgravity
          </h4>

          <p>
            Gateway crews must diagnose and treat health issues without real-time ground support. I facilitated VR simulations, ergonomic analyses, and moderated evaluations with astronauts to stress-test workstation concepts under mission timelines and movement constraints.
          </p>
          <p>
            The resulting design blueprint streamlines reach envelopes, clarifies decision support, and supports autonomous medical care—cutting task times by 30% while reducing cognitive load.
          </p>
        </div>

        <Link
          href="/case-studies/nasa-gateway-medical"
          className="inline-flex items-center font-semibold text-indigo-600 transition group-hover:text-indigo-500"
        >
          Read the case study →
        </Link>
      </motion.article>

    </section>
  );
}


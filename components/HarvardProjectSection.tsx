"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function HarvardProjectSection() {
  const { ref } = useParallax();

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-white shadow-2xl backdrop-blur"
      ref={ref}
    >
      <div id="harvard" className="absolute -top-16 left-1/2 -translate-x-1/2">
        <LogoBadge
          logoSrc="/assets/harvard-logo.png"
          alt="Harvard Logo"
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
          <h3 className="text-2xl font-semibold">Clinical neuroscience lab</h3>
          <p className="text-gray-200">
            Conducted fMRI and EEG research on transcutaneous vagus nerve stimulation (tVNS) as a therapy for major depression. Identified biomarkers tied to symptom reduction, influencing clinical protocols and offering safer alternatives to pharmaceuticals.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="flex flex-col items-center">
          <Image
            src="/assets/tVNs.png"
            alt="tVNS Therapy Device"
            width={800}
            height={400}
            className="w-full rounded-2xl object-cover shadow-xl transition-transform duration-500 hover:scale-105"
          />
          <span className="mt-3 text-center text-sm font-medium text-gray-300">
            tVNS Device on Patient (correct vs placebo)
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
            Advancing tVNS therapy as a frontline mental health treatment
          </h4>

          <p>
            Collaborating with Harvard and MIT clinicians, I evaluated tVNS efficacy through controlled trials, combining neuroimaging, physiological monitoring, and patient interviews.
          </p>
          <p>
            The work surfaced biomarkers that predicted a 60% symptom reduction, informing care plans and supporting insurance approvals for non-invasive therapy.
          </p>
        </div>

        <Link
          href="/case-studies/harvard-tvns"
          className="inline-flex items-center font-semibold text-indigo-600 transition group-hover:text-indigo-500"
        >
          Read the case study →
        </Link>
      </motion.article>

    </section>
  );
}

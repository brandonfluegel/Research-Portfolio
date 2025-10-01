"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function UberProjectSection() {
  const { ref } = useParallax();

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-white shadow-2xl backdrop-blur"
      ref={ref}
    >
      <div
        id="uber"
        className="absolute -top-16 left-1/2 -translate-x-1/2"
      >
        <LogoBadge
          logoSrc="/assets/uber-logo.png"
          alt="Uber Logo"
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
          <h3 className="text-2xl font-semibold">Driver experience research</h3>
          <p className="text-gray-200">
            Led international ethnography and contextual inquiries in Brazil to inform the rental driver app and payments experience. The research roadmap drove iterative product refinements that increased rental driver satisfaction and retention by over <strong>15%</strong>.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="flex flex-col items-center">
          <Image
            src="/assets/project-image-2.jpg"
            alt="Uber Research Fieldwork"
            width={1200}
            height={800}
            className="w-full rounded-2xl object-cover shadow-xl transition-transform duration-500 hover:scale-105"
          />
          <span className="mt-3 text-center text-sm font-medium text-gray-300">
            Iterative Design of the Uber Driver App
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
            Designing confident payment flows for Uber rental drivers
          </h4>

          <p>
            Rental drivers in Brazil juggle multiple apps, payment providers, and rental agreements. I mapped their workflows across São Paulo, Salvador, and Belo Horizonte to uncover friction in how they track earnings and remit rental fees.
          </p>
          <p>
            Partnering with local product, design, and operations teams, we prototyped integrated payment journeys and validated them through iterative field testing. The updated flows raised retention by roughly 15% while easing daily financial anxiety for drivers.
          </p>
        </div>

        <Link
          href="/case-studies/uber-rental-payments"
          className="inline-flex items-center font-semibold text-indigo-600 transition group-hover:text-indigo-500"
        >
          Read the case study →
        </Link>
      </motion.article>

    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, staggerContainer } from "@/app/utils/animationVariants";

export default function HarvardProjectSection() {
  const { ref } = useParallax();

  return (
    <section className="relative max-w-5xl mx-auto py-12 px-4 mb-16 md:py-24 md:mb-24" ref={ref}>
      <div id="harvard" className="absolute -top-8 left-1/2 transform -translate-x-1/2 md:-top-12">
        <LogoBadge
          logoSrc="/assets/harvard-logo.png"
          alt="Harvard Logo"
          className="opacity-70 w-32 md:w-60 h-auto brightness-0 invert"
        />
      </div>

      {/* Overview Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-5 rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-8 md:p-10 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">Clinical Neuroscience Lab</h3>
          <p className="text-base md:text-lg text-zinc-300/90 leading-loose">
            Conducted research using advanced brain imaging techniques (fMRI, EEG) to evaluate the effectiveness of transcutaneous vagus nerve stimulation (tVNS) therapy for major depression. Identified brain activity patterns correlating with symptom reduction, influencing clinical practices and improving patient care.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="flex flex-col items-center mb-12 md:mb-0">
          <motion.div className="relative w-full h-auto overflow-hidden rounded-xl shadow-2xl border border-white/10 group">
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1.0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/assets/tVNs.png"
                alt="tVNS Therapy Device"
                width={800}
                height={400}
                className="object-cover w-full h-auto"
              />
            </motion.div>
          </motion.div>
          <span className="mt-3 text-center text-sm font-medium text-zinc-300 block">
            tVNS Device on Patient (correct vs placebo)
          </span>
        </motion.div>
      </motion.div>



    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import {
  fadeInFromLeft,
  fadeInFromRight,
  staggerContainer,
} from "@/app/utils/animationVariants";

export default function NASAProjectSection() {
  const { ref } = useParallax();

  return (
    <section
      className="relative max-w-5xl mx-auto py-12 px-4 mb-16 md:py-24 md:mb-24"
      ref={ref}
    >
      <div id="nasa" className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50 md:-top-20">
        <LogoBadge
          logoSrc="/assets/nasa-logo.png"
          alt="NASA Logo"
          className="w-32 md:w-48 h-auto"
        />
      </div>

      {/* Overview Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-5 rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-8 md:p-10 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">Reducing Cognitive Load on Lunar Gateway</h3>
          <p className="text-base md:text-lg text-zinc-300/90 leading-loose">
            Led four rounds of usability testing with NASA astronauts, informing
            iterative design improvements of medical workstation prototypes for
            Gateway, an upcoming lunar-orbiting station. Increased astronaut task
            efficiency by <strong>30%</strong>.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="flex flex-col h-full w-full mb-12 md:mb-0">
          <motion.div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl border border-white/10 group">
            <motion.div
              className="h-full w-full"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1.0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/assets/nasahab2.PNG"
                alt="NASA Gateway Research"
                width={1200}
                height={700}
                className="rounded-xl shadow-2xl w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
          <span className="mt-3 text-center text-sm font-medium text-black">
            Used VR to assess performance in reaching and movement tasks.
          </span>
        </motion.div>
      </motion.div>



    </section>
  );
}


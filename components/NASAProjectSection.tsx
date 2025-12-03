"use client";

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
      className="relative max-w-5xl mx-auto py-24 px-4 mb-24"
      ref={ref}
    >
      <div
        id="NASA"
        className="absolute -top-20 left-1/2 transform -translate-x-1/2"
      >
        <LogoBadge
          logoSrc="/assets/nasa-logo.png"
          alt="NASA Logo"
          className="opacity-60 w-60 h-auto brightness-200"
        />
      </div>

      {/* Overview Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 grid md:grid-cols-2 gap-10 items-start"
      >
        <motion.div variants={fadeInFromLeft} className="space-y-5 rounded-xl bg-zinc-900/90 border border-white/10 backdrop-blur-md p-8 shadow-2xl">
          <h3 className="text-xl font-bold text-white">NASA: Lunar Gateway Cognitive Safety</h3>
          <p className="text-zinc-200 leading-relaxed">
            Led four rounds of usability testing with NASA astronauts, informing
            iterative design improvements of medical workstation prototypes for
            Gateway, an upcoming lunar-orbiting station. Increased astronaut task
            efficiency by <strong>30%</strong>.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="flex flex-col items-center">
          <motion.div className="relative w-full h-auto overflow-hidden rounded-xl shadow-2xl border border-white/10 group">
            <motion.div
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
                className="object-cover w-full h-auto"
              />
            </motion.div>
          </motion.div>
          <span className="mt-3 text-center text-sm font-medium text-black block">
            Used VR to assess performance in reaching and movement tasks.
          </span>
        </motion.div>
      </motion.div>



    </section>
  );
}


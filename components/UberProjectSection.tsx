"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, staggerContainer } from "@/app/utils/animationVariants";

export default function UberProjectSection() {
  const { ref } = useParallax();

  return (
    <section
      className="relative max-w-5xl mx-auto py-12 px-4 mb-16 md:py-24 md:mb-24"
      ref={ref}
    >
      <div
        id="uber"
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 md:-top-12"
      >
        <LogoBadge
          logoSrc="/assets/uber-logo.png"
          alt="Uber Logo"
          className="w-32 md:w-60 h-auto opacity-100"
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
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">Driver Retention Strategy in Brazil</h3>
          <p className="text-base md:text-lg text-zinc-300/90 leading-loose">
            Conducted international ethnography and contextual inquiry research
            in Brazil that informed the iterative design of the rental driver app
            and payments experience. My research recommendations led to significantly improved driver
            satisfaction, increasing rental driver retention by <strong>15%</strong>.
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
                src="/assets/project-image-2.jpg"
                alt="Uber Research Fieldwork"
                width={1200}
                height={800}
                className="object-cover w-full h-auto"
              />
            </motion.div>
          </motion.div>
          <span className="mt-3 text-center text-sm font-medium text-black">
            Iterative Design of the Uber Driver App
          </span>
        </motion.div>
      </motion.div>



    </section>
  );
}

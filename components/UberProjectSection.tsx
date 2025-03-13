"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoBadge from "@/components/LogoBadge";
import useParallax from "@/app/hooks/useParallax";
import { fadeInFromLeft, fadeInFromRight, fadeInUp, staggerContainer } from "@/app/utils/animationVariants";

export default function UberProjectSection() {
  const { ref } = useParallax();

  return (
    <section
      className="relative max-w-5xl mx-auto py-20 px-3 -mt-8 scale-90"
      ref={ref}
    >
      <div
        id="uber"
        className="absolute -top-20 left-1/2 transform -translate-x-1/2"
      >
        <LogoBadge
          logoSrc="/assets/uber-logo.png"
          alt="Uber Logo"
          className="opacity-90 w-60 h-auto"
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
        <motion.div variants={fadeInFromLeft} className="space-y-5 text-black">
          <h3 className="text-xl font-bold">Driver Experience Research</h3>
          <p>
            Conducted international ethnography and contextual inquiry research
            in Brazil that informed the iterative design of the rental driver app
            and payments experience. My research recomendations led to significantly improved driver
            satisfaction, increasing rental driver retention by over <strong>30%</strong>.
          </p>
        </motion.div>

        <motion.div variants={fadeInFromRight} className="flex flex-col items-center">
          <Image
            src="/assets/project-image-2.jpg"
            alt="Uber Research Fieldwork"
            width={1200}
            height={800}
            className="rounded-xl object-cover w-full shadow-xl hover:scale-105 transition-transform duration-500"
          />
          <span className="mt-3 text-center text-sm font-medium text-black">
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
  className="text-2xl font-bold text-left mt-16 mb-6 text-black"
>
  Case Study
</motion.h3>

<motion.div
  variants={fadeInFromLeft}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="w-full"
>
  <motion.div
    className="case-study-container rounded-xl shadow-lg p-8 cursor-pointer"
    whileHover={{ scale: 1.02, y: -4 }}
    style={{ color: "#000000" }}
  >
    <h4 className="text-xl font-bold">
      Enhancing Payment Experiences for Uber Rental Drivers
    </h4>

    <div className="space-y-3 mt-3">
      <p>
        Driving for Uber in Brazil often means renting vehicles, a unique setup that introduces specific payment challenges. Traveling across three Brazilian cities, I documented driver pain points using ethnographic methods, contextual inquiries, and moderated usability testing.
      </p>
      <p>
        Collaborating closely with Uber’s local product managers, design team, translators, and videographers, my research informed the redesign of the driver app to seamlessly integrate earnings management and rental payments.
      </p>
      <p>
        This integrated approach boosted driver retention rates by over 30% and significantly improved driver satisfaction scores, directly contributing to Uber’s market growth in Brazil.
      </p>
    </div>
  </motion.div>
</motion.div>

    </section>
  );
}

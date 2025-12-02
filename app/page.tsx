"use client";

import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import AnimatedText from "@/components/AnimatedText";
import ScrollToTop from "@/components/ScrollToTop";
import AmazonProjectSection from "@/components/AmazonProjectSection";
import UberProjectSection from "@/components/UberProjectSection";
import NASAProjectSection from "@/components/NASAProjectSection";
import MercedesProjectSection from "@/components/MercedesProjectSection";
import HarvardProjectSection from "@/components/HarvardProjectSection";
import ScrollIndicator from "@/components/ScrollIndicator";
import useSmoothScroll from "@/app/hooks/useSmoothScroll";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animationVariants";

export default function Home() {
  useSmoothScroll("nav", 120);

  return (
    <main className="relative min-h-screen cursor-none px-4 sm:px-8 bg-gradient-to-b from-black via-white to-black overflow-hidden">
      <Cursor />
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center min-h-screen px-6 pt-32 pb-12 -mt-[90px]">
        <div className="max-w-5xl w-full mx-auto relative z-10 px-2 sm:px-4 md:px-8 flex flex-col items-center text-center">
          <AnimatedText
            text="Brandon Fluegel, PhD"
            className="hero-header font-bold text-white text-5xl sm:text-6xl mb-2"
          />

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-gray-300 text-2xl sm:text-3xl font-medium mt-2"
          >
            Staff Product Researcher | AI Strategy | Cognitive Science
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="text-white text-lg sm:text-xl max-w-2xl leading-relaxed mt-8"
          >
            Translating human factors into billion-dollar product outcomes
          </motion.div>

          <div className="mt-16">
            <ScrollIndicator />
          </div>
        </div>
      </section>

      {/* Project Sections */}
      <section className="max-w-6xl mx-auto mt-8">
        <AmazonProjectSection />

        <div className="my-12">
          <UberProjectSection />
        </div>

        <div className="my-12">
          <NASAProjectSection />
        </div>

        <div className="my-12">
          <MercedesProjectSection />
        </div>

        <div className="my-12">
          <HarvardProjectSection />
        </div>
      </section>
    </main>
  );
}

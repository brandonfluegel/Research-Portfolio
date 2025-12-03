"use client";

import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SlingProjectSection from "@/components/SlingProjectSection";
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
      <section className="relative w-full flex flex-col items-center justify-center min-h-[50vh] md:min-h-[85vh] pt-44 pb-12 md:pt-0 md:pb-0 px-4">
        <div className="w-full flex flex-col items-center justify-center mx-auto relative z-10 px-2 sm:px-4 md:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="font-bold leading-[1.2] text-center mb-6 text-[clamp(2rem,4vw,4rem)] bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
          >
            Human Factors PhD <br /> Designing the Future of UX + AI
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="font-medium text-zinc-400 text-center px-4 text-[clamp(1.1rem,2vw,1.5rem)] mt-4 max-w-sm md:max-w-2xl mx-auto"
            style={{ textWrap: "balance" }}
          >
            Translating cognitive science into monetizable product strategy
          </motion.div>

          <div className="mt-8">
            <ScrollIndicator />
          </div>
        </div>
      </section>

      {/* Project Sections */}
      <section className="max-w-6xl mx-auto mt-4">
        <div className="mb-12">
          <SlingProjectSection />
        </div>

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

      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}

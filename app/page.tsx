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
      <section className="relative flex flex-col justify-center items-center min-h-[50vh] px-6 pt-32 md:pt-48 pb-6 -mt-[90px]">
        <div className="w-full flex flex-col items-center justify-center max-w-5xl mx-auto relative z-10 px-2 sm:px-4 md:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="font-bold leading-[1.1] text-center mb-6 text-[clamp(2.5rem,5vw,5rem)] mx-auto bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
            style={{ textWrap: "balance" }}
          >
            Human Factors PhD <br /> Designing Trustworthy AI
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

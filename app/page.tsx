"use client";

import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import TrustNav from "@/components/TrustNav"; 
import SlingProjectSection from "@/components/SlingProjectSection";
import AmazonProjectSection from "@/components/AmazonProjectSection";
import UberProjectSection from "@/components/UberProjectSection";
import NASAProjectSection from "@/components/NASAProjectSection";
import MercedesProjectSection from "@/components/MercedesProjectSection";
// import HarvardProjectSection from "@/components/HarvardProjectSection"; 
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
      <section className="relative w-full flex flex-col items-center justify-center min-h-[50vh] md:min-h-[65vh] pt-44 pb-12 md:pt-40 md:pb-0 px-4">
        <div className="w-full flex flex-col items-center justify-center mx-auto relative z-10 px-2 sm:px-4 md:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="font-bold leading-[1.2] text-center mb-6 text-[clamp(2rem,4vw,4rem)] bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
          >
            Human Factors PhD <br /> Designing the Future of UX + AI
          </motion.div>

          {/* UPDATED: Forced Single Line */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            // 1. Removed 'max-w-sm' (which squeezed it).
            // 2. Added 'md:whitespace-nowrap' to force single line on desktop.
            className="font-medium text-zinc-400 text-center px-4 text-[clamp(1.1rem,2vw,1.5rem)] mt-4 w-full md:max-w-4xl mx-auto md:whitespace-nowrap"
          >
            Translating cognitive science into monetizable product strategy
          </motion.div>

          <div className="mt-8">
            <ScrollIndicator />
          </div>
        </div>
      </section>

      {/* Trust Navigation Bar */}
      <TrustNav />

      {/* Project Sections */}
      <section className="max-w-6xl mx-auto mt-4">
        
        <div id="sling-section" className="mb-12">
          <SlingProjectSection />
        </div>

        <div id="amazon-section">
          <AmazonProjectSection />
        </div>

        <div id="uber-section" className="my-12">
          <UberProjectSection />
        </div>

        <div id="nasa-section" className="my-12">
          <NASAProjectSection />
        </div>

        <div id="mercedes-section" className="my-12">
          <MercedesProjectSection />
        </div>
      
      </section>

      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}
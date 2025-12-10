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
import ScrollIndicator from "@/components/ScrollIndicator";
import useSmoothScroll from "@/app/hooks/useSmoothScroll";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animationVariants";

export default function Home() {
  useSmoothScroll("nav", 120);

  return (
    <main className="relative min-h-screen cursor-none px-4 sm:px-8 bg-black overflow-hidden selection:bg-white/20">
      <Cursor />
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      {/* FIX: Reduced pt-44 to pt-28 on mobile for tighter spacing */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-[50vh] pt-28 pb-8 md:pt-48 md:pb-0 px-4">
        <div className="w-full flex flex-col items-center justify-center mx-auto relative z-10 px-2 sm:px-4 md:px-8">
          
          {/* TAGLINE */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            // FIX: text-4xl on mobile (instead of clamp default) prevents the awkward "PhD." orphan
            className="font-bold leading-[1.1] tracking-tight text-center mb-6 md:mb-8 text-4xl md:text-[clamp(2.5rem,5vw,4.5rem)] text-white"
          >
            Human Factors PhD. <br className="hidden md:block" /> 
            <span className="text-zinc-400 block md:inline mt-2 md:mt-0">Designing the Future of UX + AI.</span>
          </motion.div>

          {/* SUB-HEADER */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="font-medium text-zinc-200 text-center px-2 text-base md:text-[clamp(1rem,1.5vw,1.25rem)] w-full md:max-w-2xl mx-auto leading-relaxed"
          >
            Translating cognitive science into monetizable product strategy.
          </motion.div>

          <div className="mt-8 md:mt-12 opacity-60 scale-75 md:scale-100">
            <ScrollIndicator />
          </div>
        </div>
      </section>

      {/* Trust Navigation Bar */}
      <TrustNav />

      {/* Project Sections */}
      <section className="max-w-6xl mx-auto mt-8 md:mt-12 space-y-24 md:space-y-32">
        
        <div id="amazon-section">
          <AmazonProjectSection />
        </div>

        <div id="nasa-section">
          <NASAProjectSection />
        </div>

        <div id="uber-section">
          <UberProjectSection />
        </div>

        <div id="mercedes-section">
          <MercedesProjectSection />
        </div>
      
        <div id="sling-section">
          <SlingProjectSection />
        </div>

      </section>

      <div className="mt-32 border-t border-white/10">
        <Footer />
      </div>
    </main>
  );
}
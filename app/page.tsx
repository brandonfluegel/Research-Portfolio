"use client";

// REMOVED: import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import TrustNav from "@/components/TrustNav"; 
// Dynamic Imports for Code Splitting
import dynamic from "next/dynamic";
const SlingProjectSection = dynamic(() => import("@/components/SlingProjectSection"), { loading: () => <div className="h-screen bg-black" /> });
const AmazonProjectSection = dynamic(() => import("@/components/AmazonProjectSection"), { loading: () => <div className="h-screen bg-black" /> });
const UberProjectSection = dynamic(() => import("@/components/UberProjectSection"), { loading: () => <div className="h-screen bg-black" /> });
const NASAProjectSection = dynamic(() => import("@/components/NASAProjectSection"), { loading: () => <div className="h-screen bg-black" /> });
const MercedesProjectSection = dynamic(() => import("@/components/MercedesProjectSection"), { loading: () => <div className="h-screen bg-black" /> });

import ScrollIndicator from "@/components/ScrollIndicator";
import useSmoothScroll from "@/app/hooks/useSmoothScroll";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animationVariants";

export default function Home() {
  useSmoothScroll("nav", 120);

  return (
    // REMOVED: 'cursor-none' from className
    <main className="relative min-h-screen px-4 sm:px-8 bg-black overflow-hidden selection:bg-white/20">
      {/* REMOVED: <Cursor /> */}
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-[50vh] md:min-h-[65vh] pt-36 pb-8 md:pt-48 md:pb-0 px-4">
        <div className="w-full flex flex-col items-center justify-center mx-auto relative z-10 px-2 sm:px-4 md:px-8">
          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="font-bold leading-[1.1] tracking-tight text-center mb-4 md:mb-6 text-xl md:text-[clamp(2rem,4vw,3.6rem)] text-white text-balance"
          >
            Human Factors PhD <br className="hidden md:block" /> 
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="font-medium text-zinc-300 text-center px-4 text-sm md:text-[clamp(1rem,1.5vw,1.25rem)] w-full max-w-sm md:max-w-2xl mx-auto leading-relaxed text-balance"
          >
            Translating cognitive science into monetizable product strategy
          </motion.div>

          <div className="mt-8 md:mt-12 opacity-60 scale-75 md:scale-100">
            <ScrollIndicator />
          </div>
        </div>
      </section>

      <TrustNav />

      <section className="max-w-6xl mx-auto mt-32 md:mt-40 space-y-32 md:space-y-48">
        <div id="amazon-section"><AmazonProjectSection /></div>
        <div id="sling-section"><SlingProjectSection /></div>
        <div id="nasa-section"><NASAProjectSection /></div>
        <div id="uber-section"><UberProjectSection /></div>
        <div id="mercedes-section"><MercedesProjectSection /></div>
      </section>

      <div className="mt-32 border-t border-white/10">
        <Footer />
      </div>
    </main>
  );
}
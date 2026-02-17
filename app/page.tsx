"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import TrustNav from "@/components/sections/TrustNav"; 
// Dynamic Imports for Code Splitting
import dynamic from "next/dynamic";
const SlingProjectSection = dynamic(() => import("@/components/sections/SlingProjectSection"), { loading: () => <div className="h-screen bg-black" /> });
const AmazonProjectSection = dynamic(() => import("@/components/sections/AmazonProjectSection"), { loading: () => <div className="h-screen bg-black" /> });
const UberProjectSection = dynamic(() => import("@/components/sections/UberProjectSection"), { loading: () => <div className="h-screen bg-black" /> });
const NASAProjectSection = dynamic(() => import("@/components/sections/NASAProjectSection"), { loading: () => <div className="h-screen bg-black" /> });
const MercedesProjectSection = dynamic(() => import("@/components/sections/MercedesProjectSection"), { loading: () => <div className="h-screen bg-black" /> });

import ScrollIndicator from "@/components/ui/ScrollIndicator";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SectionDivider from "@/components/ui/SectionDivider";
import useActiveSection from "@/hooks/useActiveSection";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils/animationVariants";

export default function Home() {
  const activeSection = useActiveSection();

  return (
    <main className="relative min-h-screen px-4 sm:px-8 bg-black overflow-hidden selection:bg-white/20">
      <ScrollProgress />
      <Navbar activeSection={activeSection} />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-[60svh] sm:min-h-[60svh] md:min-h-[65svh] lg:min-h-[70svh] pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-8 md:pb-0 px-4">
        <div className="w-full flex flex-col items-center justify-center mx-auto relative z-10 px-2 sm:px-4 md:px-8">
          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="font-bold leading-[1.08] tracking-tight text-center mb-4 sm:mb-5 md:mb-6 text-[clamp(1.75rem,6vw,2.25rem)] sm:text-[clamp(2rem,5vw,2.75rem)] md:text-[clamp(2.5rem,4.5vw,4rem)] lg:text-[clamp(3rem,4vw,4.5rem)] text-white text-balance"
          >
            Human Factors PhD
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="font-medium text-zinc-300 text-center px-2 text-[clamp(0.875rem,3vw,1rem)] sm:text-[clamp(0.9rem,2.5vw,1.1rem)] md:text-[clamp(1rem,1.8vw,1.35rem)] lg:text-[clamp(1.1rem,1.5vw,1.5rem)] w-full max-w-[85vw] sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed text-balance"
          >
            Translating cognitive science into monetizable product strategy
          </motion.div>

          <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 opacity-60 scale-90 md:scale-100">
            <ScrollIndicator />
          </div>
        </div>
      </section>

      <TrustNav activeSection={activeSection} />

      <section className="max-w-6xl mx-auto mt-32 md:mt-40 space-y-16 md:space-y-24">
        <div id="amazon-section"><AmazonProjectSection /></div>
        
        <SectionDivider 
          label="From AI voice systems → Product strategy"
          description="Applying psychophysics to monetization at scale"
        />
        
        <div id="sling-section"><SlingProjectSection /></div>
        
        <SectionDivider 
          label="From product strategy → Global operations"
          description="Taking cognitive load reduction to emerging markets"
        />
        
        <div id="uber-section"><UberProjectSection /></div>
        
        <SectionDivider 
          label="From global ops → Mission-critical systems"
          description="Where cognitive error costs lives, not conversions"
        />
        
        <div id="nasa-section"><NASAProjectSection /></div>
        
        <SectionDivider 
          label="From space systems → Autonomous vehicles"
          description="Translating trust frameworks to human-machine interfaces"
        />
        
        <div id="mercedes-section"><MercedesProjectSection /></div>
      </section>

      <div className="mt-32 border-t border-white/10">
        <Footer />
      </div>
    </main>
  );
}
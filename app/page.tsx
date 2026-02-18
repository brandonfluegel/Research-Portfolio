"use client";

import { Suspense, lazy, useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import TrustNav from "@/components/sections/TrustNav"; 
const SlingProjectSection = lazy(() => import("@/components/sections/SlingProjectSection"));
const AmazonProjectSection = lazy(() => import("@/components/sections/AmazonProjectSection"));
const UberProjectSection = lazy(() => import("@/components/sections/UberProjectSection"));
const NASAProjectSection = lazy(() => import("@/components/sections/NASAProjectSection"));
const MercedesProjectSection = lazy(() => import("@/components/sections/MercedesProjectSection"));

import ScrollIndicator from "@/components/ui/ScrollIndicator";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SectionDivider from "@/components/ui/SectionDivider";
import useActiveSection from "@/hooks/useActiveSection";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/utils/animationVariants";

function SectionFallback() {
  return <div className="h-[65vh] rounded-2xl border border-white/5 bg-zinc-950/60" aria-hidden="true" />;
}

function DeferredSection({
  id,
  children,
  rootMargin = "420px 0px",
}: {
  id: string;
  children: React.ReactNode;
  rootMargin?: string;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = mountRef.current;
    if (!node || shouldRender) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div id={id} ref={mountRef} className="deferred-section">
      {shouldRender ? children : <SectionFallback />}
    </div>
  );
}

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

          <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20">
            <ScrollIndicator />
          </div>
        </div>
      </section>

      <TrustNav activeSection={activeSection} />

      <section className="content-shell section-stack mt-32 md:mt-40">
        <DeferredSection id="amazon-section" rootMargin="500px 0px">
          <Suspense fallback={<SectionFallback />}>
            <AmazonProjectSection />
          </Suspense>
        </DeferredSection>
        
        <SectionDivider 
          label="From AI voice systems → Product strategy"
          description="Applying psychophysics to monetization at scale"
        />
        
        <DeferredSection id="sling-section" rootMargin="500px 0px">
          <Suspense fallback={<SectionFallback />}>
            <SlingProjectSection />
          </Suspense>
        </DeferredSection>
        
        <SectionDivider 
          label="From product strategy → Global operations"
          description="Taking cognitive load reduction to emerging markets"
        />
        
        <DeferredSection id="uber-section" rootMargin="500px 0px">
          <Suspense fallback={<SectionFallback />}>
            <UberProjectSection />
          </Suspense>
        </DeferredSection>
        
        <SectionDivider 
          label="From global ops → Mission-critical systems"
          description="Where cognitive error costs lives, not conversions"
        />
        
        <DeferredSection id="nasa-section" rootMargin="500px 0px">
          <Suspense fallback={<SectionFallback />}>
            <NASAProjectSection />
          </Suspense>
        </DeferredSection>
        
        <SectionDivider 
          label="From space systems → Autonomous vehicles"
          description="Translating trust frameworks to human-machine interfaces"
        />
        
        <DeferredSection id="mercedes-section" rootMargin="500px 0px">
          <Suspense fallback={<SectionFallback />}>
            <MercedesProjectSection />
          </Suspense>
        </DeferredSection>
      </section>

      <div className="mt-32 border-t border-white/10">
        <Footer />
      </div>
    </main>
  );
}
"use client";

import { Suspense, lazy, useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import TrustNav from "@/components/sections/TrustNav";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SectionDivider from "@/components/ui/SectionDivider";
import useActiveSection from "@/hooks/useActiveSection";

const SlingProjectSection = lazy(() => import("@/components/sections/projects/SlingProjectSection"));
const AmazonProjectSection = lazy(() => import("@/components/sections/projects/AmazonProjectSection"));
const UberProjectSection = lazy(() => import("@/components/sections/projects/UberProjectSection"));
const NASAProjectSection = lazy(() => import("@/components/sections/projects/NASAProjectSection"));
const MercedesProjectSection = lazy(() => import("@/components/sections/projects/MercedesProjectSection"));
const FrameworkSection = lazy(() => import("@/components/sections/FrameworkSection"));

// In production, React.lazy() chunks are separate network requests. If the user
// clicks a nav item before a chunk is fetched, the Suspense boundary shows its
// fallback (stub heights) while the network request completes. Our scroll
// stability poll fires during this period — scrollHeight is stable at stub
// heights — and scrollIntoView lands in the wrong section.
//
// Fix: kick off all chunk fetches at page idle so they are cached by the time
// any nav click arrives. React.lazy reuses the cached Promise, so Suspense
// resolves synchronously with no fallback period and real heights are immediately
// available for the scroll position calculation.
function usePreloadSectionChunks() {
  useEffect(() => {
    const preload = () => {
      import("@/components/sections/projects/AmazonProjectSection");
      import("@/components/sections/projects/SlingProjectSection");
      import("@/components/sections/projects/UberProjectSection");
      import("@/components/sections/projects/NASAProjectSection");
      import("@/components/sections/projects/MercedesProjectSection");
      import("@/components/sections/FrameworkSection");
    };
    if (typeof requestIdleCallback !== "undefined") {
      requestIdleCallback(preload);
    } else {
      setTimeout(preload, 300);
    }
  }, []);
}

function SectionFallback({ minHeightClass }: { minHeightClass: string }) {
  return (
    <div
      className={`${minHeightClass} rounded-2xl border border-white/5 bg-zinc-950/60`}
      aria-hidden="true"
    />
  );
}

function DeferredSection({
  id,
  children,
  rootMargin = "260px 0px",
  minHeightClass = "min-h-[1200px] md:min-h-[1500px]",
}: {
  id: string;
  children: React.ReactNode;
  rootMargin?: string;
  minHeightClass?: string;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const handleForceRender = () => {
      setShouldRender(true);
    };
    window.addEventListener("force-render-all", handleForceRender);
    return () => window.removeEventListener("force-render-all", handleForceRender);
  }, []);

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
      {shouldRender ? children : <SectionFallback minHeightClass={minHeightClass} />}
    </div>
  );
}

import { scrollToSectionId } from "@/lib/utils/scroll";

export default function HomeClientSections() {
  const activeSection = useActiveSection();
  usePreloadSectionChunks();

  // Handle direct link with hash (e.g. /#agent-trust)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    // Small delay to let initial render settle, then force-render and scroll
    const timer = setTimeout(() => {
      scrollToSectionId(hash);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar activeSection={activeSection} />
      <ScrollToTop />

      <TrustNav activeSection={activeSection} />

      <section className="content-shell section-stack mt-32 md:mt-40">
        <DeferredSection
          id="amazon-section"
          rootMargin="320px 0px"
          minHeightClass="min-h-[1500px] md:min-h-[2100px]"
        >
          <Suspense fallback={<SectionFallback minHeightClass="min-h-[1500px] md:min-h-[2100px]" />}>
            <AmazonProjectSection />
          </Suspense>
        </DeferredSection>

        <SectionDivider
          label="From AI voice systems → Product strategy"
          description="Applying psychophysics to monetization at scale"
        />

        <DeferredSection
          id="sling-section"
          rootMargin="320px 0px"
          minHeightClass="min-h-[1400px] md:min-h-[2000px]"
        >
          <Suspense fallback={<SectionFallback minHeightClass="min-h-[1400px] md:min-h-[2000px]" />}>
            <SlingProjectSection />
          </Suspense>
        </DeferredSection>

        <SectionDivider
          label="From product strategy → Global operations"
          description="Taking cognitive load reduction to emerging markets"
        />

        <DeferredSection
          id="uber-section"
          rootMargin="320px 0px"
          minHeightClass="min-h-[1050px] md:min-h-[1250px]"
        >
          <Suspense fallback={<SectionFallback minHeightClass="min-h-[1050px] md:min-h-[1250px]" />}>
            <UberProjectSection />
          </Suspense>
        </DeferredSection>

        <SectionDivider
          label="From global ops → Mission-critical systems"
          description="Where cognitive error costs lives, not conversions"
        />

        <DeferredSection
          id="nasa-section"
          rootMargin="320px 0px"
          minHeightClass="min-h-[1250px] md:min-h-[1500px]"
        >
          <Suspense fallback={<SectionFallback minHeightClass="min-h-[1250px] md:min-h-[1500px]" />}>
            <NASAProjectSection />
          </Suspense>
        </DeferredSection>

        <SectionDivider
          label="From space systems → Autonomous vehicles"
          description="Translating trust frameworks to human-machine interfaces"
        />

        <DeferredSection
          id="mercedes-section"
          rootMargin="320px 0px"
          minHeightClass="min-h-[1100px] md:min-h-[1300px]"
        >
          <Suspense fallback={<SectionFallback minHeightClass="min-h-[1100px] md:min-h-[1300px]" />}>
            <MercedesProjectSection />
          </Suspense>
        </DeferredSection>

        <SectionDivider
          label="From applications → Global standards"
          description="Evolving established models into modern agent trust frameworks"
        />

        <DeferredSection
          id="agent-trust"
          rootMargin="320px 0px"
          minHeightClass="min-h-[1100px] md:min-h-[1300px]"
        >
          <Suspense fallback={<SectionFallback minHeightClass="min-h-[1100px] md:min-h-[1300px]" />}>
            <FrameworkSection />
          </Suspense>
        </DeferredSection>
      </section>

      <div className="mt-32 border-t border-white/10">
        <Footer />
      </div>
    </>
  );
}
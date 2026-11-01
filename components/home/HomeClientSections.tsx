"use client";

import { Fragment, Suspense, lazy, useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SectionDivider from "@/components/ui/SectionDivider";
import useActiveSection from "@/hooks/useActiveSection";
import { scrollToSectionId } from "@/lib/utils/scroll";

const SECTION_IMPORTERS = {
  "amazon-section": () => import("@/components/sections/projects/AmazonProjectSection"),
  "agent-trust": () => import("@/components/sections/FrameworkSection"),
  "nasa-section": () => import("@/components/sections/projects/NASAProjectSection"),
  "mercedes-section": () => import("@/components/sections/projects/MercedesProjectSection"),
} as const;

const preloadAllSections = () =>
  Promise.all(Object.values(SECTION_IMPORTERS).map((load) => load()));

const HOME_SECTIONS: Array<{
  id: keyof typeof SECTION_IMPORTERS;
  Component: React.LazyExoticComponent<React.ComponentType>;
  minHeightClass: string;
  dividerAfter?: { label: string; description: string };
}> = [
  {
    id: "amazon-section",
    Component: lazy(SECTION_IMPORTERS["amazon-section"]),
    minHeightClass: "min-h-[1500px] md:min-h-[2100px]",
    dividerAfter: {
      label: "From applications → Global standards",
      description: "Evolving established models into modern Human-AI trust frameworks",
    },
  },
  {
    id: "agent-trust",
    Component: lazy(SECTION_IMPORTERS["agent-trust"]),
    minHeightClass: "min-h-[1100px] md:min-h-[1300px]",
    dividerAfter: {
      label: "From AI systems → Mission-critical systems",
      description: "Where cognitive error costs lives, not conversions",
    },
  },
  {
    id: "nasa-section",
    Component: lazy(SECTION_IMPORTERS["nasa-section"]),
    minHeightClass: "min-h-[1250px] md:min-h-[1500px]",
    dividerAfter: {
      label: "From space systems → Autonomous vehicles",
      description: "Translating trust frameworks to human-machine interfaces",
    },
  },
  {
    id: "mercedes-section",
    Component: lazy(SECTION_IMPORTERS["mercedes-section"]),
    minHeightClass: "min-h-[1100px] md:min-h-[1300px]",
  },
];

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
    if (typeof requestIdleCallback !== "undefined") {
      requestIdleCallback(() => {
        void preloadAllSections();
      });
    } else {
      setTimeout(() => {
        void preloadAllSections();
      }, 300);
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
  rootMargin = "320px 0px",
  minHeightClass = "min-h-[1200px] md:min-h-[1500px]",
}: {
  id: string;
  children: React.ReactNode;
  rootMargin?: string;
  minHeightClass?: string;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const fallback = <SectionFallback minHeightClass={minHeightClass} />;

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
      {shouldRender ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </div>
  );
}

export default function HomeClientSections() {
  const activeSection = useActiveSection();
  usePreloadSectionChunks();

  // Handle direct link with hash (e.g. /#agent-trust)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    // Force all lazy chunks to load immediately, then scroll once they resolve.
    // On mobile, requestIdleCallback preloading may not have fired yet.
    void preloadAllSections().then(() => {
      scrollToSectionId(hash);
    });
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar activeSection={activeSection} />
      <ScrollToTop />

      <div className="w-full max-w-6xl mx-auto mb-8 md:mb-16 mt-0">
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-6 md:mb-8"></div>
      </div>

      <section className="content-shell section-stack mt-16 md:mt-20">
        {HOME_SECTIONS.map(({ id, Component, minHeightClass, dividerAfter }) => (
          <Fragment key={id}>
            <DeferredSection id={id} minHeightClass={minHeightClass}>
              <Component />
            </DeferredSection>
            {dividerAfter && (
              <SectionDivider
                label={dividerAfter.label}
                description={dividerAfter.description}
              />
            )}
          </Fragment>
        ))}
      </section>

      <Footer />
    </>
  );
}
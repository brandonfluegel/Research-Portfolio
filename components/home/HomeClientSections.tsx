// v3 - Winter 2026
"use client";

import AmazonProjectSection from "@/components/sections/projects/AmazonProjectSection";
import NASAProjectSection from "@/components/sections/projects/NASAProjectSection";
import MercedesProjectSection from "@/components/sections/projects/MercedesProjectSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SectionDivider from "@/components/ui/SectionDivider";

export default function HomeClientSections() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />

      <div className="w-full max-w-6xl mx-auto mb-8 md:mb-16 mt-0">
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-6 md:mb-8"></div>
      </div>

      <section className="content-shell section-stack mt-0">
        <div id="amazon-section" className="deferred-section">
          <AmazonProjectSection />
        </div>
        <SectionDivider label="From consumer AI → Mission-critical systems" />
        <div id="nasa-section" className="deferred-section">
          <NASAProjectSection />
        </div>
        <SectionDivider
          label="From space systems → Autonomous vehicles"
          description="Translating trust frameworks to human-machine interfaces"
        />
        <div id="mercedes-section" className="deferred-section">
          <MercedesProjectSection />
        </div>
        <SectionDivider
          label="From applications → Global standards"
          description="Evolving established models into modern Human-AI trust frameworks"
        />
        <div id="agent-trust" className="deferred-section">
          <FrameworkSection />
        </div>
      </section>
    </>
  );
}

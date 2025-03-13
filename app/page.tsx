"use client";

import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import AnimatedText from "@/components/AnimatedText";
import ScrollToTop from "@/components/ScrollToTop";
import AmazonProjectSection from "@/components/AmazonProjectSection";
import UberProjectSection from "@/components/UberProjectSection";
import NASAProjectSection from "@/components/NASAProjectSection";
import MercedesProjectSection from "@/components/MercedesProjectSection";
import HarvardProjectSection from "@/components/HarvardProjectSection";
import ScrollIndicator from "@/components/ScrollIndicator";
import useSmoothScroll from "@/app/hooks/useSmoothScroll";

export default function Home() {
  useSmoothScroll('nav', 120); // clearly set offset as needed

  return (
    <main className="relative min-h-screen cursor-none px-4 sm:px-8 bg-gradient-to-b from-black via-white to-black overflow-hidden">
      <Cursor />
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
<section className="relative flex flex-col justify-center items-start min-h-screen px-6 pt-32 pb-12 -mt-[90px]">
  <div className="max-w-3xl w-full mx-auto relative z-10 px-2 sm:px-4 md:px-8">
    <AnimatedText
      text="Thanks for being here!"
      className="text-base sm:text-lg md:text-3xl font-semibold mb-4 text-white text-center whitespace-nowrap"
    />

    <div className="text-white text-base sm:text-lg md:text-xl leading-relaxed text-justify">
      <p>
        Blending scientific rigor with creative storytelling, my mixed-methods research guides the design of delightful, human-centered products. Along with six years of industry experience, I earned my Ph.D. in Human Factors Psychology in 2020.
      </p>
      <ScrollIndicator />
    </div>
  </div>
</section>




      {/* Project Sections */}
      <section className="max-w-6xl mx-auto mt-8">
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
    </main>
  );
}

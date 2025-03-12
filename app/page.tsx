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

export default function Home() {
  return (
    <main className="relative min-h-screen cursor-none px-4 sm:px-8 bg-gradient-to-b from-black via-white to-black overflow-hidden">
      <Cursor />
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
<section className="relative flex flex-col justify-center items-center min-h-screen pt-12 sm:pt-24">
  <div className="max-w-4xl mx-auto px-4 relative z-10">
    <AnimatedText
      text="Hey, thanks for being here!"
      className="text-2xl md:text-4xl font-semibold text-center mb-6 text-white"
    />

    <div className="text-white text-base sm:text-xl leading-relaxed text-justify">
      <p>
        Blending scientific rigor with creative storytelling, my mixed-methods research guides the design of delightful, human-centered products. Prior to entering tech, I earned my Ph.D. in Human Factors Psychology. This portfolio captures my research experiences:
      </p>
    </div>
  </div>
</section>



      {/* Project Sections */}
      <section className="max-w-6xl mx-auto mt-8">
        <AmazonProjectSection />

        <div className="my-24">
          <UberProjectSection />
        </div>

        <div className="my-24">
          <NASAProjectSection />
        </div>

        <div className="my-24">
          <MercedesProjectSection />
        </div>

        <div className="my-24">
          <HarvardProjectSection />
        </div>
      </section>
    </main>
  );
}

"use client";

import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import AnimatedText from "@/components/AnimatedText";
import ScrollToTop from "@/components/ScrollToTop";
import ProfileImage from "@/components/ProfileImage";
import AmazonProjectSection from "@/components/AmazonProjectSection";
import UberProjectSection from "@/components/UberProjectSection";
import NASAProjectSection from "@/components/NASAProjectSection";
import MercedesProjectSection from "@/components/MercedesProjectSection";
import HarvardProjectSection from "@/components/HarvardProjectSection";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <main className="relative min-h-screen cursor-none px-4 sm:px-8 bg-gradient-to-b from-black via-white to-black overflow-hidden">
      <Cursor />
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center min-h-screen -mt-[90px]">
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedText
            text="Hey, thanks for being here!"
            className="text-2xl md:text-4xl font-semibold text-center mb-6"
          />

          <div className="text-gray-700 text-xl sm:text-2xl leading-relaxed text-justify space-y-4">
            <p>
              This portfolio captures my research experiences. Blending scientific rigor with creative storytelling, my mixed-methods research guides product and design teams to uncover hidden opportunities and build delightful, impactful products. Prior to entering tech, I earned my Ph.D. in Human Factors Psychology with a focus in visual attention.
            </p>
          </div>
        </div>

        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/3 opacity-70 pointer-events-none">
          <ProfileImage />
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="flex justify-center -mb-16">
        <ScrollIndicator />
      </div>

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

      <ScrollToTop />
    </main>
  );
}

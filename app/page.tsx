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
            text="Welcome to My Research Portfolio"
            className="text-2xl md:text-4xl font-semibold text-center mb-6"
          />

          <div className="text-gray-300 text-xl sm:text-2xl leading-relaxed text-justify space-y-4">
            <p>Hey, I’m Brandon, thanks for being here!</p>
            <p>
              I am passionate about creating experiences that society can enjoy. My research explores the cognitive strengths and limits of humans to help guide the design of complex consumer products and technology. Over the past 10 years, my experiences at Amazon, Uber, NASA, and Mercedes-Benz have allowed me to blend scientific rigor with creative storytelling, helping product and design teams uncover hidden opportunities and build delightful, impactful products. Prior to entering tech, I earned my Ph.D. in Human Factors Psychology.
            </p>
          </div>
        </div>

        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/3 opacity-70 pointer-events-none">
          <ProfileImage />
        </div>
      </section>

      {/* Project Sections */}
      <section className="max-w-6xl mx-auto">
        <div className="my-24">
          <AmazonProjectSection />
        </div>

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

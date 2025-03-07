"use client";

import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import AnimatedText from "@/components/AnimatedText";
import AboutSection from "@/components/AboutSection";
import ScrollToTop from "@/components/ScrollToTop";
import ProfileImage from "@/components/ProfileImage";
import AmazonProjectSection from "@/components/AmazonProjectSection";
import UberProjectSection from "@/components/UberProjectSection";
import NASAProjectSection from "@/components/NASAProjectSection";
import MercedesProjectSection from "@/components/MercedesProjectSection";
import HarvardProjectSection from "@/components/HarvardProjectSection";

export default function Home() {
  return (
    <main className="relative min-h-screen cursor-none pt-28 px-4 sm:px-8 bg-gradient-to-b from-black via-white to-black">
      <Cursor />
      <Navbar />
      <ScrollToTop />

      <section className="max-w-6xl mx-auto py-24 relative z-10">
        <AnimatedText
          text="Welcome to My Research Portfolio"
          className="text-4xl md:text-5xl font-bold text-center my-10"
        />

        <ProfileImage />
        <AboutSection />

        <AmazonProjectSection />
        <UberProjectSection />
        <NASAProjectSection />
        <MercedesProjectSection />
        <HarvardProjectSection />
      </section>

      <ScrollToTop />
    </main>
  );
}

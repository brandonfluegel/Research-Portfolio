"use client";

import { motion } from "framer-motion";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import AnimatedText from "@/components/AnimatedText";
import AboutSection from "@/components/AboutSection";
import ScrollToTop from "@/components/ScrollToTop";
import ProfileImage from "@/components/ProfileImage";
import AmazonProjectSection from "@/components/AmazonProjectSection";
import UberProjectSection from "@/components/UberProjectSection";
import MercedesProjectSection from "@/components/MercedesProjectSection";
import NASAProjectSection from "@/components/NASAProjectSection";
import HarvardProjectSection from "@/components/HarvardProjectSection";

export default function Home() {
  return (
    <main className="min-h-screen cursor-non pt-28 px-4 sm:px-8">
      <Cursor />
      <Navbar />
      <ScrollToTop />

      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
        className="max-w-4xl mx-auto py-24"
      >
        <AnimatedText
          text="Welcome to My Research Portfolio"
          className="text-4xl md:text-5xl font-bold text-center my-10"
        />

        <ProfileImage />

        <AboutSection />

        <section id="amazon">
          <AmazonProjectSection />
        </section>

        <section id="uber">
          <UberProjectSection />
        </section>

        <section id="mercedes">
          <MercedesProjectSection />
        </section>

        <section id="nasa">
          <NASAProjectSection />
        </section>

        <section id="harvard">
          <HarvardProjectSection />
        </section>

      </motion.section>
    </main>
  );
}

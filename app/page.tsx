"use client";

import Link from "next/link";
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
import ProfileImage from "@/components/ProfileImage";
import useSmoothScroll from "@/app/hooks/useSmoothScroll";

export default function Home() {
  useSmoothScroll("nav", 120);

  return (
    <main className="relative min-h-screen px-4 sm:px-8 pb-24 overflow-hidden">
      <Cursor />
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center gap-12 min-h-[80vh] pt-32 pb-16 -mt-[90px]">
        <div className="relative z-10 flex-1 max-w-2xl space-y-6">
          <AnimatedText
            text="Human-centered research that moves products forward"
            className="hero-header font-semibold text-left text-white"
          />

          <p className="text-lg text-gray-200 leading-relaxed">
            I’m Brandon Fluegel, a human factors researcher who pairs cognitive science with immersive storytelling to help teams design clearer, more intuitive experiences. Over the past decade I’ve guided global launches for Amazon, Uber, NASA, Mercedes-Benz, and Harvard.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" aria-hidden />
              <span>Designed and shipped 100+ product improvements grounded in mixed-methods evidence.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" aria-hidden />
              <span>Unlocked a $1.7B revenue opportunity by redefining Alexa latency expectations.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" aria-hidden />
              <span>Partnered with astronauts, drivers, and clinicians to improve mission-critical systems.</span>
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="mailto:brandon@humanfactors.pro"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-400"
            >
              Let’s collaborate
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-indigo-300 hover:text-indigo-200"
            >
              Explore flagship work
            </Link>
          </div>

          <ScrollIndicator />
        </div>

        <div className="flex-1 max-w-md">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <ProfileImage />
          </div>
        </div>
      </section>

      {/* Project Sections */}
      <section id="projects" className="mx-auto mt-12 flex max-w-6xl flex-col gap-12">
        <AmazonProjectSection />
        <UberProjectSection />
        <NASAProjectSection />
        <MercedesProjectSection />
        <HarvardProjectSection />
      </section>

      {/* Contact Section */}
      <section id="connect" className="mx-auto mt-20 flex max-w-4xl flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white shadow-2xl backdrop-blur">
        <h2 className="text-3xl font-semibold">Ready to discuss your next research challenge?</h2>
        <p className="text-lg text-gray-200">
          I love partnering with teams that are navigating ambiguity or scaling new experiences. Share a brief about your product or invite me to consult on a sprint, and I’ll respond within two business days.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="mailto:brandon@humanfactors.pro"
            className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-400"
          >
            Email Brandon
          </Link>
          <Link
            href="https://www.linkedin.com/in/brandonfluegel/"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-indigo-300 hover:text-indigo-200"
          >
            Connect on LinkedIn
          </Link>
        </div>
      </section>
    </main>
  );
}

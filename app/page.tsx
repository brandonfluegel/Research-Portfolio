"use client";

import { motion } from "framer-motion";
import Cursor from "@/components/Cursor";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import AnimatedText from "@/components/AnimatedText";
import AboutSection from "@/components/AboutSection";
import ScrollToTop from "@/components/ScrollToTop";
import ProfileImage from "@/components/ProfileImage";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen cursor-none pt-20">
      <Cursor />
      <Navbar />
      <ScrollToTop />

      <motion.section
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        className="max-w-4xl mx-auto py-24"
      >
        <AnimatedText
          text="Welcome to My Research Portfolio"
          className="text-4xl md:text-5xl font-bold text-center my-10"
        />

        <ProfileImage />

        <section className="max-w-2xl mx-auto text-center mb-12 text-gray-300">
          <p>
            My research explores the cognitive strengths and limitations of humans to inform the design of complex consumer products and technology. Currently, I'm a Managing Scientist within the Human Factors Research Group at J.S. Held.
          </p>
        </section>

        <ProjectCard
          title="Amazon Devices Design Group"
          description="Conducted 25+ mixed-methods studies, prioritized strategic research initiatives, and identified a $1.5 billion opportunity optimizing Alexa's performance."
          imageSrc="/assets/project-image-1.jpg"
        />

        <ProjectCard
          title="Uber UX Research"
          description="Conducted mixed-methods research informing iterative design for rental driver apps and payment experiences."
          imageSrc="/assets/project-image-2.jpg"
        />

        <ProjectCard
          title="NASA Langley UX Research"
          description="Led research on astronaut medical workstation prototypes designed for Gateway, a lunar-orbiting space station."
          imageSrc="/assets/project-image-3.jpg"
        />

        <ProjectCard
          title="Mercedes-Benz R&D"
          description="Conducted evaluative research on semi-autonomous vehicles, analyzing passenger experiences related to ambient noise and UX."
          imageSrc="/assets/project-image-4.jpg"
        />

        <ProjectCard
          title="Harvard Medical School"
          description="Performed research evaluating the efficacy of tVNS therapy for major depression and anxiety disorders."
          imageSrc="/assets/project-image-5.jpg"
        />
      </motion.section>
    </main>
  );
}

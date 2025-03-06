"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  sectionId: string;
}

export default function ProjectCard({ title, description, imageSrc, sectionId }: ProjectCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const scrollToSection = () => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="max-w-3xl mx-auto my-20 overflow-hidden rounded-lg shadow-xl bg-neutral-900 cursor-pointer p-6 sm:p-8"
      onClick={scrollToSection}
    >
      <div className="overflow-hidden h-[400px] relative rounded-md">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image src={imageSrc} alt={title} fill className="object-cover" loading="lazy" />
        </motion.div>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

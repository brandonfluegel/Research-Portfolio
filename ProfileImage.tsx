"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex justify-center mb-8 px-4"
    >
      <Image
        src="/assets/brandon-fluegel.jpg"
        alt="Brandon Fluegel, Ph.D"
        width={278}
        height={278}
        className="rounded-2xl object-cover shadow-lg w-[190px] sm:w-[278px] max-w-full h-auto"
      />
    </motion.div>
  );
}
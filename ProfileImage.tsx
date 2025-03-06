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
      className="flex justify-center mb-8"
    >
      <Image
        src="/assets/brandon-fluegel.jpg"
        alt="Brandon Fluegel, Ph.D"
        width={300}
        height={300}
        className="rounded-full object-cover border-2 border-gray-700 shadow-lg"
      />
    </motion.div>
  );
}

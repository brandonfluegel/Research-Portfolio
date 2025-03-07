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
      className="flex justify-center items-center px-4"
    >
      <Image
        src="/assets/brandon-fluegel.jpg"
        alt="Brandon Fluegel, Ph.D"
        width={348}
        height={348}
        className="rounded-full shadow-2xl object-contain w-[250px] sm:w-[348px] max-w-full h-auto"
        style={{ boxShadow: "0 12px 24px rgba(0,0,0,0.35)" }}
      />
    </motion.div>
  );
}

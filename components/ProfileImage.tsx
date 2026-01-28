"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="flex justify-center items-center my-16">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="rounded-full shadow-2xl overflow-hidden"
      >
        <Image
          src="/assets/brandon-fluegel.jpg"
          alt="Brandon Fluegel, Ph.D"
          width={300}
          height={300}
          priority
          quality={90}
          sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, 300px"
          className="object-cover w-[150px] sm:w-[200px] md:w-[300px] aspect-square"
        />
      </motion.div>
    </div>
  );
}

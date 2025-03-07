"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto my-32 px-6 relative -mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl text-gray-300 leading-relaxed text-justify space-y-6"
      >
        <p>
          Hey, I’m Brandon, thanks for being here!
        </p>

        <p>
          I am passionate about creating experiences that society can enjoy. My research explores the cognitive strengths and limits of humans to help guide the design of complex consumer products and technology. Over the past 10 years, my experiences at Amazon, Uber, NASA, and Mercedes-Benz have allowed me to blend scientific rigor with creative storytelling, helping product and design teams uncover hidden opportunities and build delightful, impactful experiences. I earned my Ph.D. in Human Factors Psychology in 2020. My approach combines detailed, mixed-method research with a human touch, turning insights into actionable direction that enhance the lives of users and drive real business results.
        </p>
      </motion.div>
    </section>
  );
}

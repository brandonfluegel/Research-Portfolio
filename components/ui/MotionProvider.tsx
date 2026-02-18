"use client";

import { LazyMotion, MotionConfig, domAnimation, useReducedMotion } from "framer-motion";

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion={reducedMotion ? "always" : "user"}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { isLowPowerDevice } from "@/lib/utils/performance";

interface LazyVideoProps {
  src: string;
  className?: string;
}

export default function LazyVideo({ src, className = "" }: LazyVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [lowPowerMode, setLowPowerMode] = useState(false);

  useEffect(() => {
    setLowPowerMode(isLowPowerDevice());
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          setIsInView(true);
          return;
        }

        setIsInView(false);
      },
      {
        rootMargin: lowPowerMode ? "120px 0px" : "280px 0px",
        threshold: 0.05,
      }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [lowPowerMode]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (isInView) {
      video.play().catch(() => {});
      return;
    }

    return () => {
      video.pause();
    };
  }, [isInView, shouldLoad]);

  return (
    <div ref={wrapperRef} className={className} style={{ lineHeight: 0 }}>
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        autoPlay
        muted
        loop
        playsInline
        preload={shouldLoad ? "metadata" : "none"}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

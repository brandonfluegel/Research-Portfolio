"use client";

import { useRef, useEffect, useState } from "react";
import { isLowPowerDevice, prefersReducedMotion } from "@/lib/utils/performance";

interface LazyVideoProps {
  sources: Array<{ src: string; type: string }>;
  poster?: string;
  ariaLabel?: string;
  className?: string;
}

export default function LazyVideo({ sources, poster, ariaLabel, className = "" }: LazyVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [lowPowerMode] = useState(() => isLowPowerDevice());

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
        rootMargin: lowPowerMode ? "40px 0px" : "120px 0px",
        threshold: 0.15,
      }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [lowPowerMode]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (isInView && !prefersReducedMotion()) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView, shouldLoad]);

  return (
    <div ref={wrapperRef} className={className} style={{ lineHeight: 0 }}>
      <video
        ref={videoRef}
        poster={poster}
        aria-label={ariaLabel}
        autoPlay
        muted
        loop
        playsInline
        preload={isInView ? "metadata" : "none"}
        disablePictureInPicture
        className="w-full h-full object-cover"
      >
        {shouldLoad &&
          sources.map((source) => <source key={source.src} src={source.src} type={source.type} />)}
      </video>
    </div>
  );
}


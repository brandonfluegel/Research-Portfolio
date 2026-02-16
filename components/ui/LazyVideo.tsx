"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
}

export default function LazyVideo({ src, className = "" }: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const isInViewRef = useRef(false);

  // Track viewport visibility on the container div (always in DOM)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          setShouldLoad(true);
        }

        // Pause when scrolled away
        const video = videoRef.current;
        if (video && !entry.isIntersecting) {
          video.pause();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Once loaded, attach the video element and force-load
  useEffect(() => {
    if (!shouldLoad) return;

    const video = videoRef.current;
    if (video && isInViewRef.current && video.paused && video.readyState >= 2) {
      video.play().catch(() => {});
    }
  }, [shouldLoad]);

  // Handle the ref callback to trigger load() on mount
  const setVideoRef = (el: HTMLVideoElement | null) => {
    videoRef.current = el;
    if (el) {
      // Force the browser to pick up the src and start loading
      el.load();
    }
  };

  return (
    <div ref={containerRef} className={className} style={{ lineHeight: 0 }}>
      {shouldLoad && (
        <video
          ref={setVideoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}

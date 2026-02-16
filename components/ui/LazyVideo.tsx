"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
}

export default function LazyVideo({ src, className = "" }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Track viewport visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setShouldLoad(true); // Once loaded, stays loaded
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Play/pause based on visibility — only after video can play
  const handleCanPlay = useCallback(() => {
    const video = videoRef.current;
    if (video && isInView) {
      video.play().catch(() => {});
    }
  }, [isInView]);

  // Pause when scrolled away, play when scrolled back
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (isInView) {
      // Only play if readyState indicates media is ready
      if (video.readyState >= 3) {
        video.play().catch(() => {});
      }
      // Otherwise handleCanPlay will fire when ready
    } else {
      video.pause();
    }
  }, [isInView, shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      autoPlay={false}
      muted
      loop
      playsInline
      preload={shouldLoad ? "auto" : "none"}
      onCanPlay={handleCanPlay}
      className={className}
    />
  );
}

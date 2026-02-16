"use client";

import { useRef, useEffect } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
}

export default function LazyVideo({ src, className = "" }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure playback starts as soon as the video is ready
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      video.play().catch(() => {});
    };

    if (video.readyState >= 3) {
      video.play().catch(() => {});
    } else {
      video.addEventListener("canplay", handleCanPlay);
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <div className={className} style={{ lineHeight: 0 }}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

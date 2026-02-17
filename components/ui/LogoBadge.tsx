"use client";

import Image from "next/image";

interface LogoBadgeProps {
  logoSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function LogoBadge({
  logoSrc,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 80px, 112px",
}: LogoBadgeProps) {
  return (
    <div className={`relative select-none ${className}`}>
      <Image
        src={logoSrc}
        alt={alt}
        width={400}
        height={400}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes={sizes}
        className="object-contain w-full h-auto"
      />
    </div>
  );
}
"use client";

import Image from "next/image";

interface LogoBadgeProps {
  logoSrc: string;
  alt: string;
  className?: string;
}

export default function LogoBadge({ logoSrc, alt, className = "" }: LogoBadgeProps) {
  return (
    <div className={`absolute left-1/2 transform -translate-x-1/2 pointer-events-none select-none ${className}`}>
      <Image
        src={logoSrc}
        alt={alt}
        width={400}
        height={400}
        className="object-contain w-full h-auto opacity-150"
      />
    </div>
  );
}

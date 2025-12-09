// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import GradientBackground from "@/components/GradientBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // FIX 1: Set the Base URL to resolve the build warning and help Google indexing
  metadataBase: new URL('https://humanfactors.pro'),

  title: "Brandon Fluegel, Ph.D.",
  description:
    "Welcome to my UX & Human Factors research portfolio, showcasing projects completed at Amazon, Uber, NASA, and Mercedes-Benz.",
  
  // FIX 2: Point the favicon to your cowboy image
  icons: {
    icon: '/assets/cowboy.jpg',
    apple: '/assets/cowboy.jpg',
  },

  keywords: [
    "UX Research",
    "Human Factors",
    "Brandon Fluegel",
    "Amazon",
    "Uber",
    "NASA",
    "Mercedes-Benz",
    "Harvard",
  ],
  openGraph: {
    title: "Brandon Fluegel, Ph.D.",
    description:
      "Welcome to my UX & Human Factors research portfolio, showcasing projects completed at Amazon, Uber, NASA, and Mercedes-Benz.",
    images: [
      {
        url: "/assets/talk.jpg",
        width: 1200,
        height: 630,
        alt: "Brandon Fluegel, Ph.D.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandon Fluegel, Ph.D.",
    description:
      "Welcome to my UX & Human Factors research portfolio, showcasing projects completed at Amazon, Uber, NASA, and Mercedes-Benz.",
    images: ["/assets/talk.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="text-white cursor-none overflow-x-hidden">
        <GradientBackground />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
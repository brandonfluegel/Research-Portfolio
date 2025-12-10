// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Added JetBrains Mono
import { Analytics } from "@vercel/analytics/react";
import GradientBackground from "@/components/GradientBackground";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://humanfactors.pro'),
  title: "Brandon Fluegel, Ph.D.",
  description:
    "Welcome to my UX & Human Factors research portfolio, showcasing projects completed at Amazon, Uber, NASA, and Mercedes-Benz.",
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
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="text-white cursor-none overflow-x-hidden font-sans">
        <GradientBackground />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
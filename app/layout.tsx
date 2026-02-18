// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; 
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GradientBackground from "@/components/ui/GradientBackground";
import PerformanceModeProvider from "@/components/ui/PerformanceModeProvider";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://humanfactors.pro'),
  title: {
    default: "Brandon Fluegel, Ph.D.",
    template: "%s | Brandon Fluegel, Ph.D."
  },
  description: "Human Factors PhD & UX Researcher portfolio featuring impact at Amazon, Sling TV, Uber, and NASA.",
  keywords: ["Brandon Fluegel", "Human Factors", "UX Research", "PhD", "Psychophysics", "Amazon", "Sling TV", "Uber", "NASA", "Experimental Design"],
  authors: [{ name: "Brandon Fluegel" }],
  openGraph: {
    title: "Brandon Fluegel, Ph.D.",
    description: "Human Factors PhD & UX Researcher portfolio featuring impact at Amazon, Sling TV, Uber, and NASA.",
    url: 'https://humanfactors.pro',
    siteName: 'Brandon Fluegel Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/cowboy.jpg',
        width: 800,
        height: 600,
        alt: 'Brandon Fluegel, Ph.D.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Brandon Fluegel, Ph.D.",
    description: "Human Factors PhD & UX Researcher portfolio featuring impact at Amazon, Sling TV, Uber, and NASA.",
    images: ['/assets/cowboy.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      {/* REMOVED 'cursor-none' from class list below */}
      <body className="text-white overflow-x-hidden font-sans">
        <PerformanceModeProvider />
        <GradientBackground />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
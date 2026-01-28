// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; 
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GradientBackground from "@/components/GradientBackground";
import MobileQuickNav from "@/components/MobileQuickNav";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://humanfactors.pro'),
  title: "Brandon Fluegel, Ph.D.",
  description: "Welcome to my UX & Human Factors research portfolio.",
  icons: {
    icon: '/assets/cowboy.jpg',
    apple: '/assets/cowboy.jpg',
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
        <GradientBackground />
        <MobileQuickNav />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
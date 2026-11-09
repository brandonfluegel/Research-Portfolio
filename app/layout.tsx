// v2 - Fall 2026
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GradientBackground from "@/components/ui/GradientBackground";
import GoogleAnalytics from "@/components/ui/GoogleAnalytics";
import PerformanceModeProvider from "@/components/ui/PerformanceModeProvider";
import MotionProvider from "@/components/ui/MotionProvider";
import { siteMetadata, siteViewport, structuredData } from "@/lib/seo/metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const isProductionDeployment = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : process.env.NODE_ENV === "production";

export const viewport: Viewport = siteViewport;
export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Summary Index" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM Full Knowledge Base" />
        {isProductionDeployment && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ? (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="preconnect" href="https://www.google-analytics.com" />
          </>
        ) : null}
      </head>
      <body className="text-white overflow-x-hidden font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <PerformanceModeProvider />
        <GradientBackground />
        <MotionProvider>{children}</MotionProvider>
        <GoogleAnalytics />
        {isProductionDeployment ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  );
}
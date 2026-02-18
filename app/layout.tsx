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
const siteUrl = "https://humanfactors.pro";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Brandon Fluegel, Ph.D. | Human Factors UX Researcher",
    template: "%s | Brandon Fluegel, Ph.D."
  },
  description: "Human Factors UX Researcher with impact across Amazon, Sling TV, Uber, and NASA—translating psychophysics and experimentation into product, conversion, and revenue outcomes.",
  keywords: ["Brandon Fluegel", "Human Factors", "UX Researcher", "Human Factors UX Researcher", "Psychophysics", "Experimental Design", "Amazon", "Sling TV", "Uber", "NASA", "Product Research", "Conversion"],
  authors: [{ name: "Brandon Fluegel" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Brandon Fluegel, Ph.D. | Human Factors UX Researcher",
    description: "Research portfolio featuring impact at Amazon, Sling TV, Uber, and NASA through psychophysics, experimentation, and product strategy.",
    url: siteUrl,
    siteName: "Brandon Fluegel Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Brandon Fluegel, Ph.D. portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandon Fluegel, Ph.D. | Human Factors UX Researcher",
    description: "Research portfolio featuring impact at Amazon, Sling TV, Uber, and NASA.",
    images: ["/assets/og-preview.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: "Brandon Fluegel, Ph.D.",
      url: siteUrl,
      image: `${siteUrl}/assets/howdy.jpg`,
      jobTitle: "Human Factors UX Researcher",
      worksFor: {
        "@type": "Organization",
        name: "Sling TV",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "Brandon Fluegel Portfolio",
      description: "Human Factors UX Research and product impact portfolio.",
      publisher: {
        "@id": `${siteUrl}#person`,
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <PerformanceModeProvider />
        <GradientBackground />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
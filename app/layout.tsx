// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; 
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GradientBackground from "@/components/ui/GradientBackground";
import GoogleAnalytics from "@/components/ui/GoogleAnalytics";
import PerformanceModeProvider from "@/components/ui/PerformanceModeProvider";
import MotionProvider from "@/components/ui/MotionProvider";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });
const siteUrl = "https://humanfactors.pro";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Brandon Fluegel Portfolio",
  title: "Brandon Fluegel, Ph.D. | Staff UX Researcher",
  description: "Staff UX Researcher in Human Factors and AI. Delivered measurable impact across Amazon, Sling, Uber, and NASA.",
  keywords: ["Brandon Fluegel", "Staff UX Researcher", "Human Factors", "UX Researcher", "Human Factors UX Researcher", "AI UX Research", "Psychophysics", "Experimental Design", "Amazon", "Sling TV", "Uber", "NASA", "Product Research", "Conversion"],
  authors: [{ name: "Brandon Fluegel" }],
  creator: "Brandon Fluegel",
  publisher: "Brandon Fluegel",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Brandon Fluegel, Ph.D. | Staff UX Researcher",
    description: "Staff UX Researcher with Human Factors and AI expertise across Amazon, Sling, Uber, and NASA.",
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
    title: "Brandon Fluegel, Ph.D. | Staff UX Researcher",
    description: "Staff UX Researcher with Human Factors and AI impact across Amazon, Sling, Uber, and NASA.",
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
      jobTitle: "Staff UX Researcher",
      description: "Staff-level Human Factors and AI UX researcher focused on measurable product and revenue outcomes.",
      sameAs: ["https://www.linkedin.com/in/fluegel/"],
      knowsAbout: [
        "Human Factors",
        "Human-AI Interaction",
        "UX Research",
        "Product Strategy",
        "Psychophysics",
        "Experimental Design",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Sling TV",
      },
    },
    {
      "@type": "Occupation",
      "@id": `${siteUrl}#occupation`,
      name: "Staff UX Researcher",
      occupationLocation: {
        "@type": "Country",
        name: "United States",
      },
      skills: [
        "Human Factors",
        "Human-AI Interaction",
        "UX Research",
        "Product Research",
        "Experimental Design",
      ],
      mainEntityOfPage: {
        "@id": `${siteUrl}#website`,
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
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}#profile-page`,
      url: siteUrl,
      name: "Brandon Fluegel Portfolio",
      about: {
        "@id": `${siteUrl}#person`,
      },
      mainEntity: {
        "@id": `${siteUrl}#person`,
      },
      isPartOf: {
        "@id": `${siteUrl}#website`,
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
        <MotionProvider>{children}</MotionProvider>
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; 
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GradientBackground from "@/components/ui/GradientBackground";
import GoogleAnalytics from "@/components/ui/GoogleAnalytics";
import PerformanceModeProvider from "@/components/ui/PerformanceModeProvider";
import MotionProvider from "@/components/ui/MotionProvider";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono', display: 'swap' });
const siteUrl = "https://humanfactors.pro";
const profileSearchImage = "/assets/profile-search.jpg";
const caseStudies = [
  {
    id: "amazon",
    name: "Amazon Alexa Latency & Human Factors Research Case Study",
    organization: "Amazon",
    url: `${siteUrl}/#amazon-section`,
    description: "Human factors research calibrating Alexa latency thresholds to human perception, projecting $50M+ incremental revenue through the Negative Value Action model.",
  },
  {
    id: "sling",
    name: "Sling TV Human Factors & AI Systems Research Case Study",
    organization: "Sling TV",
    url: `${siteUrl}/#sling-section`,
    description: "Staff Human Factors Researcher establishing org-wide HF standards for latency, visual UI design, and conversational AI response quality, alongside the Sling Experience Index (SXI) framework.",
  },
  {
    id: "uber",
    name: "Uber UX Research Case Study",
    organization: "Uber",
    url: `${siteUrl}/#uber-section`,
    description: "Human Factors PhD Intern research addressing cognitive load and driver retention across the Uber driver experience in the LATAM market.",
  },
  {
    id: "nasa",
    name: "NASA Human Factors Research Case Study",
    organization: "NASA",
    url: `${siteUrl}/#nasa-section`,
    description: "Human Factors PhD Intern validation research for mission-critical system performance and operator safety on the Lunar Gateway medical workstation.",
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz HMI Human Factors Research Case Study",
    organization: "Mercedes-Benz",
    url: `${siteUrl}/#mercedes-section`,
    description: "Human Factors PhD Intern HMI research improving driver trust, cognitive ergonomics, and system transparency in semi-autonomous vehicles.",
  },
];

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  // Required for dvh units & safe-area-insets on notched iPhones.
  viewportFit: "cover",
  // Prevents iOS virtual keyboard from pushing layout off-screen.
  interactiveWidget: "resizes-content",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Brandon Fluegel Portfolio",
  title: {
    default: "Brandon Fluegel, Ph.D.",
    template: "%s | Brandon Fluegel, Ph.D."
  },
  description: "Staff Human Factors Researcher & PhD specializing in Human-AI Interaction, psychophysics, and product strategy. Research impact at Amazon, Sling TV, Uber, NASA, and Mercedes-Benz.",
  keywords: ["Brandon Fluegel", "Staff Human Factors Researcher", "Human Factors Researcher", "Human Factors Engineer", "UX Researcher", "Human Factors", "Human-AI Interaction", "AI UX Research", "Psychophysics", "Experimental Design", "Cognitive Load", "fNIRS", "Neuroimaging", "Biometric Research", "Trust in AI", "Human Factors Engineering", "Amazon", "Sling TV", "Uber", "NASA", "Mercedes-Benz", "Product Research", "Product Strategy", "Latency Research", "Human Machine Interface"],
  authors: [{ name: "Brandon Fluegel" }],
  creator: "Brandon Fluegel",
  publisher: "Brandon Fluegel",
  category: "Human Factors Research",
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

  openGraph: {
    title: "Brandon Fluegel, Ph.D.",
    description: "Staff Human Factors Researcher & PhD specializing in Human-AI Interaction, psychophysics, and product strategy. Research impact at Amazon, Sling TV, Uber, NASA, and Mercedes-Benz.",
    url: siteUrl,
    siteName: "Brandon Fluegel Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: profileSearchImage,
        width: 1200,
        height: 1200,
        alt: "Brandon Fluegel profile photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandon Fluegel, Ph.D.",
    description: "Staff Human Factors Researcher & PhD specializing in Human-AI Interaction, psychophysics, and product strategy. Research impact at Amazon, Sling TV, Uber, NASA, and Mercedes-Benz.",
    images: [profileSearchImage],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageObject",
      "@id": `${siteUrl}#profile-image`,
      contentUrl: `${siteUrl}${profileSearchImage}`,
      url: `${siteUrl}${profileSearchImage}`,
      width: 1200,
      height: 1200,
      caption: "Brandon Fluegel profile photo",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: "Brandon Fluegel, Ph.D.",
      url: siteUrl,
      image: {
        "@id": `${siteUrl}#profile-image`,
      },
      jobTitle: "Staff Human Factors Researcher",
      description: "Staff Human Factors Researcher and PhD with impact at Amazon, Sling TV, Uber, NASA, and Mercedes-Benz — specializing in Human-AI Interaction, psychophysics, neuroimaging (fNIRS), cognitive load assessment, and research-driven product strategy.",
      sameAs: ["https://www.linkedin.com/in/fluegel/"],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Old Dominion University",
      },
      knowsLanguage: ["English"],
      knowsAbout: [
        "Human Factors",
        "Human Factors Engineering",
        "Human-AI Interaction",
        "UX Research",
        "Product Strategy",
        "Psychophysics",
        "Experimental Design",
        "Cognitive Load Assessment",
        "Neuroimaging",
        "fNIRS",
        "Biometric Research",
        "Trust in AI Systems",
        "Latency Research",
        "Human Machine Interface",
        "Quantitative UX Research",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Sling TV",
      },
      hasOccupation: {
        "@id": `${siteUrl}#occupation`,
      },
    },
    {
      "@type": "Occupation",
      "@id": `${siteUrl}#occupation`,
      name: "Staff Human Factors Researcher",
      occupationLocation: {
        "@type": "Country",
        name: "United States",
      },
      skills: [
        "Human Factors",
        "Human Factors Engineering",
        "Human-AI Interaction",
        "UX Research",
        "Experimental Design",
        "Psychophysics",
        "Cognitive Load Assessment",
        "Neuroimaging (fNIRS)",
        "Biometric Research",
        "Trust in AI Systems",
        "Quantitative Research",
        "Product Strategy",
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
      image: {
        "@id": `${siteUrl}#profile-image`,
      },
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
      primaryImageOfPage: {
        "@id": `${siteUrl}#profile-image`,
      },
      significantLink: caseStudies.map((study) => study.url),
      isPartOf: {
        "@id": `${siteUrl}#website`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}#case-studies`,
      name: "UX and Human Factors Case Studies",
      itemListElement: caseStudies.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          "@id": `${siteUrl}#${study.id}-case-study`,
          name: study.name,
          url: study.url,
          description: study.description,
          about: {
            "@type": "Organization",
            name: study.organization,
          },
        },
      })),
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
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
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
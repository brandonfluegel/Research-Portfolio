// v3 - Winter 2026
import type { Metadata, Viewport } from "next";
import { PROFILE_SEARCH_IMAGE, SITE_LINKS, SITE_URL } from "@/lib/constants/site";
import {
  PROFILE,
  PROFILE_NAME,
  PROFILE_ROLE,
  PROFILE_SEARCH_DESCRIPTION,
  PROFILE_SUMMARY,
} from "@/lib/data/profile";
import { RESEARCH_HIGHLIGHTS, researchHighlightUrl } from "@/lib/data/researchHighlights";

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  // Required for dvh units & safe-area-insets on notched iPhones.
  viewportFit: "cover",
  // Prevents iOS virtual keyboard from pushing layout off-screen.
  interactiveWidget: "resizes-content",
};

const profileTitle = `${PROFILE_NAME} | Human Factors Design Engineer`;

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: PROFILE.name,
  description: PROFILE_SEARCH_DESCRIPTION,
  title: {
    default: profileTitle,
    template: "%s | Brandon Allan Fluegel, Ph.D.",
  },
  authors: [{ name: PROFILE.name }],
  creator: PROFILE.name,
  publisher: PROFILE.name,
  category: "Human Factors Engineering",
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
    title: profileTitle,
    description: PROFILE_SEARCH_DESCRIPTION,
    url: SITE_URL,
    siteName: PROFILE.name,
    locale: "en_US",
    type: "profile",
    firstName: "Brandon",
    lastName: "Fluegel",
    images: [
      {
        url: PROFILE_SEARCH_IMAGE,
        width: 1200,
        height: 1200,
        alt: `${PROFILE_NAME} — Senior Human Factors Design Engineer at Intuitive Surgical`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: profileTitle,
    description: PROFILE_SEARCH_DESCRIPTION,
    images: [PROFILE_SEARCH_IMAGE],
  },
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageObject",
      "@id": `${SITE_URL}#profile-image`,
      contentUrl: `${SITE_URL}${PROFILE_SEARCH_IMAGE}`,
      url: `${SITE_URL}${PROFILE_SEARCH_IMAGE}`,
      width: 1200,
      height: 1200,
      caption: `${PROFILE_NAME} profile photo`,
    },
    {
      "@type": "Organization",
      "@id": "https://www.intuitive.com/#organization",
      name: PROFILE.employer,
      url: "https://www.intuitive.com/",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: PROFILE.name,
      givenName: "Brandon",
      additionalName: "Allan",
      familyName: "Fluegel",
      url: SITE_URL,
      image: {
        "@id": `${SITE_URL}#profile-image`,
      },
      jobTitle: PROFILE.role,
      worksFor: {
        "@id": "https://www.intuitive.com/#organization",
      },
      honorificSuffix: "Ph.D.",
      description: PROFILE_SUMMARY,
      sameAs: [SITE_LINKS.linkedin],
      email: SITE_LINKS.email,
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Doctor of Philosophy (Ph.D.) in Human Factors Psychology",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Old Dominion University",
        },
      },
      award: [
        "2023 Amazon Inventor Award",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Old Dominion University",
      },
      knowsLanguage: ["English"],
      knowsAbout: [
        "Human Factors Engineering",
        "Surgical Robotics",
        "Medical Device Human Factors",
        "Human-Robot Interaction",
        "Human-Machine Interaction",
        "Simulated-Use Validation",
        "Human-AI Interaction",
        "Human-AI Trust Calibration",
        "Psychophysics",
        "Cognitive Workload Assessment",
        "Functional Near-Infrared Spectroscopy",
        "fNIRS",
        "Eye-Tracking",
        "Safety-Critical Systems",
      ],
      hasOccupation: {
        "@id": `${SITE_URL}#occupation`,
      },
    },
    {
      "@type": "CreativeWork",
      "@id": `${SITE_URL}#patent-12532040`,
      name: "US Patent 12,532,040 B1 — Context-based control inputs for a device",
      url: SITE_LINKS.patent,
      creator: {
        "@id": `${SITE_URL}#person`,
      },
    },
    {
      "@type": "CreativeWork",
      "@id": `${SITE_URL}#human-ai-trust-framework`,
      name: "Human Factors Principles for Human-AI Trust: An Audit Framework for Non-Deterministic Interfaces",
      headline: "Human Factors Principles for Human-AI Trust (V.2)",
      author: {
        "@id": `${SITE_URL}#person`,
      },
      url: `${SITE_URL}/#agent-trust`,
      description:
        "A 4-phase, 6-principle human factors engineering audit framework (Capability Discovery, Intent Alignment, Observability & Predictability, Context-Aware Delegation, Directability & Interruptibility, Calibrated Trust & Safety) for evaluating and validating non-deterministic and multi-agent AI systems.",
      about: [
        "Human-AI Interaction",
        "Human-AI Trust",
        "Trust Calibration",
        "Human Factors Engineering",
      ],
    },
    {
      "@type": "Occupation",
      "@id": `${SITE_URL}#occupation`,
      name: PROFILE.role,
      description: PROFILE_ROLE,
      skills: [
        "Human Factors Engineering",
        "Surgical Robotics",
        "Medical Device Human Factors",
        "Human-Robot Interaction",
        "Simulated-Use Validation",
        "Human-AI Interaction",
        "Psychophysics",
        "Cognitive Workload Assessment",
        "fNIRS",
        "Eye-Tracking",
        "Trust Calibration",
        "Safety-Critical Systems",
      ],
      mainEntityOfPage: {
        "@id": `${SITE_URL}#website`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: PROFILE.name,
      description:
        `Human factors engineering portfolio by ${PROFILE_NAME}, focused on surgical robotics and prior projects at Amazon Devices, NASA, and Mercedes-Benz.`,
      image: {
        "@id": `${SITE_URL}#profile-image`,
      },
      publisher: {
        "@id": `${SITE_URL}#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}#profile-page`,
      url: SITE_URL,
      name: `${PROFILE_NAME} | Human Factors Portfolio`,
      about: {
        "@id": `${SITE_URL}#person`,
      },
      mainEntity: {
        "@id": `${SITE_URL}#person`,
      },
      primaryImageOfPage: {
        "@id": `${SITE_URL}#profile-image`,
      },
      significantLink: RESEARCH_HIGHLIGHTS.map((study) => researchHighlightUrl(study.id)),
      isPartOf: {
        "@id": `${SITE_URL}#website`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}#case-studies`,
      name: "Human Factors Case Studies",
      itemListElement: RESEARCH_HIGHLIGHTS.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: study.id === "agent-trust" ? {
          "@id": `${SITE_URL}#human-ai-trust-framework`,
        } : {
          "@type": "CreativeWork",
          "@id": `${SITE_URL}#${study.id}-case-study`,
          name: study.title,
          url: researchHighlightUrl(study.id),
          description: study.summary,
          author: {
            "@id": `${SITE_URL}#person`,
          },
          about: {
            "@type": "Organization",
            name: "organization" in study ? study.organization : undefined,
          },
        },
      })),
    },
  ],
};

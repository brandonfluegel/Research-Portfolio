// v2 - Fall 2026
import type { Metadata, Viewport } from "next";
import { PROFILE_SEARCH_IMAGE, SITE_LINKS, SITE_URL } from "@/lib/constants/site";

const caseStudies = [
  {
    id: "amazon",
    name: "Amazon Alexa Latency, fNIRS Neuroimaging & Human Factors Research Case Study",
    organization: "Amazon",
    url: `${SITE_URL}/#amazon-section`,
    description:
      "Human factors research calibrating Alexa latency thresholds to human perception (1,000ms High Satisfaction Threshold across 20,000+ trials, projecting $50M+ incremental operational value through the Negative Value Action model), fNIRS neuroimaging across 75M+ Echo Show/Hub customers, and US Patent 12,532,040 B1.",
  },
  {
    id: "agent-trust",
    name: "Human Factors Principles for Human-AI Trust (V.2 Audit Framework)",
    organization: "Brandon Allan Fluegel, Ph.D.",
    url: `${SITE_URL}/#agent-trust`,
    description:
      "A 4-phase, 6-principle human factors engineering audit framework (Capability Discovery, Intent Alignment, Observability & Predictability, Context-Aware Delegation, Directability & Interruptibility, Calibrated Trust & Safety) for evaluating and validating probabilistic and multi-agent AI interfaces.",
  },
  {
    id: "nasa",
    name: "NASA Lunar Gateway Medical Workstation Human Factors Validation Case Study",
    organization: "NASA",
    url: `${SITE_URL}/#nasa-section`,
    description:
      "Human Factors PhD Intern simulated-microgravity validation for the Lunar Gateway medical workstation ahead of flight hardware lock, eliminating critical reach-envelope and cognitive error modes and reducing complex medical procedure time-on-task by 30%.",
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz L2 Semi-Autonomous HMI & Psychoacoustics Human Factors Case Study",
    organization: "Mercedes-Benz",
    url: `${SITE_URL}/#mercedes-section`,
    description:
      "Human Factors PhD Intern HMI and psychoacoustic research defining autonomous handover Alert Modality standards, reducing perceived cabin noise by 15% and increasing driver trust scores by 24% during automated lane changes and handoffs.",
  },
];

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  // Required for dvh units & safe-area-insets on notched iPhones.
  viewportFit: "cover",
  // Prevents iOS virtual keyboard from pushing layout off-screen.
  interactiveWidget: "resizes-content",
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Brandon Allan Fluegel",
  title: {
    default: "Brandon Allan Fluegel, Ph.D.",
    template: "%s | Brandon Allan Fluegel, Ph.D.",
  },
  description:
    "Brandon Allan Fluegel, Ph.D. is a Senior Human Factors Design Engineer on Intuitive Surgical's da Vinci surgical robotics team. His portfolio documents prior research at Amazon, NASA, and Mercedes-Benz.",
  authors: [{ name: "Brandon Allan Fluegel" }],
  creator: "Brandon Allan Fluegel",
  publisher: "Brandon Allan Fluegel",
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
    title: "Human Factors Design Engineer | Brandon Allan Fluegel, Ph.D.",
    description:
      "Brandon Allan Fluegel, Ph.D. is a Senior Human Factors Design Engineer on Intuitive Surgical's da Vinci surgical robotics team. His portfolio documents prior research at Amazon, NASA, and Mercedes-Benz.",
    url: SITE_URL,
    siteName: "Brandon Allan Fluegel",
    locale: "en_US",
    type: "profile",
    firstName: "Brandon",
    lastName: "Fluegel",
    username: "fluegel",
    images: [
      {
        url: PROFILE_SEARCH_IMAGE,
        width: 1200,
        height: 1200,
        alt: "Brandon Allan Fluegel, Ph.D. — Senior Human Factors Design Engineer at Intuitive Surgical",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Factors Design Engineer | Brandon Allan Fluegel, Ph.D.",
    description:
      "Brandon Allan Fluegel, Ph.D. is a Senior Human Factors Design Engineer on Intuitive Surgical's da Vinci surgical robotics team. His portfolio documents prior research at Amazon, NASA, and Mercedes-Benz.",
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
      caption: "Brandon Allan Fluegel profile photo",
    },
    {
      "@type": "Organization",
      "@id": "https://www.intuitive.com/#organization",
      name: "Intuitive Surgical",
      url: "https://www.intuitive.com/",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: "Brandon Allan Fluegel",
      givenName: "Brandon",
      additionalName: "Allan",
      familyName: "Fluegel",
      alternateName: [
        "Brandon Fluegel",
        "Dr. Brandon Fluegel",
        "Dr. Brandon Allan Fluegel",
        "Brandon A. Fluegel",
        "Brandon Fluegel, PhD",
      ],
      url: SITE_URL,
      image: {
        "@id": `${SITE_URL}#profile-image`,
      },
      jobTitle: "Senior Human Factors Design Engineer",
      worksFor: {
        "@id": "https://www.intuitive.com/#organization",
      },
      honorificSuffix: "Ph.D.",
      description:
        "Brandon Allan Fluegel, Ph.D. is a Senior Human Factors Design Engineer on Intuitive Surgical's da Vinci surgical robotics team. His prior research and engineering work includes Amazon, NASA, and Mercedes-Benz.",
      sameAs: [SITE_LINKS.linkedin],
      subjectOf: {
        "@type": "CreativeWork",
        name: "US Patent 12,532,040 B1 — Context-Aware Interaction System",
        url: SITE_LINKS.patent,
      },
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
        "Surgical Robotics Human Factors",
        "Human Factors",
        "Human Factors Engineering",
        "Human Factors Design Engineering",
        "Robotics Human Factors",
        "Human-Robot Interaction (HRI)",
        "Medical Robotics",
        "Surgical Robotics",
        "Teleoperation & Haptic Interfaces",
        "Medical Device Human Factors",
        "Simulated-Use Validation",
        "Human-AI Interaction",
        "Human-AI Trust & Governance",
        "Product Strategy",
        "Psychophysics",
        "Experimental Design",
        "Cognitive Load Assessment",
        "Neuroimaging",
        "fNIRS",
        "Biometric Research",
        "Trust in Autonomous Systems",
        "Latency Research",
        "Human Machine Interface",
      ],
      hasOccupation: {
        "@id": `${SITE_URL}#occupation`,
      },
    },
    {
      "@type": "CreativeWork",
      "@id": `${SITE_URL}#patent-12532040`,
      name: "US Patent 12,532,040 B1 — Context-Aware Interaction System",
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
      datePublished: "2026-07-01",
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
      name: "Senior Human Factors Design Engineer",
      description: "Senior Human Factors Design Engineer on Intuitive Surgical's da Vinci surgical robotics team",
      skills: [
        "Human Factors",
        "Human Factors Engineering",
        "Robotics Human Factors",
        "Human-Robot Interaction (HRI)",
        "Medical & Surgical Robotics",
        "Medical Device Human Factors",
        "Simulated-Use Validation",
        "Human-AI Interaction",
        "Experimental Design",
        "Psychophysics",
        "Cognitive Load Assessment",
        "Neuroimaging (fNIRS)",
        "Biometric Research",
        "Trust in Autonomous Systems",
        "Quantitative Research",
        "Product Strategy",
      ],
      mainEntityOfPage: {
        "@id": `${SITE_URL}#website`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "Brandon Allan Fluegel",
      alternateName: "humanfactors.pro",
      description: "Portfolio of human factors research and engineering by Brandon Allan Fluegel, Ph.D.",
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
      name: "Brandon Allan Fluegel",
      about: {
        "@id": `${SITE_URL}#person`,
      },
      mainEntity: {
        "@id": `${SITE_URL}#person`,
      },
      primaryImageOfPage: {
        "@id": `${SITE_URL}#profile-image`,
      },
      significantLink: caseStudies.map((study) => study.url),
      isPartOf: {
        "@id": `${SITE_URL}#website`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}#case-studies`,
      name: "Human Factors Case Studies",
      itemListElement: caseStudies.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          "@id": `${SITE_URL}#${study.id}-case-study`,
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

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
  applicationName: "Brandon Allan Fluegel Portfolio",
  title: {
    default: "Brandon Allan Fluegel, Ph.D.",
    template: "%s | Brandon Allan Fluegel, Ph.D.",
  },
  description:
    "Senior Human Factors Design Engineer (Ph.D.) specializing in robotics, medical & mission-critical systems, and human-autonomy interaction. Research at NASA, Mercedes-Benz, and Amazon.",
  keywords: [
    "Brandon Allan Fluegel",
    "Senior Human Factors Design Engineer",
    "Human Factors Design Engineer",
    "Human Factors Engineer",
    "Robotics Human Factors",
    "Human-Robot Interaction",
    "HRI",
    "Medical Robotics",
    "Surgical Robotics",
    "Teleoperation",
    "Medical Device Human Factors",
    "Simulated-Use Validation",
    "Human Factors Researcher",
    "Staff Human Factors Researcher",
    "Human Factors",
    "Human Factors Engineering",
    "Human-AI Interaction",
    "Human-AI Trust",
    "Psychophysics",
    "Experimental Design",
    "Cognitive Load",
    "fNIRS",
    "Neuroimaging",
    "Biometric Research",
    "Trust in AI",
    "Amazon",
    "NASA",
    "Mercedes-Benz",
    "Product Research",
    "Product Strategy",
    "Latency Research",
    "Human Machine Interface",
  ],
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
    title: "Brandon Allan Fluegel, Ph.D. — Senior Human Factors Design Engineer",
    description:
      "Senior Human Factors Design Engineer (Ph.D.) specializing in robotics, medical & mission-critical systems, and human-autonomy interaction. Research at NASA, Mercedes-Benz, and Amazon.",
    url: SITE_URL,
    siteName: "Brandon Allan Fluegel, Ph.D. — Human Factors Engineering Portfolio",
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
        alt: "Brandon Allan Fluegel, Ph.D. — Senior Human Factors Design Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandon Allan Fluegel, Ph.D. — Senior Human Factors Design Engineer",
    description:
      "Senior Human Factors Design Engineer (Ph.D.) specializing in robotics, medical & mission-critical systems, and human-autonomy interaction. Research at NASA, Mercedes-Benz, and Amazon.",
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
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: "Brandon Allan Fluegel, Ph.D.",
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
      honorificSuffix: "Ph.D.",
      description:
        "Senior Human Factors Design Engineer (Ph.D.) and leading authority in robotics human factors, medical and mission-critical systems, human-autonomy interaction, psychophysics, neuroimaging (fNIRS), and simulated-use validation — with verified research and engineering impact at Amazon, NASA, and Mercedes-Benz.",
      sameAs: [SITE_LINKS.linkedin, SITE_LINKS.patent],
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
        "US Patent 12,532,040 B1 (Context-Aware Interaction System, Granted January 2026)",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Old Dominion University",
      },
      knowsLanguage: ["English"],
      knowsAbout: [
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
      "@type": "ScholarlyArticle",
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
      "@type": "FAQPage",
      "@id": `${SITE_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Brandon Allan Fluegel, Ph.D.?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brandon Allan Fluegel, Ph.D. is a Senior Human Factors Design Engineer and leading authority in human-robot interaction (HRI), medical and mission-critical systems, human-autonomy interaction, psychophysics, and consumer neuroimaging (fNIRS), with proven impact across NASA, Mercedes-Benz, and Amazon.",
          },
        },
        {
          "@type": "Question",
          name: "What are Dr. Brandon Allan Fluegel's primary areas of expertise?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dr. Fluegel specializes in Robotics & Medical Device Human Factors, Simulated-Use Validation, Human-Autonomy & Human-AI Interaction, Psychophysics (perceptual latency modeling), Functional Near-Infrared Spectroscopy (fNIRS) Neuroimaging, Cognitive Load Assessment (NASA-TLX, eye-tracking), and Mission-Critical Human-Machine Interfaces (HMI).",
          },
        },
        {
          "@type": "Question",
          name: "What is the Human Factors Principles for Human-AI Trust framework?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Created by Dr. Brandon Allan Fluegel, the Human Factors Principles for Human-AI Trust is an engineering audit framework for probabilistic and multi-agent AI interfaces. It adapts classical usability heuristics across four phases — Alignment (Capability Discovery, Intent Alignment), Execution (Observability & Predictability, Context-Aware Delegation), Control (Directability & Interruptibility), and Trust Calibration (Calibrated Trust & Safety).",
          },
        },
        {
          "@type": "Question",
          name: "What quantifiable engineering and product outcomes has Dr. Brandon Allan Fluegel delivered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At Amazon, Dr. Fluegel isolated the 1,000ms voice response High Satisfaction Threshold across 20,000+ trials, driving $50M+ in projected operational value in the Negative Value Action (NVA) model, co-established Amazon's fNIRS neuroimaging protocol reaching 75M+ Echo Show/Hub customers, and co-invented US Patent 12,532,040 B1 (2023 Amazon Inventor Award). At NASA, his simulated-microgravity validation of the Lunar Gateway medical workstation reduced complex procedure time-on-task by 30%. At Mercedes-Benz, his L2 semi-autonomous HMI and psychoacoustic models lifted driver trust scores by 24% and reduced perceived cabin noise by 15%.",
          },
        },
        {
          "@type": "Question",
          name: "How does Dr. Brandon Allan Fluegel apply human factors engineering to robotics and medical systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dr. Fluegel combines simulated-use validation, physical reach-envelope and biomechanics analysis, cognitive workload modeling (NASA-TLX, fNIRS neuroimaging, eye-tracking), and psychophysical threshold testing to identify and eliminate critical operator use-errors in robotics, medical workstations, and semi-autonomous systems before hardware and software specifications are locked.",
          },
        },
        {
          "@type": "Question",
          name: "What is the perceptual latency threshold for conversational AI and voice assistants?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Through a 20,000+ trial Wizard of Oz psychophysics research program at Amazon Devices Design Group, Dr. Brandon Allan Fluegel established the 1,000ms High Satisfaction Threshold (HST) — the perceptual boundary where >70% of users rate AI responses as 'not slow' and beyond which user trust and satisfaction degrade sharply.",
          },
        },
      ],
    },
    {
      "@type": "Occupation",
      "@id": `${SITE_URL}#occupation`,
      name: "Senior Human Factors Design Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "United States",
      },
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
      name: "Brandon Allan Fluegel Portfolio",
      description: "Human Factors research and product impact portfolio.",
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
      name: "Brandon Allan Fluegel Portfolio",
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

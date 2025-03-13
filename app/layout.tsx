// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GradientBackground from "@/components/GradientBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brandon Fluegel, Ph.D.",
  description:
    "Welcome to my UX & Human Factors research portfolio, showcasing projects completed at Amazon, Uber, NASA, Mercedes-Benz, and Harvard.",
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
      "Welcome to my UX & Human Factors research portfolio, showcasing projects completed at Amazon, Uber, NASA, Mercedes-Benz, and Harvard.",
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
      "Welcome to my UX & Human Factors research portfolio, showcasing projects completed at Amazon, Uber, NASA, Mercedes-Benz, and Harvard.",
    images: ["/assets/talk.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="text-white cursor-none overflow-x-hidden">
        <GradientBackground />
        {children}
      </body>
    </html>
  );
}


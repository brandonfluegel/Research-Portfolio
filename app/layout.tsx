// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GradientBackground from "@/components/GradientBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brandon Fluegel, Ph.D. | UX & Human Factors Researcher",
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

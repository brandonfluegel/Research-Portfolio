import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Research Portfolio",
  description: "A visually stunning portfolio showcasing research expertise.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white cursor-none overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}

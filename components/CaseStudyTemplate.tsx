"use client";

import Link from "next/link";
import { ReactNode } from "react";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

interface Highlight {
  label: string;
  value: string;
}

interface Section {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

interface CaseStudyTemplateProps {
  title: string;
  subtitle: string;
  organization: string;
  timeframe?: string;
  heroMedia?: ReactNode;
  highlights: Highlight[];
  overview: string;
  contributions: string[];
  sections: Section[];
  cta?: {
    label: string;
    href: string;
  };
}

export default function CaseStudyTemplate({
  title,
  subtitle,
  organization,
  timeframe,
  heroMedia,
  highlights,
  overview,
  contributions,
  sections,
  cta,
}: CaseStudyTemplateProps) {
  return (
    <main className="relative min-h-screen px-4 pb-24 text-white sm:px-8">
      <Cursor />
      <Navbar />
      <ScrollToTop />

      <article className="mx-auto mt-32 flex max-w-5xl flex-col gap-12 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur sm:p-12">
        <header className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm uppercase tracking-[0.3em] text-indigo-200/70">
            <span>{organization}</span>
            {timeframe ? <span>{timeframe}</span> : null}
          </div>

          <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
          <p className="text-lg text-gray-200">{subtitle}</p>

          <div className="flex flex-wrap gap-4 pt-4">
            {highlights.map((highlight) => (
              <div
                key={`${highlight.label}-${highlight.value}`}
                className="rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-indigo-100"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-indigo-200/70">
                  {highlight.label}
                </p>
                <p className="mt-1 text-base font-semibold text-white">{highlight.value}</p>
              </div>
            ))}
          </div>
        </header>

        {heroMedia ? (
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-xl">
            {heroMedia}
          </div>
        ) : null}

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-lg leading-relaxed text-gray-200">{overview}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">My contributions</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {contributions.map((contribution) => (
              <li
                key={contribution}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-gray-200"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" aria-hidden />
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </section>

        {sections.map((section) => (
          <section key={section.heading} className="space-y-4">
            <h2 className="text-2xl font-semibold">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-gray-200">
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-5 text-gray-200">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        {cta ? (
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-gray-200">
            <div>
              <h2 className="text-2xl font-semibold text-white">Let’s build your next study</h2>
              <p className="mt-1 text-base text-gray-300">
                Need a similar engagement? I’m available for short-term consultations and embedded research partnerships.
              </p>
            </div>
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-400"
            >
              {cta.label}
            </Link>
          </div>
        ) : null}
      </article>
    </main>
  );
}

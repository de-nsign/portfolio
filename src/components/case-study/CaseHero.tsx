"use client";

import type { CaseStudy } from "@/lib/projects/types";
import Link from "next/link";

type Props = {
  study: CaseStudy;
};

export default function CaseHero({ study }: Props) {
  return (
    <section className="relative bg-white text-black">
      {/* Back link */}
      <div className="px-6 pt-6">
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 text-label uppercase text-black/50 hover:text-black transition-colors"
        >
          &larr; Back to Works
        </Link>
      </div>

      {/* Title & Meta */}
      <div className="px-6 pt-12 pb-10 md:pt-20 md:pb-16 max-w-5xl">
        <div className="flex flex-wrap gap-2 mb-6">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="text-label uppercase px-3 py-1 border border-divider-light rounded-full text-black/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="case-hero-title font-display font-black uppercase text-display-lg md:text-display-xl leading-none">
          {study.title}
        </h1>

        <p className="case-hero-subtitle mt-4 text-lg md:text-xl text-black/60 max-w-2xl">
          {study.subtitle}
        </p>

        {/* Meta grid */}
        <div className="case-hero-meta grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-divider-light">
          <div>
            <span className="text-label uppercase text-black/40 block mb-1">Client</span>
            <span className="text-sm font-medium">{study.client}</span>
          </div>
          <div>
            <span className="text-label uppercase text-black/40 block mb-1">Role</span>
            <span className="text-sm font-medium">{study.role}</span>
          </div>
          <div>
            <span className="text-label uppercase text-black/40 block mb-1">Industry</span>
            <span className="text-sm font-medium">{study.industry}</span>
          </div>
          <div>
            <span className="text-label uppercase text-black/40 block mb-1">Year</span>
            <span className="text-sm font-medium">{study.year}</span>
          </div>
        </div>

        {/* Live link */}
        <a
          href={study.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 text-sm font-medium uppercase tracking-widest text-accent-orange hover:text-accent-red transition-colors"
        >
          View Live Site &rarr;
        </a>
      </div>

      {/* Hero image */}
      <div className="case-hero-image relative w-full aspect-[16/9] bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-gray-400 text-label uppercase tracking-widest">
            {study.title} — Hero
          </span>
        </div>
      </div>
    </section>
  );
}

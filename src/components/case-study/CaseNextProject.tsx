"use client";

import Link from "next/link";

type Props = {
  slug: string;
  name: string;
  image: string;
};

export default function CaseNextProject({ slug, name, image }: Props) {
  return (
    <div className="case-section bg-white text-black border-t border-divider-light">
      <Link
        href={`/projects/${slug}`}
        className="group block px-6 py-16 md:py-24 hover:bg-neutral-50 transition-colors"
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <span className="text-label uppercase text-black/40 block mb-3">
              Next Project
            </span>
            <h3 className="font-display font-bold text-3xl md:text-5xl uppercase group-hover:text-accent-orange transition-colors">
              {name}
            </h3>
          </div>
          <span className="text-4xl md:text-6xl text-black/20 group-hover:text-accent-orange transition-colors">
            &rarr;
          </span>
        </div>
      </Link>
    </div>
  );
}

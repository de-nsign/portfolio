"use client";

type Props = {
  overview: string;
};

export default function CaseOverview({ overview }: Props) {
  return (
    <div className="case-section px-6 py-16 md:py-24 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <span className="text-label uppercase text-accent-orange tracking-widest block mb-6">
          Overview
        </span>
        <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-black/80">
          {overview}
        </p>
      </div>
    </div>
  );
}

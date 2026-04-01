"use client";

type Props = {
  label: string;
  heading: string;
  body: string;
};

export default function CaseTextSection({ label, heading, body }: Props) {
  return (
    <div className="case-section px-6 py-16 md:py-24 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <span className="text-label uppercase text-accent-orange tracking-widest block mb-4">
          {label}
        </span>
        <h2 className="font-display font-bold text-2xl md:text-4xl uppercase leading-tight mb-6">
          {heading}
        </h2>
        <p className="text-base md:text-lg text-black/70 leading-relaxed max-w-3xl">
          {body}
        </p>
      </div>
    </div>
  );
}

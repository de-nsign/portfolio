"use client";

type Step = {
  number: string;
  title: string;
  description: string;
};

type Props = {
  steps: Step[];
};

export default function CaseProcess({ steps }: Props) {
  return (
    <div className="case-section px-6 py-16 md:py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <span className="text-label uppercase text-accent-orange tracking-widest block mb-8">
          Process
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="case-process-step border-t border-divider-dark pt-6"
            >
              <span className="text-label text-white/30 block mb-3">
                ({step.number})
              </span>
              <h3 className="font-display font-bold text-xl uppercase mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

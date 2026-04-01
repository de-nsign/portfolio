"use client";

type Metric = {
  value: string;
  label: string;
};

type Props = {
  items: Metric[];
};

export default function CaseMetrics({ items }: Props) {
  return (
    <div className="case-section px-6 py-16 md:py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <span className="text-label uppercase text-accent-orange tracking-widest block mb-10">
          Results
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="case-metric">
              <span className="font-display font-black text-4xl md:text-5xl block mb-2">
                {item.value}
              </span>
              <span className="text-label uppercase text-white/50">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

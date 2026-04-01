"use client";

type Feature = {
  title: string;
  description: string;
};

type Props = {
  heading: string;
  items: Feature[];
};

export default function CaseFeatures({ heading, items }: Props) {
  return (
    <div className="case-section px-6 py-16 md:py-24 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display font-bold text-2xl md:text-4xl uppercase leading-tight mb-10">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="case-feature border-t border-divider-light pt-5"
            >
              <h3 className="font-display font-bold text-base uppercase mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

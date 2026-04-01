"use client";

type Tech = {
  name: string;
  category: string;
};

type Props = {
  technologies: Tech[];
};

export default function CaseTechStack({ technologies }: Props) {
  return (
    <div className="case-section px-6 py-16 md:py-24 bg-neutral-50 text-black">
      <div className="max-w-5xl mx-auto">
        <span className="text-label uppercase text-accent-orange tracking-widest block mb-8">
          Tech Stack
        </span>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="case-tech-item flex items-center gap-3 px-5 py-3 border border-divider-light rounded-full"
            >
              <span className="text-sm font-medium">{tech.name}</span>
              <span className="text-label text-black/30 uppercase">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

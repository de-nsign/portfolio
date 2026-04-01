"use client";

type Props = {
  src: string;
  alt: string;
  caption?: string;
};

export default function CaseImage({ src, alt, caption }: Props) {
  return (
    <div className="case-section bg-white">
      <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-gray-400 text-label uppercase tracking-widest">
            {alt}
          </span>
        </div>
      </div>
      {caption && (
        <p className="px-6 py-3 text-sm text-black/50 max-w-4xl mx-auto">
          {caption}
        </p>
      )}
    </div>
  );
}

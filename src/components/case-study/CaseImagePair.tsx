"use client";

type Props = {
  images: { src: string; alt: string }[];
};

export default function CaseImagePair({ images }: Props) {
  return (
    <div className="case-section grid grid-cols-1 md:grid-cols-2 gap-px bg-divider-light">
      {images.map((img, i) => (
        <div key={i} className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-gray-400 text-label uppercase tracking-widest">
              {img.alt}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

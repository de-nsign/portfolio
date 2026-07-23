"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "@/lib/igaming-data";

export default function Gallery() {
  const [byProjects, setByProjects] = useState(false);

  return (
    <section className="mx-auto max-w-[1056px] px-6 pt-24">
      <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
        <h2 className="text-[24px] font-medium leading-none text-ink">Images</h2>
        <button
          onClick={() => setByProjects((v) => !v)}
          className="flex items-center gap-3 text-[16px] text-ink"
        >
          By Projects
          <span
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              byProjects ? "bg-ink" : "bg-neutral-200"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                byProjects ? "translate-x-5" : "translate-x-0.5"
              }`}
            />
          </span>
        </button>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3">
        {galleryImages.map((img, i) => (
          <div
            key={img.src + i}
            className="overflow-hidden rounded-xl bg-neutral-100"
            style={{
              gridColumn: `span ${img.span}`,
              aspectRatio: img.ratio,
            }}
          >
            <Image
              src={img.src}
              alt=""
              width={1200}
              height={800}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

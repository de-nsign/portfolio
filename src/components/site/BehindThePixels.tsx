import {
  behindThePixels,
  behindPixelsIntro,
  behindPixelsPhotos,
  behindPixelsPhotosB,
} from "@/lib/site-data";

// faint dotted grid backdrop behind each collage
const GRID_BG =
  "[background-image:radial-gradient(rgba(0,0,0,0.10)_1px,transparent_1px)] [background-size:22px_22px]";

// scattered polaroid cluster (block A)
const SCATTER_STYLES = [
  "left-0 top-8 rotate-[-8deg] z-10",
  "left-[92px] top-0 rotate-[4deg] z-20",
  "left-[188px] top-12 rotate-[9deg] z-10",
];

// hanging-strip cluster (block B)
const HANG_STYLES = [
  "left-0 top-4 rotate-[-4deg]",
  "left-[112px] top-8 rotate-[2deg]",
  "left-[224px] top-2 rotate-[6deg]",
];

export default function BehindThePixels() {
  return (
    <section className="mx-auto max-w-[1056px] px-6 pt-32">
      <h2 className="text-[40px] font-medium leading-[1.05] tracking-tight text-ink">
        Behind the pixels
      </h2>

      <p className="mt-6 max-w-[420px] text-[18px] leading-[1.35] text-neutral-500">
        {behindPixelsIntro}
      </p>

      {/* Block A — scattered polaroids on a grid + opening paragraphs */}
      <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
        <div className={`relative h-[240px] rounded-2xl ${GRID_BG}`}>
          {behindPixelsPhotos.map((src, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute h-[150px] w-[122px] rounded-[10px] border-[5px] border-white object-cover shadow-[0_14px_30px_rgba(0,0,0,0.16)] ${SCATTER_STYLES[i]}`}
            />
          ))}
        </div>

        <div className="max-w-[440px] space-y-5">
          {behindThePixels.slice(0, 2).map((p, i) => (
            <p key={i} className="text-[16px] leading-[1.5] text-ink">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Block B — closing paragraph + hanging photo strip */}
      <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 max-w-[440px] md:order-1">
          {behindThePixels.slice(2).map((p, i) => (
            <p key={i} className="text-[16px] leading-[1.5] text-ink">
              {p}
            </p>
          ))}
        </div>

        <div className="relative order-1 h-[210px] md:order-2">
          {/* string the photos hang from */}
          <div className="absolute left-6 right-6 top-6 border-t border-dashed border-neutral-300" />
          {behindPixelsPhotosB.map((src, i) => (
            <div
              key={src}
              className={`absolute ${HANG_STYLES[i]}`}
              style={{ zIndex: 10 + i }}
            >
              {/* clothespin: shaft + top spring dot */}
              <span className="absolute left-1/2 top-[-11px] z-10 h-[14px] w-[7px] -translate-x-1/2 rounded-[2px] bg-[#e23b2e] shadow-[0_1px_2px_rgba(0,0,0,0.25)]" />
              <span className="absolute left-1/2 top-[-8px] z-20 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/70" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="h-[130px] w-[112px] rounded-[8px] border-[5px] border-white object-cover shadow-[0_12px_26px_rgba(0,0,0,0.16)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

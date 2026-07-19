import {
  behindThePixels,
  behindPixelsIntro,
  behindPixelsPhotos,
} from "@/lib/site-data";

const PHOTO_STYLES = [
  "left-2 top-6 rotate-[-7deg] z-10",
  "left-24 top-0 rotate-[3deg] z-20",
  "left-44 top-10 rotate-[8deg] z-10",
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

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        {/* Photo collage */}
        <div className="relative h-[260px]">
          {behindPixelsPhotos.map((src, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute h-[190px] w-[150px] rounded-2xl border-4 border-white object-cover shadow-[0_14px_34px_rgba(0,0,0,0.16)] ${PHOTO_STYLES[i]}`}
            />
          ))}
        </div>

        <div className="max-w-[440px] space-y-5">
          {behindThePixels.map((p, i) => (
            <p key={i} className="text-[16px] leading-[1.5] text-ink">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

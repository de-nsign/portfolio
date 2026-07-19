import { behindThePixels, behindPixelsIntro } from "@/lib/site-data";

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
        <div />
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

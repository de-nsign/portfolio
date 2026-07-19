import { behindThePixels } from "@/lib/site-data";
import SectionHeader from "./SectionHeader";

export default function BehindThePixels() {
  return (
    <section className="mx-auto max-w-[1056px] px-6 pt-32">
      <SectionHeader title="Behind the pixels" />

      <div className="mt-10 grid gap-12 md:grid-cols-[minmax(0,420px)_1fr]">
        <div className="max-w-[640px] space-y-5 md:col-start-2">
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

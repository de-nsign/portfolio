import { aboutParagraphs } from "@/lib/site-data";
import SectionHeader from "./SectionHeader";

export default function AboutMe() {
  return (
    <section className="mx-auto max-w-[1056px] px-6 pt-24">
      <SectionHeader title="About Me" />

      <div className="mt-10 grid gap-12 md:grid-cols-[minmax(0,420px)_1fr]">
        <div className="space-y-5">
          <p className="text-[13px] font-semibold text-ink">(I)</p>
          {aboutParagraphs.map((p, i) => (
            <p key={i} className="text-[14px] leading-relaxed text-ink">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

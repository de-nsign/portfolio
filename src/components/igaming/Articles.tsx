import { articles } from "@/lib/igaming-data";
import SectionHeader from "./SectionHeader";

export default function Articles() {
  return (
    <section className="mx-auto max-w-[900px] px-6 pt-32">
      <SectionHeader title="Articles" count={3} />

      <div className="mt-8 divide-y divide-neutral-100">
        {articles.map((a) => (
          <a
            key={a.title}
            href="#"
            className="flex items-center justify-between py-5 transition-opacity hover:opacity-60"
          >
            <span className="text-[16px] font-semibold text-ink">{a.title}</span>
            <span className="text-[16px] text-neutral-400">{a.meta}</span>
          </a>
        ))}
      </div>

      <a
        href="#"
        className="mt-6 inline-block text-[16px] text-neutral-500 transition-colors hover:text-ink"
      >
        3 More Articles
      </a>
    </section>
  );
}

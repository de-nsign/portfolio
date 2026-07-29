import Image from "next/image";
import { sideProjects } from "@/lib/igaming-data";
import SectionHeader from "./SectionHeader";

/* Side Projects — concept explorations shown as phone mockups on soft tinted
   panels, in a two-column grid (arseniivostrikov.com "Designs" layout). Each
   item carries monospace category tags and a title below the panel. No case
   pages, so the cards are static. */

// Soft panel tints, cycled per card so the grid reads as a warm, varied set.
const PANEL_TINTS = ["#f2eee7", "#eceef0", "#efedf2", "#f4ece2"];

function PhoneMock({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="relative w-[62%] max-w-[232px] rounded-[2.2rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-[0_34px_64px_-26px_rgba(15,10,5,0.5)]">
      <div className="relative aspect-[9/19] overflow-hidden rounded-[1.7rem] bg-neutral-800">
        {src ? (
          <Image src={src} alt={alt} fill className="object-cover object-top" />
        ) : null}
        {/* Dynamic-island pill */}
        <div className="absolute left-1/2 top-2 z-10 h-[18px] w-[72px] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  );
}

export default function SideProjects() {
  return (
    <section className="mx-auto max-w-[900px] px-6 pt-32">
      <SectionHeader title="Side Projects" count={sideProjects.length} />

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
        {sideProjects.map((p, i) => {
          const kinds = p.tags.slice(0, 2).map((t) => t.toLowerCase());
          return (
            <article key={p.slug}>
              <div
                className="flex items-center justify-center rounded-[28px] py-12"
                style={{ backgroundColor: PANEL_TINTS[i % PANEL_TINTS.length] }}
              >
                <PhoneMock src={p.image} alt={`${p.title} — concept`} />
              </div>

              <p className="mt-5 flex items-center gap-2 font-mono text-[13px] tracking-wide text-neutral-400">
                {kinds.map((k, j) => (
                  <span key={k} className="flex items-center gap-2">
                    {j > 0 && <span aria-hidden>·</span>}
                    {k}
                  </span>
                ))}
              </p>
              <h3 className="mt-1.5 text-[18px] font-medium tracking-tight text-ink">
                {p.title}
              </h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}

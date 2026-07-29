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
    <div className="relative w-[62%] max-w-[232px] rounded-[2.2rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-[0_5px_15px_0_rgba(90,50,40,0.15),0_4px_8px_0_rgba(80,40,30,0.1)] transition-[transform,box-shadow] duration-[400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform group-hover:-translate-y-[15px] group-hover:shadow-[0_10px_21px_0_rgba(100,60,50,0.1),0_47px_72px_0_rgba(100,60,50,0.4)]">
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

      <div className="mt-10 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2">
        {sideProjects.map((p, i) => {
          const kinds = p.tags.slice(0, 2).map((t) => t.toLowerCase());
          return (
            <article key={p.slug} className="group">
              <div
                className="relative flex justify-center px-6 pt-12 pb-20"
                style={{ backgroundColor: PANEL_TINTS[i % PANEL_TINTS.length] }}
              >
                <PhoneMock src={p.image} alt={`${p.title} — concept`} />

                {/* Caption tucked into the bottom corners — title left, tags right */}
                <h3 className="absolute bottom-6 left-6 text-[17px] font-medium tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="absolute bottom-6 right-6 font-mono text-[13px] tracking-wide text-neutral-500">
                  {kinds.join(" · ")}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

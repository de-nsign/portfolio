import Image from "next/image";
import { galleryImages } from "@/lib/igaming-data";
import SectionHeader from "./SectionHeader";

/* Side Projects — a masonry grid of design experiments and visual explorations,
   sitting just under the case studies in Latest Projects. */
export default function SideProjects() {
  return (
    <section className="mx-auto max-w-[900px] px-6 pt-32">
      <SectionHeader title="Side Projects" count={galleryImages.length} />

      <p className="mt-6 max-w-[560px] text-[15px] leading-relaxed text-neutral-500">
        Concepts, interface experiments and visual explorations I make on the
        side — where I try out new tools, motion and aesthetics away from the
        product work.
      </p>

      <div className="mt-10 grid grid-cols-3 gap-3">
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

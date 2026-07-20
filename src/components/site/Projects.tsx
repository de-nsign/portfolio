import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site-data";
import { latestProjects } from "@/lib/site-data";
import SectionHeader from "./SectionHeader";
import ProjectLogo from "./ProjectLogo";
import FigmaEmbed from "./FigmaEmbed";

const tile = "rounded-2xl bg-neutral-100";

// Placeholder image grids that reuse the gallery vocabulary of the
// mchubina.ru "Опыт и проекты" block. Imagery is temporary — only the grid
// arrangement is being ported, so every tile is a neutral placeholder.
//   duo  — two tall tiles side by side
//   quad — a full-width band with four phone-shaped tiles in a row
//   asym — two stacked tiles on the left, one tall tile on the right
type GalleryLayout = "duo" | "quad" | "asym";

const galleryLayouts: GalleryLayout[] = ["duo", "quad", "asym"];

function ProjectGallery({
  layout,
  images,
  alt,
}: {
  layout: GalleryLayout;
  images?: string[];
  alt: string;
}) {
  // Real imagery — render a two-column grid of full-bleed frames.
  if (images && images.length > 0) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((src) => (
          <div key={src} className={`overflow-hidden ${tile}`}>
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  if (layout === "quad") {
    return (
      <div className="rounded-2xl bg-neutral-50 p-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className={`${tile} aspect-[9/16]`} />
          <div className={`${tile} aspect-[9/16]`} />
          <div className={`${tile} aspect-[9/16]`} />
          <div className={`${tile} aspect-[9/16]`} />
        </div>
      </div>
    );
  }

  if (layout === "asym") {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className={`${tile} aspect-[16/10]`} />
          <div className={`${tile} aspect-[16/10]`} />
        </div>
        <div className={`${tile} aspect-auto min-h-[320px]`} />
      </div>
    );
  }

  // duo
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className={`${tile} aspect-[4/5]`} />
      <div className={`${tile} aspect-[4/5]`} />
    </div>
  );
}

export default function Projects({
  title = "Latest Projects",
  count,
  items = latestProjects,
  topPadding = "pt-24",
}: {
  title?: string;
  count?: number;
  items?: Project[];
  topPadding?: string;
}) {
  return (
    <section className={`mx-auto max-w-[1056px] px-6 ${topPadding}`}>
      <SectionHeader title={title} count={count ?? items.length} />

      <div className="mt-14 flex flex-col gap-28">
        {items.map((p, i) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group block"
          >
            {/* Cover with the logo overlaid, then title, tags and description */}
            <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`${p.title} — cover`}
                  width={1920}
                  height={1080}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  priority={i === 0}
                />
              ) : p.figma ? (
                <FigmaEmbed src={p.figma} title={`${p.title} — Figma`} />
              ) : (
                <ProjectGallery
                  layout={galleryLayouts[i % galleryLayouts.length]}
                  images={p.gallery}
                  alt={p.title}
                />
              )}
              <div className="absolute left-4 top-4">
                <ProjectLogo
                  logo={p.logo}
                  logoBg={p.logoBg}
                  logoText={p.logoText}
                  title={p.title}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-8">
              <div>
                <h3 className="text-[24px] font-medium leading-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-1 text-[15px] text-neutral-400">
                  {p.role} · {p.period} · {p.tags.join(" · ")}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 text-[15px] text-neutral-500 transition-colors group-hover:text-ink">
                See Details <span aria-hidden>↗</span>
              </span>
            </div>

            <p className="mt-4 max-w-[720px] text-[17px] leading-[1.5] text-neutral-500">
              {p.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

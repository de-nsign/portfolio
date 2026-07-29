import Image from "next/image";

/* About Me — ported from the "Обо мне" block on samulenkov.com: a centered
   heading, a large landscape portrait, a left-aligned column of prose, a
   scattered cluster of personal photos, and a closing paragraph. */

// Personal-life photo cluster. PLACEHOLDERS for now — swap these three for real
// lifestyle shots (the reference uses candid photos, not headshots).
const lifePhotos = [
  {
    src: "/images/profile/profile-portrait-gradient.png",
    className:
      "left-0 top-4 z-10 h-[220px] w-[170px] -rotate-6 sm:h-[300px] sm:w-[230px]",
  },
  {
    src: "/images/hero/denis-portrait.webp",
    className:
      "left-1/2 top-0 z-20 h-[240px] w-[185px] -translate-x-1/2 rotate-1 sm:h-[330px] sm:w-[255px]",
  },
  {
    src: "/images/profile/profile-portrait-gradient-dark.png",
    className:
      "right-0 top-10 z-10 h-[220px] w-[170px] rotate-6 sm:h-[300px] sm:w-[230px]",
  },
];

export default function AboutMe() {
  return (
    <section className="mx-auto max-w-[900px] px-6 pt-32">
      <h2 className="text-center text-[40px] font-semibold leading-[1.1] tracking-tight text-ink">
        About Me
      </h2>

      {/* Large landscape portrait */}
      <div className="mx-auto mt-12 aspect-[3/2] w-full max-w-[560px] overflow-hidden rounded-[28px] bg-neutral-100">
        <Image
          src="/images/hero/denis-portrait.webp"
          alt="Denis Artemenko"
          width={1120}
          height={746}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Paragraph 1 — left-aligned under the portrait */}
      <div className="mx-auto mt-10 max-w-[560px] text-[16px] leading-relaxed text-neutral-600">
        <p>
          Seven years designing for iGaming, FinTech and complex digital
          platforms. Today I lead product design across a group of casino
          brands; before that I worked across international teams — enterprise
          security platforms, a bank&apos;s public website, and a run of web and
          mobile products. I like hard problems, ambitious goals and long
          roadmaps. I look at a product widely and build solutions other teams
          can reuse, so the work lifts not only my own metrics but my
          colleagues&apos; too. I care about process as much as pixels, and
          improve both.
        </p>
      </div>

      {/* Scattered personal-photo cluster */}
      <div className="relative mx-auto mt-16 h-[280px] w-full max-w-[520px] sm:h-[360px]">
        {lifePhotos.map((photo, i) => (
          <div
            key={i}
            className={`absolute overflow-hidden rounded-[22px] bg-neutral-100 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.35)] ${photo.className}`}
          >
            <Image
              src={photo.src}
              alt=""
              width={520}
              height={680}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Paragraph 2 */}
      <div className="mx-auto mt-16 max-w-[560px] text-[16px] leading-relaxed text-neutral-600">
        <p>
          Based in Tbilisi, Georgia, I work remotely with distributed teams. I
          keep a wide field of view — studying the market and sharing the cases
          and findings I dig up with the whole team — and I don&apos;t stop
          until the flow, the product and the process are sharper than I found
          them.
        </p>
      </div>
    </section>
  );
}

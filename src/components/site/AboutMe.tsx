import Image from "next/image";

/* About Me — ported from the "Обо мне" block on samulenkov.com: a centered
   heading, a rounded portrait, and a narrow left-aligned column of prose. */
export default function AboutMe() {
  return (
    <section className="mx-auto max-w-[900px] px-6 pt-32">
      <h2 className="text-center text-[40px] font-semibold leading-[1.1] tracking-tight text-ink">
        About Me
      </h2>

      <div className="mx-auto mt-12 w-full max-w-[360px] overflow-hidden rounded-[28px] bg-neutral-100">
        <Image
          src="/images/hero/denis-portrait.webp"
          alt="Denis Artemenko"
          width={720}
          height={720}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto mt-10 max-w-[460px] space-y-6 text-[16px] leading-relaxed text-neutral-600">
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

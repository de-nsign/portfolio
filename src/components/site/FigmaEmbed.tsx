import SectionHeader from "./SectionHeader";

/**
 * Responsive Figma embed (variant 2).
 * The iframe fills a ratio-locked box, so it scales with the page width.
 * Inside the embed.figma.com player the user can pan and zoom the canvas.
 */
export default function FigmaEmbed({
  title = "Design System",
  src,
  ratio = 56.25, // 16:9 — set to (height / width * 100) for another aspect
}: {
  title?: string;
  src: string;
  ratio?: number;
}) {
  return (
    <section className="mx-auto max-w-[1056px] px-6 pt-32">
      <SectionHeader title={title} />

      <div
        className="relative mt-6 w-full overflow-hidden rounded-xl border border-neutral-200"
        style={{ paddingTop: `${ratio}%` }}
      >
        <iframe
          title={title}
          src={src}
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </section>
  );
}

/**
 * Responsive Figma embed (variant 2) — a ratio-locked frame.
 * The iframe fills the box, so it scales with the container width.
 * Inside the embed.figma.com player the user can pan and zoom the canvas.
 * Rendered on its own (no heading) so it can drop into any section —
 * e.g. as the showcase of a project in Latest Projects.
 */
export default function FigmaEmbed({
  src,
  title = "Figma file",
  ratio = 62.5, // 16:10 — set to (height / width * 100) for another aspect
}: {
  src: string;
  title?: string;
  ratio?: number;
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50"
      style={{ paddingTop: `${ratio}%` }}
    >
      <iframe
        title={title}
        src={src}
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}

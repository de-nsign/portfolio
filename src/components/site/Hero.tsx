const links = [
  { label: "CV", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

function ArrowUpRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="opacity-70"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="flex flex-col items-center px-6 pt-24 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero/nikita-photo.png"
        alt="Никита"
        width={131}
        height={167}
        className="h-[167px] w-[131px] object-contain"
      />

      <p className="mt-5 text-[17px] text-neutral-500">Привет, я Никита!</p>

      <h1 className="hero-heading mt-3 max-w-[420px] text-[40px] font-semibold leading-[1.05] tracking-[-0.04em]">
        Продуктовый дизайнер и ментор
      </h1>

      <p className="mt-5 max-w-[420px] text-[17px] leading-[1.6] text-neutral-500">
        Разрабатываю цифровые продукты от идеи до запуска, опираясь на стратегию,
        бизнес-цели и потребности пользователей. Сейчас — в Банке Точка.
        Параллельно менторю дизайнеров в Duo Sapiens
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-6 py-3 text-[17px] text-ink transition-colors hover:bg-neutral-200"
          >
            {l.label}
            <ArrowUpRight />
          </a>
        ))}
      </div>
    </section>
  );
}

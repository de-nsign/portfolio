export type HeroTab = "Info" | "Images" | "About";
const tabs: HeroTab[] = ["Info", "Images", "About"];
const socials = ["LinkedIn", "Telegram", "Email", "Resume"];

export default function Hero({
  active,
  onTab,
}: {
  active: HeroTab;
  onTab: (t: HeroTab) => void;
}) {
  return (
    <section className="flex flex-col items-center justify-center px-6 pt-24 text-center">
      <div className="relative h-[313px] w-[313px] max-w-full">
        <video
          className="h-full w-full object-cover dark:hidden"
          src="/videos/profile/profile-portrait-light.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <video
          className="hidden h-full w-full object-cover dark:block"
          src="/videos/profile/profile-portrait-dark.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <img
          src="/images/profile/profile-portrait-gradient.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -bottom-2 left-1/2 w-[365px] max-w-none -translate-x-1/2 dark:hidden"
        />
        <img
          src="/images/profile/profile-portrait-gradient-dark.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -bottom-2 left-1/2 hidden w-[365px] max-w-none -translate-x-1/2 dark:block"
        />
      </div>

      <a
        href="#"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#DFF3E4] px-4 py-1.5 text-[13px] text-[#1c1b1b] transition-colors hover:bg-[#d2edd9]"
      >
        Schedule a Call
        <span aria-hidden>→</span>
      </a>

      <h1 className="mt-6 text-[34px] font-semibold tracking-tight text-ink sm:text-[38px]">
        Vlad Kalashnikov
      </h1>

      <p className="mt-3 max-w-[420px] text-[15px] leading-relaxed text-ink">
        Senior Product Designer with expertise in digital products across B2C,
        B2B, Fintech and Web3. Author of a{" "}
        <a href="#" className="text-[#3b6fe0] hover:underline">
          Telegram channel
        </a>{" "}
        about design.
      </p>

      <div className="mt-5 flex items-center gap-5 text-[14px] text-ink">
        {socials.map((s) => (
          <a key={s} href="#" className="transition-opacity hover:opacity-60">
            {s}
          </a>
        ))}
      </div>

      <div className="mt-6 inline-flex items-center rounded-full bg-neutral-100 p-1 text-[13px]">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => onTab(t)}
            className={`rounded-full px-4 py-1.5 transition-colors ${
              active === t
                ? "bg-white text-ink shadow-sm"
                : "text-neutral-400 hover:text-neutral-600"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </section>
  );
}

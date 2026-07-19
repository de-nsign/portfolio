import { services, servicesIntro, servicesDeck } from "@/lib/site-data";

export default function Services() {
  const n = servicesDeck.length;

  return (
    <section className="mx-auto max-w-[1056px] px-6 pt-32">
      <h2 className="text-[40px] font-medium leading-[1.05] tracking-tight text-ink">
        I&apos;ve got your back with…
      </h2>

      <p className="mt-6 max-w-[420px] text-[18px] leading-[1.35] text-neutral-500">
        {servicesIntro}
      </p>

      {/* Tightly fanned deck of project cards */}
      <div className="relative mx-auto mt-12 flex h-[200px] w-full max-w-[560px] items-center justify-center">
        {servicesDeck.map((src, i) => {
          const t = i / (n - 1) - 0.5; // -0.5 … 0.5
          const rotate = t * 14; // deg — gentle fan
          const x = t * 250; // px spread — heavy overlap
          const y = Math.abs(t) * 18; // shallow arc dip
          return (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={src}
              src={src}
              alt=""
              className="absolute h-[140px] w-[108px] rounded-xl border-[3px] border-white object-cover shadow-[0_10px_26px_rgba(0,0,0,0.12)]"
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
                zIndex: i,
              }}
            />
          );
        })}
      </div>

      {/* Column-major services list with leader lines */}
      <ul className="mt-16 grid grid-flow-col grid-cols-1 grid-rows-3 gap-x-16 sm:grid-cols-3">
        {services.map((service) => (
          <li
            key={service}
            className="flex items-baseline gap-3 py-4 text-[16px] text-ink"
          >
            <span className="shrink-0">{service}</span>
            <span className="min-w-0 flex-1 translate-y-[-4px] border-b border-dashed border-neutral-300" />
          </li>
        ))}
      </ul>
    </section>
  );
}

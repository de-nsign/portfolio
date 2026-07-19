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

      {/* Fanned deck of project cards */}
      <div className="relative mx-auto mt-14 flex h-[220px] w-full max-w-[640px] items-center justify-center">
        {servicesDeck.map((src, i) => {
          const t = i / (n - 1) - 0.5; // -0.5 … 0.5
          const rotate = t * 22; // deg
          const x = t * 380; // px spread
          const y = Math.abs(t) * 26; // arc dip
          return (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={src}
              src={src}
              alt=""
              className="absolute h-[150px] w-[120px] rounded-2xl border border-white object-cover shadow-[0_12px_30px_rgba(0,0,0,0.14)]"
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
                zIndex: i,
              }}
            />
          );
        })}
      </div>

      <ul className="mt-16 grid grid-cols-1 gap-x-16 sm:grid-cols-3">
        {services.map((service) => (
          <li
            key={service}
            className="border-b border-dashed border-neutral-300 py-4 text-[16px] text-ink"
          >
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
}

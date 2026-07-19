import { services, servicesIntro } from "@/lib/site-data";

export default function Services() {
  return (
    <section className="mx-auto max-w-[1056px] px-6 pt-32">
      <h2 className="text-[40px] font-medium leading-[1.05] tracking-tight text-ink">
        I&apos;ve got your back with…
      </h2>

      <p className="mt-6 max-w-[420px] text-[18px] leading-[1.35] text-neutral-500">
        {servicesIntro}
      </p>

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

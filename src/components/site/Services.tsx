import { services, servicesIntro } from "@/lib/site-data";
import SectionHeader from "./SectionHeader";

export default function Services() {
  return (
    <section className="mx-auto max-w-[1056px] px-6 pt-32">
      <SectionHeader title="I've got your back with…" />

      <div className="mt-10 grid gap-12 md:grid-cols-[minmax(0,420px)_1fr]">
        <p className="max-w-[420px] text-[24px] font-medium leading-[1.2] text-ink">
          {servicesIntro}
        </p>

        <ul className="flex flex-wrap content-start gap-x-3 gap-y-3 md:justify-end">
          {services.map((service) => (
            <li
              key={service}
              className="rounded-full border border-neutral-200 px-4 py-2 text-[15px] leading-none text-neutral-600"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

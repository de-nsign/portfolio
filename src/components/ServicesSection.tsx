"use client";

import { useState } from "react";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/constants";
import clsx from "clsx";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-black text-white py-24 md:py-32">
      {/* Section Title */}
      <div className="overflow-hidden px-6 mb-16">
        <h2 className="font-display text-display-lg uppercase font-black whitespace-nowrap section-title">
          Services
        </h2>
      </div>

      {/* Service Rows */}
      <div className="mt-8 border-t border-divider-dark">
        {SERVICES.map((service) => (
          <div
            key={service.number}
            className="service-row group grid grid-cols-1 md:grid-cols-[60px_200px_1fr] gap-4 md:gap-0 px-6 py-6 border-b border-divider-dark hover:bg-white/5 transition-colors cursor-default"
          >
            {/* Number */}
            <span className="text-label text-white/30 md:py-2">
              {service.number}
            </span>

            {/* Name */}
            <span className="font-display font-bold text-lg md:py-2">
              {service.name}
            </span>

            {/* Description */}
            <p className="text-sm text-white/50 max-w-lg md:py-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

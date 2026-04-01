"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initCaseStudyAnimations() {
  // Hero entrance
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

  heroTl
    .from(".case-hero-title", { y: 60, opacity: 0, duration: 1 })
    .from(".case-hero-subtitle", { y: 30, opacity: 0, duration: 0.7 }, "-=0.4")
    .from(".case-hero-meta > div", { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3")
    .from(".case-hero-image", { y: 40, opacity: 0, duration: 0.8 }, "-=0.3");

  // Sections fade in on scroll
  gsap.utils.toArray<HTMLElement>(".case-section").forEach((section) => {
    gsap.from(section, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Process steps stagger
  gsap.utils.toArray<HTMLElement>(".case-process-step").forEach((step, i) => {
    gsap.from(step, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.15,
      scrollTrigger: {
        trigger: step,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Features stagger
  gsap.utils.toArray<HTMLElement>(".case-feature").forEach((item, i) => {
    gsap.from(item, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      delay: i * 0.08,
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });

  // Metrics count-up feel
  gsap.utils.toArray<HTMLElement>(".case-metric").forEach((metric, i) => {
    gsap.from(metric, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.12,
      scrollTrigger: {
        trigger: metric,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Tech stack items
  gsap.utils.toArray<HTMLElement>(".case-tech-item").forEach((item, i) => {
    gsap.from(item, {
      scale: 0.9,
      opacity: 0,
      duration: 0.4,
      delay: i * 0.06,
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });
}

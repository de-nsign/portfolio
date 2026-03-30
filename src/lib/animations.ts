"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initHeroAnimation() {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(".hero-name", {
    y: 60,
    opacity: 0,
    duration: 1.2,
  })
    .from(
      ".hero-tagline",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.4"
    )
    .from(
      ".hero-footer span",
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      },
      "-=0.3"
    );

  return tl;
}

export function initSectionTitleParallax() {
  // Empty function, functionality removed by user request
}

export function initGradientVisibility() {
  // Gradient canvas stays at full opacity — no scroll-based fade
}

export function initScrollAnimations() {
  // Works cards fade in
  gsap.utils.toArray<HTMLElement>(".works-cards > div").forEach((card, i) => {
    gsap.from(card, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Service rows fade in
  gsap.utils.toArray<HTMLElement>(".service-row").forEach((row, i) => {
    gsap.from(row, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.05,
      scrollTrigger: {
        trigger: row,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });

  // Process steps fade in
  gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, i) => {
    gsap.from(step, {
      y: 30,
      opacity: 0,
      duration: 0.7,
      delay: i * 0.15,
      scrollTrigger: {
        trigger: step,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Testimonial cards staggered fade in
  gsap.utils
    .toArray<HTMLElement>(".testimonial-card")
    .forEach((card) => {
      gsap.from(card, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

  // Stat numbers fade in
  gsap.utils.toArray<HTMLElement>(".stat-item").forEach((item, i) => {
    gsap.from(item, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
}

export function initAllAnimations() {
  initHeroAnimation();
  initSectionTitleParallax();
  initGradientVisibility();
  initScrollAnimations();
}

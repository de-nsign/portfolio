import type { CaseStudy } from "./types";

export const domsvech: CaseStudy = {
  slug: "domsvech",
  title: "Dom Svech",
  subtitle: "Online Candle-Making Academy",
  client: "Dom Svech",
  role: "Design & Development",
  industry: "Education / E-commerce",
  year: "2024",
  liveUrl: "https://domm-svech.webflow.io/",
  heroImage: "/images/projects/domsvech/hero.jpg",
  tags: ["Web Design", "Webflow Development", "Landing Page", "Conversion Optimization", "E-learning"],
  overview:
    "Dom Svech is a Ukrainian candle-making academy offering structured online courses that transform craft enthusiasts into candle business owners. They needed a high-converting landing page that would communicate course value across three pricing tiers, showcase student transformations, and drive enrollment through an integrated payment system.",
  sections: [
    {
      type: "text",
      label: "Challenge",
      heading: "Selling a Craft in a Digital World",
      body: "The candle-making education market is fragmented — most courses are sold through Instagram posts and DMs with no structured sales funnel. Dom Svech needed a dedicated landing page that would establish authority, present an 11-module curriculum in a digestible format, and convert visitors into paying students across three pricing tiers — all while maintaining the warm, artisanal aesthetic of the handmade candle world.",
    },
    {
      type: "image",
      src: "/images/projects/domsvech/hero-full.jpg",
      alt: "Dom Svech landing page hero section with course title and candle product photography",
    },
    {
      type: "process",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "Studied the Ukrainian craft education market, competitor landing pages, and student buying patterns for online course products in the handmade niche.",
        },
        {
          number: "02",
          title: "Strategy",
          description:
            "Designed a conversion funnel: transformation outcomes first, then social proof, curriculum breakdown, and three-tier pricing — all leading to WayForPay checkout integration.",
        },
        {
          number: "03",
          title: "Design",
          description:
            "Created a clean, product-focused visual language with neutral tones and generous photography — letting the candle products speak for themselves while maintaining a premium feel.",
        },
        {
          number: "04",
          title: "Development",
          description:
            "Built on Webflow for rapid deployment and client editability. Integrated WayForPay payment gateway, Google Analytics with conversion tracking, and responsive breakpoints for mobile shoppers.",
        },
      ],
    },
    {
      type: "text",
      label: "Solution",
      heading: "A Funnel That Teaches Before It Sells",
      body: "The page follows a deliberate narrative arc: it opens with transformation outcomes (what students will achieve), builds credibility through a detailed 11-module curriculum (from wax fundamentals to crystal candle techniques), reinforces trust with video testimonials from past graduates, and closes with three clearly differentiated pricing tiers — Silver, Gold, and Platinum — each with transparent feature comparison. WayForPay integration enables instant checkout without leaving the page.",
    },
    {
      type: "image",
      src: "/images/projects/domsvech/pricing.jpg",
      alt: "Three pricing tiers — Silver, Gold, and Platinum — with feature comparison and course access durations",
    },
    {
      type: "features",
      heading: "Key Features",
      items: [
        {
          title: "11-Module Curriculum",
          description:
            "Comprehensive course structure covering wax types, container candles, botanical designs, concrete techniques, gel variations, aroma diffusers, and luxury crystal finishing.",
        },
        {
          title: "Three-Tier Pricing",
          description:
            "Silver ($109), Gold ($129), and Platinum ($159) tiers with escalating content access, feedback duration, and advanced technique modules.",
        },
        {
          title: "Transformation Outcomes",
          description:
            "Before/after scenarios showing students' journey from hobbyist to business owner — building emotional connection before the pricing section.",
        },
        {
          title: "Video Testimonials",
          description:
            "Real student reviews in video format providing authentic social proof and demonstrating tangible course results.",
        },
        {
          title: "WayForPay Integration",
          description:
            "Native payment gateway allowing instant enrollment and checkout directly from the landing page — zero friction between decision and purchase.",
        },
        {
          title: "Product Photography Gallery",
          description:
            "High-quality candle imagery throughout the page showcasing the variety and craftsmanship achievable through the course curriculum.",
        },
      ],
    },
    {
      type: "device-mockup",
      desktop: "/images/projects/domsvech/desktop.jpg",
      mobile: "/images/projects/domsvech/mobile.jpg",
      alt: "Dom Svech responsive design — desktop and mobile views of the course landing page",
    },
    {
      type: "text",
      label: "Design",
      heading: "Warm, Minimal & Product-First",
      body: "The visual language draws from the handmade aesthetic — warm neutral tones, generous white space, and product photography as the primary visual driver. Typography is clean and modern, allowing the candle imagery to create the emotional connection. The layout avoids visual clutter, using a linear scroll flow that mirrors the decision-making process: understand the product, see the results, evaluate the tiers, and enroll.",
    },
    {
      type: "image-pair",
      images: [
        {
          src: "/images/projects/domsvech/curriculum.jpg",
          alt: "Course curriculum section showing 11 numbered modules from wax fundamentals to crystal techniques",
        },
        {
          src: "/images/projects/domsvech/testimonials.jpg",
          alt: "Student testimonials section with video reviews and course feedback",
        },
      ],
    },
    {
      type: "tech-stack",
      technologies: [
        { name: "Webflow", category: "Platform" },
        { name: "HTML/CSS", category: "Language" },
        { name: "JavaScript", category: "Language" },
        { name: "WayForPay", category: "Payments" },
        { name: "Google Analytics", category: "Analytics" },
        { name: "Google Ads", category: "Marketing" },
      ],
    },
    {
      type: "metrics",
      items: [
        { value: "11", label: "Course Modules" },
        { value: "3", label: "Pricing Tiers" },
        { value: "< 3s", label: "Load Time" },
        { value: "10+", label: "Page Sections" },
      ],
    },
    {
      type: "image",
      src: "/images/projects/domsvech/footer.jpg",
      alt: "Dom Svech footer with Telegram support link, Instagram and TikTok social links, and legal information",
      caption: "Footer with social links (Instagram, TikTok), Telegram support, and business registration details.",
    },
  ],
  nextProject: {
    slug: "constantine-rytvin",
    name: "CONSTANTINE RYTVIN",
    image: "/images/projects/constantine-rytvin/hero.jpg",
  },
};

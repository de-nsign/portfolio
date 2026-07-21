export type Project = {
  slug: string;
  title: string;
  role: string;
  period: string;
  tags: string[];
  description: string;
  image: string;
  logo?: string;
  logoBg?: string;
  logoText?: string;
  badges?: string[];
  metrics?: string[];
  /** Real gallery imagery — when present, replaces the placeholder grid. */
  gallery?: string[];
  /** Live Figma file — when present, an interactive pan/zoom embed replaces the gallery. */
  figma?: string;
};

export const projects: Project[] = [
  {
    slug: "casino-library",
    title: "Casino Library",
    role: "System Designer",
    period: "2024 — 2026",
    tags: ["Design System", "iGaming", "Web"],
    description:
      "A dark-first design system for an online casino platform — one Figma library powering 28 brand configurations from a three-tier token architecture (primitive → semantic → component). It scales from tokens, inputs and controls up through data display, feedback and navigation blocks, with a live component playground you can pan and zoom",
    image: "/images/design-system/casino-hero.png",
    logoBg: "#0f0f10",
    logoText: "C",
    badges: ["Atoms → Blocks", "Dark-first", "Live Figma"],
    metrics: ["28 brand configs", "200+ components", "Handoff −40%"],
    figma:
      "https://embed.figma.com/design/hIEuNxuW2WPrUjve1kB7Pb/Library?node-id=0-1&embed-host=share",
  },
  {
    slug: "vtb",
    title: "VTB",
    role: "System Designer",
    period: "2021 — 2022",
    tags: ["Design System", "Fintech", "Web"],
    description:
      "The first design system for the public website of VTB — one of Russia's largest banks. An atomic library scaling from fields, inputs and controls up to blocks and full marketing pages, unified into six segment color themes plus a first-class dark mode from a single tokenized color set, and documented to every state and breakpoint as one source of truth for the team",
    image: "/images/design-system/vtb-hero.webp",
    logo: "/images/logos/vtb.png",
    badges: ["Atoms → Blocks", "6 color themes", "Dark theme"],
    metrics: [
      "Traffic ×2",
      "Scroll depth ×3",
      "Load speed ×2",
      "Bounce −64%",
      "16M visitors / 2021",
    ],
    gallery: [
      "/images/home/vtb/ds-states.webp",
      "/images/home/vtb/ds-dark.webp",
      "/images/home/vtb/ds-atoms-blocks.webp",
      "/images/home/vtb/ds-colors.webp",
    ],
  },
  {
    slug: "mobile-design-system",
    title: "ECOS",
    role: "Designer",
    period: "2025",
    tags: ["Design System", "Fintech", "Mobile"],
    description:
      "A design system for the ECOS fintech mobile app — from a scattered UI-kit to a living, token-driven system with color, typography and spacing tokens, 100+ components, a dark theme and one shared language for designers and engineers across iOS and Android.",
    image: "/images/design-system/ecos-hero.png",
    logo: "/images/design-system/ecos-app-icon.png",
    logoBg: "#0f0f10",
    logoText: "E",
    badges: ["100+ components", "Dark theme", "Mobile"],
    metrics: ["6 token tiers", "100+ components", "Token-driven"],
    gallery: [
      "/images/design-system/ecos-colors.png",
      "/images/design-system/ecos-typography-scale.png",
      "/images/design-system/ecos-icons.png",
      "/images/design-system/ecos-spacing.png",
    ],
  },
];

export type CareerEntry = {
  company: string;
  role: string;
  period: string;
  projects?: string[];
  blurb?: string;
  logo?: string;
};

export const career: CareerEntry[] = [
  {
    company: "NDA · iGaming",
    role: "System Designer",
    period: "2024 — 2026",
    blurb:
      "Built and owned a multi-brand design system that unified 5+ casino brands into a single platform — a three-tier token architecture in Figma Variables and Tokens Studio powering 28 brand configurations, cutting design-to-dev handoff time by ~40%.",
  },
  {
    company: "ValsyDev",
    role: "Product Designer",
    period: "2024",
    blurb:
      "Owned end-to-end UI/UX for web and mobile products and established the team's first shared component library and design guidelines.",
  },
  {
    company: "Pinkman",
    role: "System Designer",
    period: "2021 — 2022",
    projects: ["VTB"],
    blurb:
      "Built VTB's first design system for the bank's public website — six segment color themes plus dark mode from a single tokenized color set, documented to every state and breakpoint. The redesign shipped on the system: traffic roughly doubled and bounce on key pages dropped ~64%.",
    logo: "/images/home/pinkman-logo.svg",
  },
  {
    company: "Sectigo",
    role: "UI/UX Designer",
    period: "2020 — 2021",
    blurb:
      "Designed UI/UX for enterprise digital platforms, improving usability of complex user flows in close collaboration with stakeholders and art directors.",
  },
  {
    company: "Comodo",
    role: "Junior Designer",
    period: "2018 — 2020",
    blurb:
      "First design job — UI/UX for web platforms and marketing materials, building reusable UI components with marketing and development teams.",
  },
];

export type Article = { title: string; meta: string };

export const articles: Article[] = [
  { title: "Exercises to Boost UI Skills for Product Designers", meta: "Guide · UI" },
  { title: "A Detailed Guide to Soft Skills for a Designer", meta: "Guide · Soft Skills" },
  { title: "Mental Health in the Life of a Designer", meta: "Essay · Wellbeing" },
];

export const latestProjects = projects.slice(0, 6);
export const sideActivity = projects.slice(6);

export const servicesIntro =
  "Digital aesthetics that engage and emotionally connect with your users";

export const servicesDeck: string[] = [
  "/images/home/gallery/variants/gemx-grid.jpg",
  "/images/home/gallery/variants/ios-widget-player.jpg",
  "/images/home/gallery/variants/digital-watch-neon.jpg",
  "/images/home/gallery/variants/focus-wide.jpg",
  "/images/home/gallery/variants/smart-fridge-dashboard.jpg",
  "/images/home/gallery/variants/dreamguard-poster.jpg",
  "/images/home/gallery/variants/swipedish-green.jpg",
  "/images/home/gallery/variants/lifewell-floating.jpg",
];

export const services: string[] = [
  "Product Design",
  "Websites / Apps",
  "Design systems",
  "Animation",
  "Midjourney",
  "Visual identity",
  "Framer",
  "Marketing",
  "Iconography",
];

export type Testimonial = { quote: string; name: string; role: string };

export const testimonialsHeading = "What my colleagues\nsay about me";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Denis is genuinely driven and proactive — always hunting for the best solution, studying the market, and sharing the cases and findings he digs up with the whole design team. On top of that he's remarkably organized: clear task status, solid planning, a lot of independence, and tight sync with neighboring teams.",
    name: "Alyona P",
    role: "Head of Product Design",
  },
  {
    quote:
      "I'd rate working with Denis a 10 out of 10 — for the sheer number of ideas, the steady stream of improvement proposals, the speed he moves at, and how easily he works inside a team.",
    name: "Ilya M",
    role: "Product Owner",
  },
  {
    quote:
      "Denis is a proactive designer who builds his flows with real care and responds to design-review comments thoughtfully rather than defensively.",
    name: "Nastya Ya",
    role: "Lead Product Designer",
  },
  {
    quote:
      "Denis digs into every process down to the smallest detail, always looks at the product through the customer's eyes, and pushes to ship something genuinely modern and well-crafted.",
    name: "Sergey V",
    role: "Director of Product & Portfolio",
  },
  {
    quote:
      "Denis is a brilliant professional in the sense that he won't rest until he's made his point and made the flow, the product, and the process sharper, more interesting, and simply better.",
    name: "Nastya B",
    role: "Senior UX Writer",
  },
  {
    quote:
      "Denis is the kind of designer who always keeps a finger on the pulse of design trends.",
    name: "Sveta P",
    role: "Lead Product Designer",
  },
  {
    quote:
      "From my very first day he had my back — helping me settle in and introducing me to the whole team.",
    name: "Dasha Kh",
    role: "Junior Product Designer",
  },
  {
    quote:
      "Denis is great on every front — a real energizer for the team. He inspires people with his ideas, and you can always bounce your own ideas off him.",
    name: "Danya K",
    role: "Lead Web Developer",
  },
  {
    quote:
      "Denis has proven himself to be a thoughtful and genuinely creative specialist.",
    name: "Sasha D",
    role: "Lead Product Designer",
  },
  {
    quote:
      "Denis does outstanding work. His layouts are always well-structured and thought through down to the last detail.",
    name: "Sasha N",
    role: "Head of the Design System Team",
  },
  {
    quote:
      "Denis brings an inspiring level of commitment and a real hunger to build the best product on the market.",
    name: "Nastya K",
    role: "Scrum Master",
  },
];

export type GalleryImage = { src: string; span: 1 | 2 | 3; ratio: string };

export const galleryImages: GalleryImage[] = [
  { src: "/images/home/gallery/variants/gemx-grid.jpg", span: 2, ratio: "4 / 3" },
  { src: "/images/home/gallery/variants/ios-widget-player.jpg", span: 1, ratio: "4 / 3" },
  { src: "/images/home/gallery/variants/ios-app-icons-camera.jpg", span: 1, ratio: "4 / 3" },
  { src: "/images/home/gallery/variants/digital-watch-neon.jpg", span: 1, ratio: "4 / 3" },
  { src: "/images/home/gallery/variants/gemx-phones.jpg", span: 3, ratio: "16 / 9" },
  { src: "/images/home/gallery/variants/dreamguard-poster.jpg", span: 2, ratio: "1 / 1" },
  { src: "/images/home/gallery/ios-widget-challenge.jpg", span: 1, ratio: "4 / 3" },
  { src: "/images/home/gallery/variants/digital-watch-square.jpg", span: 1, ratio: "4 / 3" },
  { src: "/images/home/gallery/variants/lifewell-floating.jpg", span: 1, ratio: "4 / 3" },
  { src: "/images/home/gallery/variants/smart-fridge-shelf.jpg", span: 1, ratio: "4 / 3" },
  { src: "/images/home/gallery/variants/ios-widget-clock.jpg", span: 1, ratio: "4 / 3" },
  { src: "/images/home/gallery/variants/focus-wide.jpg", span: 1, ratio: "4 / 3" },
  { src: "/images/home/gallery/variants/ios-app-icons-metal.jpg", span: 1, ratio: "4 / 3" },
  { src: "/images/home/gallery/variants/smart-fridge-dashboard.jpg", span: 1, ratio: "4 / 3" },
  { src: "/images/home/gallery/variants/swipedish-green.jpg", span: 1, ratio: "4 / 3" },
];

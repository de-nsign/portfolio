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
  // Hidden for now — Casino Design placeholder ("пустышка"). Stub case still
  // lives at /projects/casino-design; re-add this card to surface it.
  // {
  //   slug: "casino-design",
  //   title: "Casino Design",
  //   role: "Product Designer",
  //   period: "2024 — 2026",
  //   tags: ["iGaming", "Product Design", "Web"],
  //   description:
  //     "Placeholder — the casino product-design case. End-to-end UI/UX for the online casino platform: content, screens and imagery coming soon.",
  //   image: "/images/design-system/casino-hero.png",
  //   logoBg: "#0f0f10",
  //   logoText: "C",
  //   badges: ["Coming soon"],
  //   metrics: ["TBD", "TBD", "TBD"],
  // },
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
    slug: "vtb-design",
    title: "VTB",
    role: "Product Designer",
    period: "2021 — 2022",
    tags: ["Web Redesign", "Fintech", "Graphics"],
    description:
      "The full redesign of the public website of VTB — one of Russia's largest banks — built to make the best banking site in the country and a more effective customer experience. A remote, multi-team process turned into shared guidelines, an interface designed atoms-up from fields and controls to full marketing pages, and a graphics language of 1000+ illustrations that set the bank apart among financial brands",
    image: "/images/projects/vtb/vtb-card-hero.png",
    logo: "/images/logos/vtb.png",
    badges: ["Atoms → Pages", "1000+ illustrations", "Dark theme"],
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
    slug: "stroika",
    title: "Stroika",
    role: "Product Designer",
    period: "2026",
    tags: ["Web Design", "Construction", "Branding"],
    description:
      "A heavy-equipment rental brand for Cyprus construction, designed end to end to read as the partner you trust with a whole site — not a vendor. One orange-forward identity, a hero that stages the entire fleet in a single frame, an equipment taxonomy across three weight classes, a 30+ service catalog where every line gets its own 3D render, and a spec-driven quote funnel built around how contractors actually order machines",
    image: "/images/projects/stroika/stroika-hero.webp",
    logoBg: "#e2571e",
    logoText: "S",
    badges: ["Brand → Site", "30+ 3D renders", "Quote funnel"],
    metrics: ["30+ machines", "3 equipment classes", "30+ services", "Single-contract"],
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
    role: "Product Designer",
    period: "2024 — 2026",
    projects: ["Casino Library"],
    blurb:
      "Design lead across five casino brands — I owned registration, deposit and retention on web and mobile, and built the multi-brand system underneath them: 28 brand configs on a three-tier token architecture that took new-brand launches from three weeks to four days. Shipped a CMS that lets marketing run bonus and promo campaigns without a designer, and rebuilt the reg-to-deposit funnel for +18% conversion.",
  },
  {
    company: "ValsyDev",
    role: "Product Designer",
    period: "2022 — 2024",
    blurb:
      "Ran UI/UX end to end on six web and mobile products, discovery through handoff. Turned fuzzy business requirements into interfaces that held up in build (−30% rework) and stood up the team's first shared component library and handoff docs — clarification loops with engineering fell from twelve a sprint to four.",
  },
  {
    company: "Pinkman",
    role: "System Designer",
    period: "2021 — 2022",
    projects: ["VTB"],
    blurb:
      "Redesigned VTB's public website — nine marketing products and landing pages inside a strict brand system, an interface built atoms-up, and a library of 1000+ illustrations that set the bank apart. Leads up ~25%, traffic roughly doubled, bounce on key pages down 64%.",
    logo: "/images/home/pinkman-logo.svg",
  },
  {
    company: "Sectigo",
    role: "UI/UX Designer",
    period: "2020 — 2021",
    blurb:
      "UI/UX for enterprise platforms — untangling dense, high-complexity user flows and making them usable, working directly with stakeholders and art directors.",
  },
  {
    company: "Comodo",
    role: "Junior System Designer",
    period: "2018 — 2020",
    blurb:
      "Where I started — UI/UX for web platforms and marketing, and my first reusable UI components, built hand-in-hand with marketing and dev.",
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

/* Side Projects — concept explorations and personal design experiments,
   rendered with the same featured-card layout as Latest Projects (no case
   pages, so the cards are static). Swap in real titles/copy as needed. */
export const sideProjects: Project[] = [
  {
    slug: "tanemi",
    title: "Tanemi",
    role: "Concept · UI",
    period: "2024",
    tags: ["Concept", "Coaching", "Mobile"],
    description:
      "The everything coach app — a client-roster concept for fitness coaches, keeping athletes and their check-ins connected in one clean mobile UI.",
    image: "/images/projects/tanemi/tanemi-screen.png",
  },
  {
    slug: "swipedish",
    title: "SwipeDish",
    role: "Concept · UI",
    period: "2024",
    tags: ["Concept", "Mobile", "Food"],
    description:
      "A swipe-to-choose food concept — a playful card interface for picking what to eat, with bold color and motion.",
    image: "/images/home/gallery/variants/swipedish-green.jpg",
  },
];

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

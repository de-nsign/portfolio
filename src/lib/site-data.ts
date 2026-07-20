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
    role: "Design System · Design Lead",
    period: "2025 — Now",
    tags: ["Design System", "iGaming", "Web"],
    description:
      "A dark-first design system for an online casino platform — a single Figma library scaling from tokens, fields, inputs and controls up through data display, feedback and navigation blocks. Built for fast, consistent lobby, game and cashier surfaces across the product, with an interactive component playground you can pan and zoom below",
    image: "/images/home/latest/re-luna-download.png",
    logoBg: "#0f0f10",
    logoText: "C",
    badges: ["Atoms → Blocks", "Dark-first", "Live Figma"],
    metrics: ["200+ components", "5 component groups", "Token-driven"],
    figma:
      "https://embed.figma.com/design/hIEuNxuW2WPrUjve1kB7Pb/Library?node-id=0-1&embed-host=share",
  },
  {
    slug: "vtb",
    title: "VTB",
    role: "Design System · Design Lead",
    period: "2019 — 2025",
    tags: ["Design System", "Fintech", "Web"],
    description:
      "Built the design system behind VTB's public web — one of Russia's largest banks. An atomic approach scaled from fields, inputs, buttons and controls up to blocks and full marketing pages, unified into six color themes with a dark mode for low-vision users, plus 1000+ illustrations with technical guidelines that let the bank ship a faster, more consistent customer experience",
    image: "/images/home/latest/vtb-download.png",
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
    role: "Design System · Designer",
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
  logo: string;
};

export const career: CareerEntry[] = [
  {
    company: "Re:Luna",
    role: "Senior Product Designer",
    period: "2024 — Now",
    blurb:
      "Building a fintech wealth-management platform — a B2B analyst workspace and a client-facing iOS app for portfolio performance and clearer investment decisions.",
    logo: "/images/logos/career-reluna.png",
  },
  {
    company: "MTS",
    role: "Senior Product Designer",
    period: "2023 — 2024",
    blurb:
      "Led accessibility across the MTS design system — color contrast, touch targets, font scaling and component behavior, with internal guides so others could design for everyone.",
    logo: "/images/logos/career-mts.png",
  },
  {
    company: "Helper",
    role: "Design Mentor",
    period: "2023",
    blurb:
      "Mentored junior designers — building learning plans, reviewing work and talking through the craft one project at a time.",
    logo: "/images/logos/career-helper.png",
  },
  {
    company: "Yandex Practicum",
    role: "Reviewer and Author",
    period: "2023 — 2024",
    blurb:
      "Reviewed student projects and authored course material for one of the largest EdTech platforms in the region.",
    logo: "/images/logos/career-yandex.png",
  },
  {
    company: "Pinkman",
    role: "Middle Designer → Lead Designer",
    period: "2020 — 2023 · Full Time",
    projects: ["RuStore", "Bioniq", "VTB"],
    blurb:
      "Grew from product designer on VTB's website redesign into a lead managing a team of four, later moving into hands-on work across VK and RuStore.",
    logo: "/images/home/pinkman-logo.svg",
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

export const aboutParagraphs: string[] = [
  'I first thought about becoming a designer in 2018 while studying law in Irkutsk. One day in class, I realized I couldn\'t see myself as a lawyer. I googled "digital professions" and found "UX/UI designer." I read the description and instantly knew that was it.',
  "I dropped out of university and started learning design. Created fake projects, built my first portfolio, and worked on a construction site at the same time. It was tough, but it felt like I was building a new life - one layout at a time.",
  "In 2019, I got my first job at a small studio in Omsk called Renoda. That was the first time I got paid for design. I worked on SaaS products, mobile apps, and marketing pages - and realized design could actually be a profession, not just a hobby.",
  "In 2020, I joined Pinkman Studio. Started as a product designer on VTB Bank's website redesign, and later became a lead managing a team of four. It was a big step up, but after a year I missed hands-on work. I switched to other projects - including VK and RuStore.",
  "Then came MTS. I joined the design system team to focus on digital accessibility. That experience changed how I see design - less about looks, more about care. I worked on color contrast, touch areas, font scaling, component behavior, and wrote internal guides that helped others design for everyone.",
  "At the same time, I reviewed student projects for Yandex.Practicum and mentored at Helper. Helping others grow - building plans, giving feedback, discussing design - turned out to be one of the most rewarding experiences.",
  "At the beginning of 2024, I planned to take a short break. But a week after leaving MTS, I got a message from Re:Luna. The product instantly clicked with me, and I joined as a Senior Product Designer. It's a startup full of diverse, genuinely interesting challenges.",
  "If I had to sum it up - it all started with one lecture and a Google search. Since then, design has become more than a profession. It's a way of thinking, observing, solving, and improving things - both on screen and beyond.",
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

// First collage cluster (next to the opening paragraphs)
export const behindPixelsPhotos: string[] = [
  "/images/profile/profile-portrait-gradient.png",
  "/images/home/gallery/variants/focus-wide.jpg",
  "/images/home/gallery/variants/lifewell-floating.jpg",
];

// Second collage cluster (the "hanging" strip beside the closing paragraph)
export const behindPixelsPhotosB: string[] = [
  "/images/home/gallery/variants/dreamguard-poster.jpg",
  "/images/home/gallery/variants/smart-fridge-shelf.jpg",
  "/images/home/gallery/variants/gemx-phones.jpg",
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

export const behindPixelsIntro =
  "Finally, meet the lady behind the pixels – a quick peek into my world.";

export const behindThePixels: string[] = [
  "I was born in a small Bulgarian village in Ukraine, surrounded by different cultures, languages, and creativity. Now I live in Warsaw, carrying that love for diversity wherever I go.",
  "I grew up speaking three languages, which sparked my passion for communication. Later I added a few more — English, Polish, and a bit of Spanish (still learning).",
  "Creativity has always been my way to express myself. I draw, design, move through yoga, and explore new corners of the world whenever I can.",
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

export const footerColumns: { heading: string; links: string[] }[] = [
  { heading: "Contact", links: ["Telegram", "LinkedIn", "Email"] },
  { heading: "Channels", links: ["Design Mind", "Design Resources", "Daily Aestethics"] },
  { heading: "Articles", links: ["VC", "DSGNRS", "Medium"] },
  { heading: "Concepts", links: ["X (Twitter)", "Dribbble", "Behance"] },
  { heading: "Denis Artemenko", links: ["© 2019 — Now", "Privacy", "Licenses"] },
];

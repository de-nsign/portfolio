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
    slug: "re-luna",
    title: "Re:Luna",
    role: "Sr. Product Designer",
    period: "2024 — Now",
    tags: ["B2B", "Fintech", "SaaS"],
    description:
      "Fintech wealth-management platform with two connected products: a B2B workspace for analysts and advisors, and a client-facing iOS app for tracking portfolio performance, strategy updates, daily investment activity, and clearer communication around portfolio decisions",
    image: "/images/home/latest/re-luna-download.png",
    logo: "/images/home/re-luna-logo.png",
    badges: ["B2B + iOS", "0 → 1 product"],
    metrics: ["Onboarding CR +22%", "Advisor time −30%", "NPS +11"],
  },
  {
    slug: "mts",
    title: "MTS",
    role: "Sr. Product Designer",
    period: "2023 — 2024",
    tags: ["Design System", "Accessibility"],
    description:
      "Led accessibility work across the MTS design system: planned rollout, reviewed implementation, refined tokens and touch targets, and improved consistency across web and mobile surfaces",
    image: "/images/home/latest/mts-download.png",
    logo: "/images/home/mts-logo.png",
    badges: ["Design System", "WCAG 2.1 AA"],
    metrics: ["Contrast pass +40%", "120+ components audited"],
  },
  {
    slug: "rustore",
    title: "RuStore",
    role: "Sr. Product Designer",
    period: "2022",
    tags: ["B2C", "Mobile App"],
    description:
      "Worked on RuStore, VK's Android marketplace, with a focus on trust, paid-app conversion, and faster product delivery through a stronger design system, cleaner Figma workflows, tighter collaboration with development, and more reliable handoff patterns",
    image: "/images/home/latest/rustore-download.png",
    logo: "/images/logos/rustore.png",
    badges: ["MAU 10m+", "Android"],
    metrics: ["Paid-app CR +18%", "Handoff time −25%"],
  },
  {
    slug: "bioniq",
    title: "Bioniq",
    role: "Sr. Product Designer",
    period: "2022",
    tags: ["B2C", "Mobile App", "HealthTech"],
    description:
      "Designed key subscription and tracking flows for Bioniq, a personalized healthcare product, helping users follow blood-test progress, manage nutrient plans, and move through a clearer mobile experience from onboarding to retention with less friction in core health journeys",
    image: "/images/home/latest/bioniq-download.png",
    logo: "/images/logos/bioniq.png",
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
    slug: "spenlog",
    title: "SpenLog",
    role: "Product Designer",
    period: "2026",
    tags: ["Personal Project", "Fintech"],
    description:
      "A personal project for personal finance: expense tracking, AI-assisted input, planned payments, debts, goals, and clearer budget insights in one app built to make everyday money management faster and easier",
    image: "/images/home/latest/spenlog-download.png",
    logo: "/images/home/spenlog-logo.png",
  },
  {
    slug: "gemx",
    title: "GemX",
    role: "Sr. Product Designer",
    period: "2024",
    tags: ["Hackathons", "Crypto"],
    description:
      "A hackathon project: a Telegram Mini-App where users earn crypto cases by completing tasks, inviting friends, and keeping daily streaks, shaped as a lightweight reward loop inside the app",
    image: "/images/home/latest/gemx-download.png",
    logo: "/images/logos/gemx.png",
  },
  {
    slug: "her",
    title: "Her",
    role: "Sr. Product Designer",
    period: "2024",
    tags: ["Hackathons", "HealthTech"],
    description:
      "A hackathon project: a Telegram Mini-App that helps women track their cycle, understand daily changes, and receive more useful advice based on their data through a simple and friendly UX",
    image: "/images/home/latest/her-download.png",
    logo: "/images/logos/her.png",
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

export const behindThePixels: string[] = [
  "I was born in a small Bulgarian village in Ukraine, surrounded by different cultures, languages, and creativity. Now I live in Warsaw, carrying that love for diversity wherever I go.",
  "I grew up speaking three languages, which sparked my passion for communication. Later I added a few more — English, Polish, and a bit of Spanish (still learning).",
  "Creativity has always been my way to express myself. I draw, design, move through yoga, and explore new corners of the world whenever I can.",
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
  { heading: "Vlad Kalashnikov", links: ["© 2019 — Now", "Privacy", "Licenses"] },
];

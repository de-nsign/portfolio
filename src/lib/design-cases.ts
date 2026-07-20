/**
 * Data for the design-system-style case pages rendered by
 * `components/case-study/DesignSystemCase.tsx`. Keyed by route slug.
 */

export type DesignShowcase = {
  label: string;
  title: string;
  body: string;
  /** Empty string → renders a dashed "add image" placeholder. */
  image: string;
  alt: string;
  /** Diagram: show whole image centered on a canvas. */
  contain?: boolean;
  /** Full-bleed dark screenshot: rounded image, no light frame. */
  bleed?: boolean;
};

export type DesignCaseData = {
  brand: string;
  monogram: string;
  monogramBg: string;
  tags: string[];
  title: string;
  subtitle: string;
  coverImage?: string;
  coverAlt?: string;

  problemLabel: string;
  problemHeading: string;
  problems: { n: string; title: string; body: string }[];

  doingLabel: string;
  doingHeading: string;
  doingDesc: string;
  doingMetrics: { value: string; label: string }[];
  steps: { n: string; body: string }[];

  foundation?: { label: string; heading: string; desc: string; chips: string[] };

  showcases: DesignShowcase[];

  resultLabel: string;
  resultHeading: string;
  resultLead: string;
  forEngineers: string[];
  forDesigners: string[];
  resultMetrics: { value: string; label: string }[];

  /** Footer "previous case" link. */
  prev?: { href: string; label: string };
};

/* ------------------------------------------------------------------ */
/*  Casino Library — adapted from Denis's essay                         */
/*  "How I Built a Design System for Seven Brands Out of Chaos"         */
/* ------------------------------------------------------------------ */

const casinoLibrary: DesignCaseData = {
  brand: "Casino Library",
  monogram: "C",
  monogramBg: "#0f0f10",
  tags: ["iGaming • design system", "web • seven brands", "2025 — Now"],
  title: "a design system for seven brands, built out of chaos",
  subtitle:
    "From a disguised single template with no structure — to a token-driven system with 28 themes, a two-file architecture and one language for designers and engineers.",
  coverImage: "/images/design-system/article-hero.webp",
  coverAlt:
    "How one designer built a multi-brand design system for 7 brands and 28 themes",

  problemLabel: "problem",
  problemHeading: "the product grew, the system didn't scale",
  problems: [
    {
      n: "01",
      title: "Seven brands, one template",
      body: "From the outside every brand looked distinct. Underneath sat a single template with no structure — everything built on groups and frames, components barely used.",
    },
    {
      n: "02",
      title: "A new button every task",
      body: "For every screen, in every file, someone drew a fresh button. Nothing was reusable — not within a brand, not across the seven.",
    },
    {
      n: "03",
      title: "Design became error-spotting",
      body: "The lead caught wrong fonts, colors and radii by eye, one at a time. The system gave nothing to lean on, so a mistake was easier to make than to avoid.",
    },
    {
      n: "04",
      title: "Every flow, seven times",
      body: "Draw KYC once, then six more by hand — almost from scratch each time. That hand-replication is where the time burned.",
    },
  ],

  doingLabel: "what i did",
  doingHeading: "from a UI-kit to a living system",
  doingDesc:
    "Built bottom-up: a foundation of spacing, type and tokens first, then a semantic layer, then components — and a migration the whole team could adopt.",
  doingMetrics: [
    { value: "7 brands", label: "on one system" },
    { value: "28 themes", label: "from two axes" },
    { value: "~300k layers", label: "migrated" },
  ],
  steps: [
    {
      n: "01",
      body: "Proved the need with one demo — a Figma Variables prototype where a single toggle reskinned a whole page in a second.",
    },
    {
      n: "02",
      body: "Laid the foundation — one 4 / 8 spacing scale, a minimal set of type roles, mobile-first breakpoints (360 / 1024 / 1400+).",
    },
    {
      n: "03",
      body: "Named color by role, not shade — a semantic token grammar: property · tone · surface · step · state (bg.brand.base.500.default).",
    },
    {
      n: "04",
      body: "Broke Figma's mode limit with Token Studio — themes as an intersection of axes, tokens living in JSON under version control.",
    },
    {
      n: "05",
      body: "Migrated ~300k layers with Apply Tokens, then split into a two-file architecture — a shared, brand-free Library and isolated brand files.",
    },
  ],

  foundation: {
    label: "00 — foundation",
    heading: "one spacing scale, no other numbers",
    desc: "The flagship brand had hundreds of by-eye spacing values. I put a single scale at the base — multiples of 4 up to 24, of 8 above. If a value isn't on the scale, you can't use it.",
    chips: ["4", "8", "12", "16", "20", "24", "32", "48", "64"],
  },

  showcases: [
    {
      label: "01 — token grammar",
      title: "a token names a role, not a shade",
      body: 'Naming a token "Primary 500" broke on the second brand. The fix was a single grammar — property · tone · surface · step · state — so every token answers "what role," not "what color."',
      image: "/images/design-system/article-grammar.webp",
      alt: "The token naming grammar: prefix, property, tone, modificators, intensity, state",
      contain: true,
    },
    {
      label: "02 — three levels",
      title: "value → primitive → semantic",
      body: "A raw value feeds a primitive, a primitive feeds a semantic role. The designer works in the semantic layer; component-level tokens appear only when there's no other way.",
      image: "/images/design-system/article-three-levels.webp",
      alt: "Reference chain: value #F55DAF → Pink-500 → Color/Background/Brand",
      contain: true,
    },
    {
      label: "03 — components",
      title: "100+ components, every state",
      body: "Buttons, inputs, modals, tables, tooltips, toasts — an atomic set from atoms to blocks, each with every state and variant. Dark and light are one component via a base / inverted pair, not two separate sets.",
      image: "/images/design-system/ds-components.webp",
      alt: "The Casino Library component gallery — modal, OTP, radio, tooltip and more with their states",
      bleed: true,
    },
    {
      label: "04 — two files",
      title: "isolated brands, one shared library",
      body: "Each brand is two files: a shared, brand-free Library (form in bare hex) and a brand file that paints it with tokens. Brands never see each other — an error in one can't reach the rest. VIP is derived from classic, never rebuilt by hand.",
      image: "/images/design-system/article-two-files.webp",
      alt: "Shared Library feeding isolated Brand A, B and C files",
      contain: true,
    },
    {
      label: "05 — tokens → code",
      title: "one source for design and code",
      body: "Tokens live in JSON under version control. Token Studio reads/writes them and exports to Figma; the Library flows in and gets colored on the spot — two inputs into one brand file, each in one direction only.",
      image: "/images/design-system/article-two-inputs.webp",
      alt: "Pipeline: GitHub → Tokens Studio → Figma Variables → Design Layer, with the Library feeding in",
      contain: true,
    },
    {
      label: "06 — documented & tooled",
      title: "not just drawn — documented",
      body: "Every component ships with usage docs. Two custom tools keep it honest: a Token Validator that checks references and cross-brand consistency before merge, and a Swap Library flow to reskin a brand in minutes.",
      image: "/images/design-system/ds-docs.webp",
      alt: "Design system documentation — components, the Token Validation Tool and the Swap Library flow",
      bleed: true,
    },
  ],

  resultLabel: "result",
  resultHeading: "seven brands on one system",
  resultLead:
    "A year on, review is about design again — not spotting each other's typos. The base is set, and picking the wrong one is impossible.",
  forEngineers: [
    "One correct variant of every component.",
    "Tokens exported as variables — fewer questions about colors and sizes.",
    "Docs explain behavior — fewer fixes after handoff.",
  ],
  forDesigners: [
    "New screens are assembled from ready blocks, not drawn from scratch.",
    "Dark is handled by base / inverted automatically — no separate component set.",
    "Onboarding a new designer dropped from weeks to days.",
  ],
  resultMetrics: [
    { value: "−1 week", label: "manual work per major feature" },
    { value: "weeks → days", label: "designer onboarding" },
    { value: "1 source", label: "design + code, in JSON" },
  ],
  prev: { href: "/projects/vtb", label: "previous case · VTB" },
};

/* ------------------------------------------------------------------ */
/*  Third case — TEMPLATE / PLACEHOLDER                                 */
/*  Same layout, generic copy to replace with a real project.          */
/* ------------------------------------------------------------------ */

const mobileDesignSystem: DesignCaseData = {
  brand: "Mobile DS",
  monogram: "M",
  monogramBg: "#0f0f10",
  tags: ["fintech • design system", "ios, android • b2c, b2b", "2025"],
  title: "a design system for a fintech mobile app",
  subtitle:
    "Placeholder — from a scattered UI-kit to a living, token-driven system with a dark theme and one shared language for design and code. Replace with your project's story.",

  problemLabel: "problem",
  problemHeading: "the product outgrew its UI-kit",
  problems: [
    {
      n: "01",
      title: "Duplicates and contradictions",
      body: "Placeholder — the same component lived in several versions across files, and no one knew which one was correct.",
    },
    {
      n: "02",
      title: "Everyone improvised",
      body: "Placeholder — with no single source of truth, engineers reused old components or built new ones, and design and build drifted apart.",
    },
    {
      n: "03",
      title: "Slow onboarding",
      body: "Placeholder — a new designer spent weeks finding their way; there was no clear structure or documentation.",
    },
    {
      n: "04",
      title: "Didn't scale to new features",
      body: "Placeholder — every new screen meant redrawing components from scratch; the system didn't grow with the product.",
    },
  ],

  doingLabel: "what i did",
  doingHeading: "from a UI-kit to a living system",
  doingDesc:
    "Placeholder — describe how the system was built bottom-up: foundation and tokens first, then components, then the migration and hand-off to the team.",
  doingMetrics: [
    { value: "—", label: "components" },
    { value: "—", label: "token tiers" },
    { value: "—", label: "team adoption" },
  ],
  steps: [
    { n: "01", body: "Placeholder — audited the UI-kit and mapped duplicates, gaps and inconsistencies." },
    { n: "02", body: "Placeholder — built the token system: color, typography, spacing, radii." },
    { n: "03", body: "Placeholder — designed the components with all their states and variants." },
    { n: "04", body: "Placeholder — wrote the docs and handed the system to designers and engineers." },
  ],

  showcases: [
    {
      label: "01 — color tokens",
      title: "placeholder — color system",
      body: "Placeholder — add a screenshot of the color token scales and describe the palette.",
      image: "",
      alt: "",
    },
    {
      label: "02 — typography",
      title: "placeholder — type scale",
      body: "Placeholder — add a screenshot of the type roles and describe the scale.",
      image: "",
      alt: "",
    },
    {
      label: "03 — components",
      title: "placeholder — component library",
      body: "Placeholder — add a screenshot of the component gallery and describe the coverage.",
      image: "",
      alt: "",
    },
    {
      label: "04 — dark theme",
      title: "placeholder — dark theme",
      body: "Placeholder — add a screenshot of the dark theme and describe how it's handled.",
      image: "",
      alt: "",
    },
  ],

  resultLabel: "result",
  resultHeading: "placeholder — the outcome",
  resultLead:
    "Placeholder — summarise what changed for the team once the system shipped.",
  forEngineers: [
    "Placeholder — one correct variant of every component.",
    "Placeholder — tokens as variables, fewer questions about values.",
    "Placeholder — docs explain behavior, fewer fixes after handoff.",
  ],
  forDesigners: [
    "Placeholder — new screens assembled from blocks, not from scratch.",
    "Placeholder — theme switching handled automatically.",
    "Placeholder — faster onboarding for new designers.",
  ],
  resultMetrics: [
    { value: "—", label: "placeholder metric" },
    { value: "—", label: "placeholder metric" },
    { value: "—", label: "placeholder metric" },
  ],
  prev: { href: "/projects/vtb", label: "previous case · VTB" },
};

export const designCases: Record<string, DesignCaseData> = {
  "casino-library": casinoLibrary,
  "mobile-design-system": mobileDesignSystem,
};

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
  /** Optional brand logo; renders in place of the monogram when set. */
  logo?: string;
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
  coverImage: "/images/design-system/casino-hero.png",
  coverAlt:
    "Casino Library design system — Figma × Tokens Studio, Auto Layout, tokens and 7 brands",

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
/*  VTB — the design system behind one of Russia's largest banks        */
/*  Public web redesign at Pinkman Studio, 2020 — 2022                   */
/* ------------------------------------------------------------------ */

const vtb: DesignCaseData = {
  brand: "VTB",
  monogram: "В",
  monogramBg: "#0a2896",
  tags: ["fintech • design system", "web • public bank site", "2020 — 2022"],
  title: "the design system behind one of Russia's largest banks",
  subtitle:
    "Redesigning VTB's public website — from hand-drawn pages to an atomic system: an atoms-to-blocks library, every component documented to every state, and six color themes with a first-class dark mode.",
  coverImage: "/images/design-system/vtb-hero.webp",
  coverAlt:
    "VTB design system hero — components, fields and controls for VTB Designer and VTB Client",

  problemLabel: "problem",
  problemHeading: "a bank-sized site, drawn page by page",
  problems: [
    {
      n: "01",
      title: "Every page, from scratch",
      body: "The public site spanned hundreds of product pages — cards, mortgage, auto loans, deposits, business — and each was laid out by hand. Nothing was reused, so nothing stayed consistent.",
    },
    {
      n: "02",
      title: "Four designers, four dialects",
      body: "A team of four worked in parallel with no shared source of truth. The same button, field or calculator lived in slightly different versions across files.",
    },
    {
      n: "03",
      title: "Themes copied by hand",
      body: "Segment sections needed their own accents, and a dark mode for low-vision users was on the roadmap. Without tokens, every theme meant re-coloring screens one layer at a time.",
    },
    {
      n: "04",
      title: "States improvised each time",
      body: "Hover, active, error, disabled — every button and field was re-drawn per screen. Without a documented set of states, edge cases were an afterthought.",
    },
  ],

  doingLabel: "what i did",
  doingHeading: "from hand-drawn pages to an atomic system",
  doingDesc:
    "Built bottom-up: fields, inputs, buttons and controls as atoms, up through blocks and full marketing pages — each documented to every state, and unified by tokens into six color themes and a dark mode.",
  doingMetrics: [
    { value: "atoms → blocks", label: "one component library" },
    { value: "6 themes", label: "+ a dark mode" },
    { value: "team of 4", label: "on one system" },
  ],
  steps: [
    {
      n: "01",
      body: "Audited the redesign — mapped every product page and the duplicated buttons, fields and calculators scattered across the team's files.",
    },
    {
      n: "02",
      body: "Built the atoms first — fields, inputs, buttons and controls, each with every state, then composed them into reusable blocks.",
    },
    {
      n: "03",
      body: "Documented components to the edge — every size, mobile and desktop behavior, error states, light and dark, in one source of truth.",
    },
    {
      n: "04",
      body: "Tokenized color so six segment themes and a dark mode fell out of one system instead of being re-drawn by hand.",
    },
    {
      n: "05",
      body: "Documented the library and wrote onboarding docs so a team of four — and new hires after them — worked from one source instead of drifting.",
    },
  ],

  showcases: [
    {
      label: "01 — atoms to blocks",
      title: "one library, atoms up to blocks",
      body: "Checkbox, dropdown, chips, input, loader — the atoms — roll up into blocks like steps, onboarding, menu, header and footer. Every screen is assembled from this catalog, not drawn from a blank canvas.",
      image: "/images/home/vtb/ds-atoms-blocks.webp",
      alt: "The VTB component library — an ATOMS and BLOCKS catalog",
      bleed: true,
    },
    {
      label: "02 — every state",
      title: "each component, every state spelled out",
      body: "Buttons, chips and toggles documented across default, hover, active and their combinations, on desktop and mobile. Edge cases are part of the component, not an afterthought.",
      image: "/images/home/vtb/ds-states.webp",
      alt: "VTB button, chip and toggle components documented across all their states",
      bleed: true,
    },
    {
      label: "03 — a component in full",
      title: "the mortgage calculator, top to bottom",
      body: "One component as the system in miniature — documented across every breakpoint, its mobile and desktop behavior, error states, and both light and dark themes. A designer never guesses which variant is right.",
      image: "/images/projects/vtb/ds-calculator.png",
      alt: "The VTB mortgage Calculator component documented across sizes, states and light/dark themes",
      bleed: true,
    },
    {
      label: "04 — six color themes",
      title: "six themes out of one token set",
      body: "Light and Dark Basic, ATM, Light and Dark Privilege, Private Banking — each segment gets its own theme from a single tokenized color scheme, not a hand-recolored copy.",
      image: "/images/home/vtb/ds-colors.webp",
      alt: "The VTB color-scheme documentation across Basic, ATM, Privilege and Private Banking themes",
      bleed: true,
    },
    {
      label: "05 — a real dark mode",
      title: "dark as a first-class theme",
      body: "The dark mode — built for low-vision users — is a full theme with its own component set, from headers and toggles to inputs and CTAs, not a filter dropped over the light one.",
      image: "/images/home/vtb/ds-dark.webp",
      alt: "VTB components rendered in the dark theme — headers, toggles, inputs and buttons",
      bleed: true,
    },
    {
      label: "06 — atoms to full pages",
      title: "blocks assemble into whole pages",
      body: "Blocks compose into complete product pages across every segment. A new landing is arranged from ready parts, which is what keeps hundreds of pages consistent.",
      image: "/images/projects/vtb/ds-pages.png",
      alt: "A page map of VTB product pages assembled from shared blocks",
      bleed: true,
    },
  ],

  resultLabel: "result",
  resultHeading: "hundreds of pages, one system",
  resultLead:
    "The redesign shipped on a shared foundation instead of hand-drawn one-offs — and the behavioral metrics moved with it. Several designers on the team grew to lead level on the same system.",
  forEngineers: [
    "One correct variant of every component, documented to every state.",
    "Color driven by tokens — six themes and a dark mode from one source.",
    "Every state and breakpoint specced — fewer questions after handoff.",
  ],
  forDesigners: [
    "Pages assembled from ready blocks, not drawn from scratch.",
    "Dark mode and segment themes handled by tokens, not by hand.",
    "Onboarding docs got new designers productive in days.",
  ],
  resultMetrics: [
    { value: "traffic ×2", label: "after the redesign" },
    { value: "bounce −64%", label: "on key pages" },
    { value: "16M", label: "visitors in 2021" },
  ],
  prev: { href: "/", label: "all projects" },
};

/* ------------------------------------------------------------------ */
/*  ECOS — design system for a fintech mobile app                       */
/*  Content ported from the earlier portfolio's design-system case.     */
/* ------------------------------------------------------------------ */

const mobileDesignSystem: DesignCaseData = {
  brand: "ECOS",
  monogram: "E",
  monogramBg: "#0f0f10",
  logo: "/images/design-system/ecos-app-icon.png",
  tags: ["fintech • design system", "ios, android • b2c, b2b", "2025"],
  title: "a design system for the ECOS mobile app",
  subtitle:
    "From a scattered UI-kit — to a living system with tokens, 100+ components, a dark theme and one shared language for designers and engineers.",
  coverImage: "/images/design-system/ecos-hero.png",
  coverAlt:
    "The ECOS design system: components, tokens, charts and UI blocks on one screen",

  problemLabel: "problem",
  problemHeading: "the product grew, the system didn't scale",
  problems: [
    {
      n: "01",
      title: "Duplicates and contradictions",
      body: "The same button existed in four versions across different files — engineers had no way to tell which one was correct.",
    },
    {
      n: "02",
      title: "Everyone built their own way",
      body: "With no single source of truth, engineers reused old components or made new ones — and design and build kept drifting apart.",
    },
    {
      n: "03",
      title: "Slow onboarding",
      body: "A new designer spent weeks finding their way through the files — there was no clear structure and no documentation.",
    },
    {
      n: "04",
      title: "Didn't scale to new features",
      body: "Every new screen meant drawing components from scratch — the system didn't grow with the product.",
    },
  ],

  doingLabel: "what i did",
  doingHeading: "from a UI-kit to a living system",
  doingDesc:
    "The system was built bottom-up: the foundation first — tokens — then atoms, molecules and complex components.",
  doingMetrics: [
    { value: "100+", label: "components" },
    { value: "6 tiers", label: "of tokens" },
    { value: "whole team", label: "uses it" },
  ],
  steps: [
    {
      n: "01",
      body: "Audited the UI-kit — surfaced the duplicates, contradictions and gaps.",
    },
    {
      n: "02",
      body: "Built the token system — color, typography, spacing and radii.",
    },
    {
      n: "03",
      body: "Designed 100+ components with all their states and variants.",
    },
    {
      n: "04",
      body: "Wrote the documentation and handed the system to designers and engineers.",
    },
  ],

  showcases: [
    {
      label: "01 — color tokens",
      title: "a six-step scale for every color role",
      body: "The core palette that makes up most of the design system — blue, accent, neutral, error, warning and success, each as a full tonal scale. Primitives feed semantic variables (text, bg, border, status, icon), so a color is chosen by role, not by hex.",
      image: "/images/design-system/ecos-colors.png",
      alt: "The ECOS color system: six tonal steps for every color token, feeding semantic variables",
      bleed: true,
    },
    {
      label: "02 — typography",
      title: "SF Pro, driven by semantic text styles",
      body: "A type system built on semantic text styles — Display, Heading, Body, Label and Caption — so text stays consistent across the whole UI. Family, weight, size, line-height and letter-spacing all live as tokens on SF Pro Display and SF Pro Text.",
      image: "/images/design-system/ecos-typography-scale.png",
      alt: "The ECOS type scale: Display, Heading, Body, Label and Caption with family / weight / size / letter-spacing tokens",
      bleed: true,
    },
    {
      label: "03 — shadows",
      title: "one elevation scale, xs to 3xl",
      body: "Depth is a token too — a single elevation scale from xs to 3xl, so every surface lifts off the background by the same rules instead of one-off blur values.",
      image: "/images/design-system/ecos-shadows.png",
      alt: "The ECOS shadow scale: xs, sm, md, lg, xl, 2xl and 3xl elevation levels",
      bleed: true,
    },
    {
      label: "04 — icons",
      title: "one grid, one style",
      body: "An icon library on a single grid and a single stroke style — including the crypto-asset set the app leans on — so icons read as one family everywhere they appear.",
      image: "/images/design-system/ecos-icons.png",
      alt: "The ECOS icon library: one consistent style and grid",
      bleed: true,
    },
    {
      label: "05 — spacing",
      title: "a spacer guide, not by-eye numbers",
      body: "Layout runs on one spacing scale with a spacer guide, so gaps and padding come from the system instead of being nudged pixel by pixel.",
      image: "/images/design-system/ecos-spacing.png",
      alt: "The ECOS spacing grid and scale: a spacer guide with sizes in pixels",
      bleed: true,
    },
    {
      label: "06 — design to code",
      title: "components that survive the handoff",
      body: "Tokens become variables and components carry their behavior into build — the crypto-asset icon set and its implementation in code are one and the same, so what's designed is what ships.",
      image: "/images/design-system/ecos-concept.png",
      alt: "ECOS design-system concept: the crypto-asset icon library and its implementation in code",
      bleed: true,
    },
  ],

  resultLabel: "result",
  resultHeading: "one system the whole team runs on",
  resultLead:
    "The UI-kit became a living system — one correct component for everyone, a dark theme that switches itself, and onboarding measured in days instead of weeks.",
  forEngineers: [
    "One correct variant of every component.",
    "Tokens exported as variables — fewer questions about colors.",
    "Docs explain behavior — fewer fixes after handoff.",
  ],
  forDesigners: [
    "New screens are assembled from ready blocks, not drawn from scratch.",
    "The dark theme switches automatically.",
    "Designer onboarding dropped from weeks to days.",
  ],
  resultMetrics: [
    { value: "100+", label: "components" },
    { value: "2×", label: "faster designer onboarding" },
    { value: "−38%", label: "fixes on review" },
  ],
  prev: { href: "/projects/vtb", label: "previous case · VTB" },
};

export const designCases: Record<string, DesignCaseData> = {
  "casino-library": casinoLibrary,
  vtb,
  "mobile-design-system": mobileDesignSystem,
};

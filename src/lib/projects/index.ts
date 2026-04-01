import type { CaseStudy } from "./types";
import { domsvech } from "./domsvech";
import { constantineRytvin } from "./constantine-rytvin";
import { valsydev } from "./valsydev";
import { stroika } from "./stroika";

const caseStudies: Record<string, CaseStudy> = {
  domsvech,
  "constantine-rytvin": constantineRytvin,
  valsydev,
  stroika,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}

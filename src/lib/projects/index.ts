import type { CaseStudy } from "./types";
import { vtb } from "./vtb";
import { domsvech } from "./domsvech";
import { constantineRytvin } from "./constantine-rytvin";
import { valsydev } from "./valsydev";
import { stroika } from "./stroika";

const caseStudies: Record<string, CaseStudy> = {
  vtb,
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

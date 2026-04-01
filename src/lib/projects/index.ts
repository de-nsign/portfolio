import type { CaseStudy } from "./types";
import { stroika } from "./stroika";

const caseStudies: Record<string, CaseStudy> = {
  stroika,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}

"use client";

import { notFound, useParams } from "next/navigation";
import DesignSystemCase from "@/components/case-study/DesignSystemCase";
import { designCases } from "@/lib/design-cases";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const designCase = designCases[slug];

  if (!designCase) {
    notFound();
  }

  return <DesignSystemCase data={designCase} />;
}

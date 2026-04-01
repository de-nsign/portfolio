"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { getCaseStudy, getAllCaseStudySlugs } from "@/lib/projects";
import { initCaseStudyAnimations } from "@/lib/case-study-animations";
import CaseNav from "@/components/case-study/CaseNav";
import CaseHero from "@/components/case-study/CaseHero";
import CaseOverview from "@/components/case-study/CaseOverview";
import CaseTextSection from "@/components/case-study/CaseTextSection";
import CaseImage from "@/components/case-study/CaseImage";
import CaseImagePair from "@/components/case-study/CaseImagePair";
import CaseProcess from "@/components/case-study/CaseProcess";
import CaseFeatures from "@/components/case-study/CaseFeatures";
import CaseTechStack from "@/components/case-study/CaseTechStack";
import CaseMetrics from "@/components/case-study/CaseMetrics";
import CaseDeviceMockup from "@/components/case-study/CaseDeviceMockup";
import CaseNextProject from "@/components/case-study/CaseNextProject";
import CaseFooter from "@/components/case-study/CaseFooter";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = getCaseStudy(slug);

  useEffect(() => {
    if (!study) return;
    const timer = setTimeout(() => {
      initCaseStudyAnimations();
    }, 100);
    return () => clearTimeout(timer);
  }, [study]);

  if (!study) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-4xl uppercase mb-4">
            Project Not Found
          </h1>
          <a
            href="/"
            className="text-sm uppercase tracking-widest text-accent-orange hover:text-accent-red transition-colors"
          >
            &larr; Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <CaseNav />
      <main>
        <CaseHero study={study} />
        <CaseOverview overview={study.overview} />

        {study.sections.map((section, i) => {
          switch (section.type) {
            case "text":
              return (
                <CaseTextSection
                  key={i}
                  label={section.label}
                  heading={section.heading}
                  body={section.body}
                />
              );
            case "image":
              return (
                <CaseImage
                  key={i}
                  src={section.src}
                  alt={section.alt}
                  caption={section.caption}
                />
              );
            case "image-pair":
              return <CaseImagePair key={i} images={section.images} />;
            case "process":
              return <CaseProcess key={i} steps={section.steps} />;
            case "features":
              return (
                <CaseFeatures
                  key={i}
                  heading={section.heading}
                  items={section.items}
                />
              );
            case "tech-stack":
              return (
                <CaseTechStack key={i} technologies={section.technologies} />
              );
            case "metrics":
              return <CaseMetrics key={i} items={section.items} />;
            case "device-mockup":
              return (
                <CaseDeviceMockup
                  key={i}
                  desktop={section.desktop}
                  mobile={section.mobile}
                  alt={section.alt}
                />
              );
            default:
              return null;
          }
        })}

        {study.nextProject && (
          <CaseNextProject
            slug={study.nextProject.slug}
            name={study.nextProject.name}
            image={study.nextProject.image}
          />
        )}
      </main>
      <CaseFooter />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/projects/CaseStudy";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { site } from "@/content/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: `Not found — ${site.name}` };
  }

  return {
    title: `${study.name} — ${site.name}`,
    description: study.summary,
    openGraph: {
      title: `${study.name} — ${site.name}`,
      description: study.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudy study={study} />;
}

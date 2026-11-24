import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "../components/section-heading";
import SetActiveSection from "../components/set-active-section";
import { caseStudiesData } from "../lib/data";

const description =
  "Case studies of AI systems I designed and shipped: RAG assistants, AI agents, LLM guardrails and evaluation.";

export const metadata: Metadata = {
  title: "Case studies | Rachid Ahsoune",
  description,
  alternates: { canonical: "https://www.rachidahsoune.site/case-studies/" },
  openGraph: {
    title: "Case studies | Rachid Ahsoune",
    description,
    url: "https://www.rachidahsoune.site/case-studies/",
    siteName: "Rachid Ahsoune",
    type: "website",
    images: [
      `https://www.rachidahsoune.site${caseStudiesData[0].thumbnail}`,
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case studies | Rachid Ahsoune",
    description,
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="flex flex-col items-center px-4">
      <SetActiveSection name="Case studies" />
      <section className="mb-28 w-full max-w-[42rem]">
        <SectionHeading>Case studies</SectionHeading>
        <ul className="flex flex-col gap-6 sm:gap-8">
          {caseStudiesData.map((cs) => (
            <li key={cs.slug}>
              {/* Plain <a>: the target is a static HTML page, not a Next route */}
              <a
                href={`/case-studies/${cs.slug}/`}
                className="group block bg-gray-100 border border-black/5 rounded-lg overflow-hidden hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-black/5">
                  <Image
                    src={cs.thumbnail}
                    alt={`${cs.title.split(":")[0]} case study thumbnail`}
                    fill
                    sizes="(min-width: 640px) 42rem, 100vw"
                    loading="lazy"
                    className="object-cover transition group-hover:scale-[1.02]"
                  />
                </div>
                <div className="px-5 pt-4 pb-6 sm:px-8">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white/50">
                    {cs.timeline} · {cs.role}
                  </p>
                  <h3 className="mt-1 text-xl sm:text-2xl font-semibold group-hover:underline">
                    {cs.title}
                  </h3>
                  <p className="my-2 leading-relaxed text-gray-700 dark:text-white/70 text-sm">
                    {cs.summary}
                  </p>
                  <ul className="flex flex-wrap mt-4 gap-2">
                    {cs.tags.map((tag) => (
                      <li
                        key={tag}
                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

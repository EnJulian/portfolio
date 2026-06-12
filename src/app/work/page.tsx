import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { MobileCTA } from "@/components/mobile-cta";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import { SkillChip } from "@/components/ui/skill-chip";
import { focusRing } from "@/lib/focus-ring";

export const metadata: Metadata = {
  title: `History | ${RESUME_DATA.name}`,
  description: "Work experience and history",
};

export default function WorkPage() {
  return (
    <div className="space-y-5">
      <p>
        I worked with{" "}
        <a
          href="https://www.linkedin.com/company/plendify/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B8sYnlGc6SXSvIlvv8XZTLw%3D%3D"
          target="_blank"
          className="text-link font-medium"
        >
          Plendify
        </a>{" "}
        in 2025 as a Backend Developer and DevOps Engineer, where I rebuilt
        their ecommerce web-app with new features using{" "}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          className="text-link font-medium"
        >
          TypeScript
        </a>
        ,{" "}
        <a
          href="https://nodejs.org/"
          target="_blank"
          className="text-link font-medium"
        >
          Node.js
        </a>
        ,{" "}
        <a
          href="https://www.postgresql.org/docs/current/index.html"
          target="_blank"
          className="text-link font-medium"
        >
          PostgreSQL
        </a>{" "}
        and{" "}
        <a
          href="https://docs.aws.amazon.com"
          target="_blank"
          className="text-link font-medium"
        >
          AWS
        </a>
        .
      </p>

      <p>
        Before Plendify, I joined{" "}
        <a
          href="https://www.linkedin.com/company/enyata/"
          target="_blank"
          className="text-link font-medium"
        >
          Enyata
        </a>{" "}
        in 2023 as a Backend Developer, where I developed applications using{" "}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          className="text-link font-medium"
        >
          TypeScript
        </a>
        ,{" "}
        <a
          href="https://nodejs.org/"
          target="_blank"
          className="text-link font-medium"
        >
          Node.js
        </a>{" "}
        and{" "}
        <a
          href="https://www.postgresql.org/docs/current/index.html"
          target="_blank"
          className="text-link font-medium"
        >
          PostgreSQL
        </a>
        .
      </p>

      <div className="mt-8 border-t border-border pt-4">
        <SectionHeading size="lg">Work History</SectionHeading>

        <div className="space-y-6">
          {RESUME_DATA.work.map((work) => (
            <SurfaceCard key={work.company}>
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-header-base font-medium text-foreground">
                  {work.company}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {work.start} — {work.end || "Present"}
                </span>
              </div>
              <div className="mb-2 flex flex-wrap gap-2">
                <SkillChip as="span">{work.title}</SkillChip>
                {work.badges &&
                  work.badges.map((badge) => (
                    <SkillChip
                      key={badge}
                      as="span"
                      className="text-brand"
                    >
                      {badge}
                    </SkillChip>
                  ))}
              </div>
              <p className="text-sm text-muted-foreground">{work.description}</p>
              <div className="mt-3">
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center rounded-md bg-secondary px-3 py-1.5 text-xs font-medium transition-colors hover:bg-surface-muted ${focusRing}`}
                >
                  Visit {work.company}
                  <svg
                    className="ml-1.5 h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4">
        <MobileCTA href="/projects" text="View my projects" />
      </div>
    </div>
  );
}

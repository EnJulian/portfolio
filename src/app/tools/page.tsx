import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { MobileCTA } from "@/components/mobile-cta";
import { SkillChip } from "@/components/ui/skill-chip";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: `Tools | ${RESUME_DATA.name}`,
  description: "Skills and tools I use",
};

export default function ToolsPage() {
  return (
    <div className="space-y-5">
      <div className="mb-6 border-b border-border pb-4">
        <p>
          I work with a variety of tools and technologies to build high-quality
          software solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="border-l-2 border-brand pl-4">
            <SectionHeading className="mb-3">Primary Expertise</SectionHeading>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.slice(0, 6).map((skill) => (
                <SkillChip key={skill.name} href={skill.url}>
                  {skill.name}
                </SkillChip>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border-l-2 border-brand-muted pl-4">
            <SectionHeading className="mb-3">Cloud & Database</SectionHeading>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.slice(6, 12).map((skill) => (
                <SkillChip key={skill.name} href={skill.url}>
                  {skill.name}
                </SkillChip>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <SectionHeading size="lg">All Technologies</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {RESUME_DATA.skills.map((skill) => (
            <SkillChip key={skill.name} href={skill.url}>
              {skill.name}
            </SkillChip>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4">
        <MobileCTA href="/projects" text="View my projects" />
      </div>
    </div>
  );
}

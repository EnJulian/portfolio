import React from "react";
import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { MobileCTA } from "@/components/mobile-cta";
import { SkillChip } from "@/components/ui/skill-chip";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name}`,
  description: RESUME_DATA.summary,
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <p>
          I&apos;m a developer living in{" "}
          <a
            href={RESUME_DATA.locationLink}
            target="_blank"
            className="text-link font-medium"
          >
            {RESUME_DATA.location}
          </a>
          . I specialize in building backend systems focusing on scalability,
          reliability, and clean architecture using{" "}
          {RESUME_DATA.skills.slice(0, 4).map((skill, index, array) => (
            <React.Fragment key={skill.name}>
              <a
                href={skill.url}
                target="_blank"
                className="text-link font-medium"
              >
                {skill.name}
              </a>
              {index < array.length - 1 ? ", " : ""}
            </React.Fragment>
          ))}
          .{" "}
        </p>

        <p>
          Today I spend my time building obscure digital tools like{" "}
          <a
            href="https://github.com/EnJulian/shadowbox"
            target="_blank"
            className="text-link"
          >
            Shadowbox.
          </a>
        </p>
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <SectionHeading>Expertise</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {RESUME_DATA.skills
            .filter((skill) =>
              ["C#", ".NET Core", "TypeScript", "Node.js", "Python", "AWS"].includes(
                skill.name,
              ),
            )
            .map((skill) => (
              <SkillChip key={skill.name} href={skill.url}>
                {skill.name}
              </SkillChip>
            ))}
        </div>
      </div>

      <div className="mt-6 pt-4">
        <MobileCTA href="/work" text="View my work history" />
      </div>
    </div>
  );
}
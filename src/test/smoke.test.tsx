import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SkillChip } from "@/components/ui/skill-chip";
import { SectionHeading } from "@/components/ui/section-heading";
import { Kbd } from "@/components/ui/kbd";

describe("UI primitives", () => {
  it("renders SkillChip with label", () => {
    render(<SkillChip as="span">TypeScript</SkillChip>);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("renders SectionHeading", () => {
    render(<SectionHeading>Expertise</SectionHeading>);
    expect(
      screen.getByRole("heading", { name: "Expertise" }),
    ).toBeInTheDocument();
  });

  it("renders Kbd", () => {
    render(<Kbd>⌘K</Kbd>);
    expect(screen.getByText("⌘K")).toBeInTheDocument();
  });
});

describe("Resume data", () => {
  it("loads navigation routes from resume data", async () => {
    const { RESUME_DATA } = await import("@/data/resume-data");
    expect(RESUME_DATA.name).toBeTruthy();
    expect(RESUME_DATA.projects.length).toBeGreaterThan(0);
    expect(RESUME_DATA.work.length).toBeGreaterThan(0);
  });
});

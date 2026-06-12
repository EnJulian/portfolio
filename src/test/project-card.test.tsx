import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProjectCard } from "@/components/project-card";

const projectWithManySkills = {
  title: "Sample Project",
  techStack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
  description: "A sample project for testing skill chip limits.",
  logo: null,
};

describe("ProjectCard", () => {
  it("shows at most 3 skills and a +N more indicator when collapsed", () => {
    render(
      <ProjectCard
        project={projectWithManySkills}
        isExpanded={false}
        isMobile
        selectedTechs={[]}
        onToggleExpand={vi.fn()}
        onToggleTech={vi.fn()}
      />,
    );

    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
    expect(screen.queryByText("Redis")).not.toBeInTheDocument();
    expect(screen.queryByText("AWS")).not.toBeInTheDocument();
    expect(screen.getByText("+2 more")).toBeInTheDocument();
  });

  it("shows all skills when expanded", () => {
    render(
      <ProjectCard
        project={projectWithManySkills}
        isExpanded
        isMobile
        selectedTechs={[]}
        onToggleExpand={vi.fn()}
        onToggleTech={vi.fn()}
      />,
    );

    expect(screen.getByText("Redis")).toBeInTheDocument();
    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.queryByText("+2 more")).not.toBeInTheDocument();
  });

  it("expands the card when +N more is clicked without triggering the card link", () => {
    const onToggleExpand = vi.fn();
    render(
      <ProjectCard
        project={{
          ...projectWithManySkills,
          link: { label: "Visit", href: "https://example.com" },
        }}
        isExpanded={false}
        isMobile
        selectedTechs={[]}
        onToggleExpand={onToggleExpand}
        onToggleTech={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "+2 more" }));

    expect(onToggleExpand).toHaveBeenCalledTimes(1);
  });
});

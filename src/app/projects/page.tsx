import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import ProjectsDisplay from "@/components/projects-display";
import { MobileCTA } from "@/components/mobile-cta";

export const metadata: Metadata = {
  title: `Projects | ${RESUME_DATA.name}`,
  description: "Professional and personal software development projects by Julian A. Amoah",
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-6 md:overflow-hidden">
      <div className="shrink-0">
        <p className="border-b border-border pb-4">
          A selection of work I’ve contributed to or built while learning and solving problems in different industries.
        </p>
      </div>

      <ProjectsDisplay
        className="min-h-0 flex-1"
        projects={RESUME_DATA.projects}
        personalProjects={RESUME_DATA.personalProjects}
      />

      <div className="mt-2 border-t border-border pt-6 md:hidden">
        <MobileCTA href="/contact" text="Get in touch" />
      </div>
    </div>
  );
}

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
    <div className="space-y-6">
      <div>
        <p className="border-b border-border pb-4">
          A selection of work I’ve contributed to or built while learning and solving problems in different industries.
        </p>
      </div>

      <ProjectsDisplay 
        projects={RESUME_DATA.projects} 
        personalProjects={RESUME_DATA.personalProjects} 
      />

      <div className="mt-8 border-t border-border pt-6">
        <MobileCTA href="/contact" text="Get in touch" />
      </div>
    </div>
  );
}

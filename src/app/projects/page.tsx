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
      <div className="border-b border-gray-800 pb-4">
        <p className="text-gray-300">
          Selected work across e-commerce, fintech, healthcare, and enterprise solutions.
        </p>
      </div>

      <ProjectsDisplay 
        projects={RESUME_DATA.projects} 
        personalProjects={RESUME_DATA.personalProjects} 
      />
      
      <div className="border-t border-gray-800 pt-6 mt-8">
        <MobileCTA href="/contact" text="Get in touch" />
      </div>
    </div>
  );
}

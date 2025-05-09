import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { TopNavigation } from "@/components/top-navigation";
import { CommandMenu } from "@/components/command-menu";
import FloatingButton from "@/components/floating-button";
import { ProjectCard } from "@/components/project-card";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: `Projects | ${RESUME_DATA.name}`,
  description: "Projects I've worked on",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black font-sans text-white antialiased">
      <TopNavigation />
      <div className="mx-auto max-w-screen-md p-6 md:p-10">
        {/* Projects */}
        <section className="mb-16">
          <h2 className="mb-6 border-b border-gray-800 pb-2 text-base uppercase tracking-widest">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {RESUME_DATA.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />

      <FloatingButton />
    </main>
  );
}

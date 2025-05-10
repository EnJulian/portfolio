import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export const metadata: Metadata = {
  title: `Projects | ${RESUME_DATA.name}`,
  description: "Projects I've worked on",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-5">
      <p>
        I&apos;ve worked on various projects throughout my career. Here are some highlights:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pb-6">
        {RESUME_DATA.projects.map((project) => {
          // Determine if project has a link
          const hasLink = "link" in project && project.link?.href;
          const projectUrl = hasLink ? project.link.href : "#";

          // Create card content
          const cardContent = (
            <>
              <h3 className="text-base font-medium mb-2 text-white group-hover:text-gray-200">
                {project.title}
              </h3>

              <p className="text-gray-450 text-[13px] mb-2 line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs text-gray-500 bg-black px-1.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </>
          );

          return (
            <div key={project.title} className="group relative h-full">
              {hasLink ? (
                <a 
                  href={projectUrl} 
                  target="_blank"
                  className="block border border-gray-800 bg-gradient-to-b from-gray-800/20 to-gray-900/30 rounded-md p-3 hover:bg-gray-900/60 transition-all hover:border-gray-700 hover:translate-y-[-2px] hover:shadow-md h-[135px] flex flex-col relative"
                >
                  <div className="absolute top-2 right-2 text-gray-500 group-hover:text-gray-300 transition-colors">
                    <FiExternalLink size={16} />
                  </div>
                  {cardContent}
                </a>
              ) : (
                <div className="border border-gray-800 bg-gradient-to-b from-gray-800/20 to-gray-900/30 rounded-md p-3 hover:bg-gray-900/60 transition-all hover:border-gray-700 hover:translate-y-[-2px] hover:shadow-md h-[135px] flex flex-col">
                  {cardContent}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

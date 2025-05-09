import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import Link from "next/link";

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
              
              <p className="text-gray-400 text-sm mb-3 line-clamp-3">{project.description}</p>
              
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
                  className="block border border-gray-800 bg-gray-900/30 rounded-md p-4 hover:bg-gray-900/60 transition-all hover:border-gray-700 hover:translate-y-[-2px] hover:shadow-md h-[180px] flex flex-col"
                >
                  {cardContent}
                </a>
              ) : (
                <div className="border border-gray-800 bg-gray-900/30 rounded-md p-4 hover:bg-gray-900/60 transition-all hover:border-gray-700 hover:translate-y-[-2px] hover:shadow-md h-[180px] flex flex-col">
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

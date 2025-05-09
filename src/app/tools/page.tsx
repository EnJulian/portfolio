import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: `Tools | ${RESUME_DATA.name}`,
  description: "Skills and tools I use",
};

export default function ToolsPage() {
  return (
    <div className="space-y-5">
      <p>
        I work with a variety of tools and technologies to build high-quality software solutions.
      </p>
      
      <p>
        My primary expertise is in{" "}
        {RESUME_DATA.skills.slice(0, 4).map((skill, index) => (
          <span key={skill.name}>
            <a href={skill.url} target="_blank" className="text-white hover:text-gray-300">
              {skill.name}
            </a>
            {index < 3 ? ", " : ""}
          </span>
        ))}.
      </p>
      
      <p>
        I&apos;m also proficient with{" "}
        {RESUME_DATA.skills.slice(4, 7).map((skill, index) => (
          <span key={skill.name}>
            <a href={skill.url} target="_blank" className="text-white hover:text-gray-300">
              {skill.name}
            </a>
            {index < 2 ? ", " : ""}
          </span>
        ))}.
      </p>
      
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4 text-white">All Tools & Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {RESUME_DATA.skills.map((skill) => (
            <a
              key={skill.name}
              href={skill.url}
              target="_blank"
              className="px-2 py-1 bg-gray-900 text-gray-300 rounded text-xs hover:bg-gray-800 hover:text-white transition-colors"
            >
              {skill.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { MobileCTA } from "@/components/mobile-cta";

export const metadata: Metadata = {
  title: `Tools | ${RESUME_DATA.name}`,
  description: "Skills and tools I use",
};

export default function ToolsPage() {
  return (
    <div className="space-y-5">
      <div className="border-b border-gray-800 pb-4 mb-6">
        <p>
          I work with a variety of tools and technologies to build high-quality software solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="border-l-2 border-purple-500 pl-4">
            <h2 className="text-base font-medium text-white mb-3">Primary Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.slice(0, 6).map((skill) => (
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

        <div className="space-y-4">
          <div className="border-l-2 border-blue-500 pl-4">
            <h2 className="text-base font-medium text-white mb-3">Cloud & Database</h2>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.slice(6, 12).map((skill) => (
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
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-800">
        <h2 className="text-lg font-semibold mb-4 text-white">All Technologies</h2>
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
      
      <div className="mt-6 pt-4">
        <MobileCTA href="/projects" text="View my projects" />
      </div>
    </div>
  );
}

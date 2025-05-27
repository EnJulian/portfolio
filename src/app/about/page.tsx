import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { MobileCTA } from "@/components/mobile-cta";

export const metadata: Metadata = {
  title: `About | ${RESUME_DATA.name}`,
  description: RESUME_DATA.summary,
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <p>
          I&apos;m a software developer living in {" "}
          <a href={RESUME_DATA.locationLink} target="_blank" className="text-white hover:text-gray-300 font-medium underline-offset-2 hover:underline">
            {RESUME_DATA.location}
          </a>
          . I specialize in building backend systems focusing on scalability, reliability, and clean architecture using {" "}
          {RESUME_DATA.skills.slice(0, 4).map((skill, index, array) => (
            <>
              <a key={skill.name} href={skill.url} target="_blank" className="text-white hover:text-gray-300 font-medium underline-offset-2 hover:underline">
                {skill.name}
              </a>
              {index < array.length - 1 ? ", " : ""}
            </>
          ))}
          .{" "}
        </p>
        
        <p>
          Today I spend my time building obscure digital tools like{" "}
          <a href="https://github.com/EnJulian/shadowbox" target="_blank" className="text-white hover:text-gray-300 underline-offset-2 hover:underline">
            Shadowbox.
          </a>
        </p>
      </div>
      
      {/* Tools Section */}
      <div className="mt-8 pt-6 border-t border-gray-800">
        <h2 className="text-base font-medium text-white mb-4">Expertise</h2>
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
        <MobileCTA href="/work" text="View my work history" />
      </div>
    </div>
  );
}

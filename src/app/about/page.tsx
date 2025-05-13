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
          Today I spend my time doing research {" "}
          {/*<a href="https://enyata.com" target="_blank" className="text-white hover:text-gray-300">*/}
          {/*  Enyata*/}
          {/*</a>*/}
          and building templates and APIs for my next high-performance application.
        </p>
        
        <p>I am passionate about crafting clean, robust code that drives performance and reliability in complex systems.
        </p>
      </div>
      <div className="mt-6 pt-4">
        <MobileCTA href="/work" text="View my work history" />
      </div>
    </div>
  );
}

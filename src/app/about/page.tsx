import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: `About | ${RESUME_DATA.name}`,
  description: RESUME_DATA.summary,
};

export default function AboutPage() {
  return (
    <div className="space-y-5">
      <p>
        I&apos;m a Backend Software Engineer living in {" "}
        <a href={RESUME_DATA.locationLink} target="_blank" className="text-white hover:text-gray-300">
          {RESUME_DATA.location}
        </a>
        . I specialize in building scalable backend systems focusing on scalability, reliability, and clean architecture using {" "}
        {RESUME_DATA.skills.slice(0, 4).map((skill, index, array) => (
          <>
            <a key={skill.name} href={skill.url} target="_blank" className="text-white hover:text-gray-300">
              {skill.name}
            </a>
            {index < array.length - 1 ? ", " : ""}
          </>
        ))}
        .{" "}
      </p>
      
      <p>
        Today I spend most of my time doing research {" "}
        {/*<a href="https://enyata.com" target="_blank" className="text-white hover:text-gray-300">*/}
        {/*  Enyata*/}
        {/*</a>*/}
        and building templates for my next high-performance application.
      </p>
      
      <p>I am passionate about crafting clean, robust code that drives performance and reliability in complex systems.
      </p>
      
      {/* <p>
        I previously worked at {" "}
        <a href="https://plendify.com" target="_blank" className="text-white hover:text-gray-300">
          Plendify
        </a>
        {" "}where I rebuilt their ecommerce webapp with new features.
      </p> */}
    </div>
  );
}

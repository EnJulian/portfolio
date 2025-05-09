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
        . I specialize in building scalable backend systems focusing on scalability, reliability, and clean architecture.
      </p>
      
      {/* <p>
        Today I spend most of my time working at {" "}
        <a href="https://enyata.com" target="_blank" className="text-white hover:text-gray-300">
          Enyata
        </a>
        , building high-performance applications.
      </p> */}
      
      <p>
        I am proficient in {" "}
        {RESUME_DATA.skills.slice(0, 3).map((skill, index, array) => (
          <>
            <a key={skill.name} href={skill.url} target="_blank" className="text-white hover:text-gray-300">
              {skill.name}
            </a>
            {index < array.length - 1 ? ", " : ""}
          </>
        ))}
        .{" "} I&apos;m passionate about creating clean, efficient, and reliable software.
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

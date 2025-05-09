import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: `History | ${RESUME_DATA.name}`,
  description: "Work experience and history",
};

export default function WorkPage() {
  return (
    <div className="space-y-5">
      <p>
        I worked as a Backend Developer at {" "}
        <a href="https://enyata.com" target="_blank" className="text-white hover:text-gray-300">
          Enyata
        </a>
        {", "}
        where I developed applications using{" "}
        <span className="text-white">TypeScript</span>,{" "}
        <span className="text-white">GraphQL</span>,{" "}
        <span className="text-white">Node.js</span>,{" "}
        <span className="text-white">MongoDB</span>, and{" "}
        <span className="text-white">PostgreSQL</span>.
      </p>
      
      <p>
        Shortly after that, I worked at {" "}
        <a href="https://plendify.com" target="_blank" className="text-white hover:text-gray-300">
          Plendify
        </a>
        {" "}as a Backend Developer, where I rebuilt their ecommerce webapp with new features 
        using {" "}
        <span className="text-white">TypeScript</span>,{" "}
        <span className="text-white">Node.js</span>, and{" "}
        <span className="text-white">PostgreSQL</span>.
      </p>
      
      <h2 className="text-lg font-semibold mt-8 mb-4 text-white">Work History</h2>
      
      <div className="space-y-6">
        {RESUME_DATA.work.map((work) => (
          <div key={work.company} className="space-y-1">
            <h3 className="text-base font-medium">
              <a
                href={work.link}
                target="_blank"
                className="text-white hover:text-gray-300"
              >
                {work.company}
              </a>
              <span className="text-gray-500 ml-2 text-sm">
                {work.start} — {work.end || "Present"}
              </span>
            </h3>
            <p className="text-gray-300 text-sm">{work.title}</p>
            <p className="text-gray-600 text-sm">{work.badges}</p>
            <p className="text-gray-400 text-sm">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

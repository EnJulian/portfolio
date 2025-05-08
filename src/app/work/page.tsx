import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { TopNavigation } from "@/components/top-navigation";
import { CommandMenu } from "@/components/command-menu";
import FloatingButton from "@/components/floating-button";

export const metadata: Metadata = {
  title: `Work | ${RESUME_DATA.name}`,
  description: "Work experience and history",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black font-sans text-white antialiased">
      <TopNavigation />
      <div className="mx-auto max-w-screen-md p-6 md:p-10">
        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="mb-6 border-b border-gray-800 pb-2 text-base uppercase tracking-widest">
            Work
          </h2>
          <div className="space-y-10">
            {RESUME_DATA.work.map((work) => (
              <div key={work.company} className="group">
                <div className="mb-1 flex items-start justify-between">
                  <h3 className="text-base">
                    <a
                      href={work.link}
                      target="_blank"
                      className="hover:text-gray-400"
                    >
                      {work.company}
                    </a>
                  </h3>
                  <span className="text-sm text-gray-500">
                    {work.start}
                    {work.end ? ` — ${work.end}` : ""}
                  </span>
                </div>
                <p className="mb-1 text-sm text-gray-400">{work.title}</p>
                <p className="text-sm text-gray-500">{work.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} {RESUME_DATA.name}
          </p>
        </footer>
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

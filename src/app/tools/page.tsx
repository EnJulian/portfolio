import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { TopNavigation } from "@/components/top-navigation";
import { CommandMenu } from "@/components/command-menu";
import FloatingButton from "@/components/floating-button";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: `Tools | ${RESUME_DATA.name}`,
  description: "Skills and tools I use",
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-black font-sans text-white antialiased">
      <TopNavigation />
      <div className="mx-auto max-w-screen-md p-6 md:p-10">
        {/* Skills */}
        <section className="mb-16">
          <h2 className="mb-6 border-b border-gray-800 pb-2 text-base uppercase tracking-widest">
            Tools
          </h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {RESUME_DATA.skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.url}
                target="_blank"
                className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
              >
                {skill.name}
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <Footer />
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

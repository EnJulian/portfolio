import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { TopNavigation } from "@/components/top-navigation";
import { CommandMenu } from "@/components/command-menu";
import FloatingButton from "@/components/floating-button";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: `About | ${RESUME_DATA.name}`,
  description: RESUME_DATA.summary,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black font-sans text-white antialiased">
      <TopNavigation />
      <div className="mx-auto max-w-screen-md p-6 md:p-10">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="mb-6 border-b border-gray-800 pb-2 text-base uppercase tracking-widest">
            About
          </h2>
          <p className="mb-8 text-sm text-gray-400">{RESUME_DATA.summary}</p>
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

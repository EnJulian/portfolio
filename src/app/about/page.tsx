import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { TopNavigation } from "@/components/top-navigation";
import { CommandMenu } from "@/components/command-menu";
import FloatingButton from "@/components/floating-button";

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

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="mb-6 border-b border-gray-800 pb-2 text-base uppercase tracking-widest">
            Contact
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-gray-400 mr-2">Email:</span>
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-white hover:text-gray-400">
                {RESUME_DATA.contact.email}
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 mr-2">Phone:</span>
              <a href={`tel:${RESUME_DATA.contact.tel}`} className="text-white hover:text-gray-400">
                {RESUME_DATA.contact.tel}
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 mr-2">Location:</span>
              <a href={RESUME_DATA.locationLink} target="_blank" className="text-white hover:text-gray-400">
                {RESUME_DATA.location}
              </a>
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-gray-400 mb-2">Social Media:</h3>
              <div className="flex gap-4">
                {RESUME_DATA.contact.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
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

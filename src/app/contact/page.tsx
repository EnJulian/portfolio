import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { MobileCTA } from "@/components/mobile-cta";
import { SectionHeading } from "@/components/ui/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import { focusRing } from "@/lib/focus-ring";

export const metadata: Metadata = {
  title: `Contact | ${RESUME_DATA.name}`,
  description: "Get in touch with me",
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6 border-b border-border pb-4">
        <p>
          Feel free to reach out to me through any of the following channels:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <SurfaceCard>
          <SectionHeading className="mb-4">Direct Contact</SectionHeading>
          <div className="space-y-4">
            <div className="flex flex-col rounded p-2 transition-colors hover:bg-secondary/50">
              <span className="mb-1 text-xs text-muted-foreground">EMAIL</span>
              <a
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="text-link break-all"
              >
                {RESUME_DATA.contact.email}
              </a>
            </div>
            <div className="flex flex-col rounded p-2 transition-colors hover:bg-secondary/50">
              <span className="mb-1 text-xs text-muted-foreground">PHONE</span>
              <a href={`tel:${RESUME_DATA.contact.tel}`} className="text-link">
                {RESUME_DATA.contact.tel}
              </a>
            </div>
            <div className="flex flex-col rounded p-2 transition-colors hover:bg-secondary/50">
              <span className="mb-1 text-xs text-muted-foreground">
                LOCATION
              </span>
              <a
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                {RESUME_DATA.location}
              </a>
            </div>
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <SectionHeading className="mb-4">Social Profiles</SectionHeading>
          <div className="grid grid-cols-2 gap-3">
            {RESUME_DATA.contact.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center rounded-md border border-border bg-secondary/30 p-2 text-muted-foreground transition-all hover:border-foreground/20 hover:bg-secondary hover:text-foreground ${focusRing}`}
                aria-label={social.name}
              >
                <social.icon className="mr-3 h-5 w-5" />
                <span className="text-sm">{social.name}</span>
              </a>
            ))}
          </div>
        </SurfaceCard>
      </div>

      <div>
        <MobileCTA
          href="/Resume_Julian_A.pdf"
          text="Download Resume"
          icon="download"
          download={true}
        />
      </div>
    </div>
  );
}

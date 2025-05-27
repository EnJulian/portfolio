import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { MobileCTA } from "@/components/mobile-cta";

export const metadata: Metadata = {
  title: `Contact | ${RESUME_DATA.name}`,
  description: "Get in touch with me",
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-800 pb-4 mb-6">
        <p>
          Feel free to reach out to me through any of the following channels:
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info Card */}
        <div className="rounded-lg border border-gray-800 p-4 bg-gray-950/50 hover:border-gray-700 transition-colors">
          <h2 className="text-base font-medium text-white mb-4">Direct Contact</h2>
          <div className="space-y-4">
            <div className="flex flex-col p-2 rounded hover:bg-black/30 transition-colors">
              <span className="text-gray-400 mb-1 text-xs">EMAIL</span>
              <a 
                href={`mailto:${RESUME_DATA.contact.email}`} 
                className="text-white hover:text-gray-400 break-all"
              >
                {RESUME_DATA.contact.email}
              </a>
            </div>
            <div className="flex flex-col p-2 rounded hover:bg-black/30 transition-colors">
              <span className="text-gray-400 mb-1 text-xs">PHONE</span>
              <a 
                href={`tel:${RESUME_DATA.contact.tel}`} 
                className="text-white hover:text-gray-400"
              >
                {RESUME_DATA.contact.tel}
              </a>
            </div>
            <div className="flex flex-col p-2 rounded hover:bg-black/30 transition-colors">
              <span className="text-gray-400 mb-1 text-xs">LOCATION</span>
              <a 
                href={RESUME_DATA.locationLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                {RESUME_DATA.location}
              </a>
            </div>
          </div>
        </div>
        
        {/* Social Media Card */}
        <div className="rounded-lg border border-gray-800 p-4 bg-gray-950/50 hover:border-gray-700 transition-colors">
          <h2 className="text-base font-medium text-white mb-4">Social Profiles</h2>
          <div className="grid grid-cols-2 gap-3">
            {RESUME_DATA.contact.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-2 rounded-md border border-gray-800 bg-black/30 text-gray-400 hover:text-white hover:border-gray-700 hover:bg-gray-900/30 transition-all"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5 mr-3" />
                <span className="text-sm">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <MobileCTA 
          href="/Resume_Julian_A_A.pdf"
          text="Download Resume"
          icon="download" 
          download={true}
        />
      </div>
    </div>
  );
}

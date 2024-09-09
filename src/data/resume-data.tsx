import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Julian Amoah",
  initials: "JAA",
  location: "Accra, Ghana",
  locationLink: "https://www.google.com/maps/place/Accra",
  about: "Software development thrills me.",
  summary:
    "As a Backend Engineer, I have a proven track record of transforming concepts into fully developed products. Currently, I specialize in TypeScript, Node.js, GraphQL, Go, Python, and .NET Core."
,
  avatarUrl:
    "https://res.cloudinary.com/dgtjf8v4b/image/upload/v1724425353/36317786_hkw9f9.png",
  personalWebsiteUrl: "https://enjulian.vercel.app",
  contact: {
    email: "envern.julian@gmail.com",
    tel: "+233 553220656",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/EnJulian",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/enjulian",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/lisentwig",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Kwame Nkrumah University of Science and Technology",
      degree: "Bachelor's Degree in Computer Science",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    // {
    //   company: "Hubtel",
    //   link: "https://hubtel.com",
    //   badges: ["On-Site"],
    //   title: "Lead Backend Engineer",
    //   logo: ParabolLogo,
    //   start: "2024",
    //   end: "Present",
    //   description:
    //     "Built highly scalable applications. Contributed to the growth and success of Hubtel, recently recognized as the 30th fastest-growing company in Africa. Technologies: C#, PostgresQL, Kafka, AKKA.NET",
    // },
    {
      company: "Enyata",
      link: "https://enyata.com",
      badges: ["On-Site"],
      title: "Backend Developer",
      logo: ParabolLogo,
      start: "2023",
      end: "Present",
      description:
        "Implemented new features, still developing applications. Technologies: TypeScript, GraphQL, Node.js, MongoDB, PostgresQL",
    },
  ],
  skills: [
    "C#",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    ".NET Core",
    "LINQ",
    "Entity Framework",
  ],
  projects: [
    {
      title: "Enyata Hackathon",
      techStack: ["Typescript", "Node.js", "React"],
      description: "Hackathon registration platform by Enyata",
      logo: YearProgressLogo,
      link: {
        label: "hack.enyata.com",
        href: "https://hack.enyata.com",
      },
    },
    {
      title: "MyPurplePay",
      techStack: ["TypeScript", "React", "PostgresQL", "Node.js"],
      description: "App for creating and managing savings groups.",
      logo: MonitoLogo,
      link: {
        label: "purple-vest.enyata.com",
        href: "https://purple-vest.enyata.com/",
      },
    },
    {
      title: "HRMS by Enyata",
      techStack: ["TypeScript", "React", "GraphQL", "MongoDB", "Node.js"],
      description: "SaaS for Human Resource Management.",
      logo: MonitoLogo,
      link: {
        label: "hrms.enyata.com",
        href: "https://hrms.enyata.com/",
      },
    },
    {
      title: "FluxTribe",
      techStack: ["Typescript", "Node.js", "React"],
      description: "Social app for collaborating on goals",
      logo: YearProgressLogo,
      link: {
        label: "merifot.enyata.com",
        href: "https://merifot.enyata.com",
      },
    },
    {
      title: "Campus Care",
      techStack: ["TypeScript", "React", "PostgresQL", "Node.js"],
      description: "Platform for managing student health.",
      logo: MonitoLogo,
      link: {
        label: "campus-care.onrender.com",
        href: "https://campus-care.onrender.com/",
      },
    },
    {
      title: "Digital Devhub",
      techStack: ["C#", ".NET Core", "React", "PostgresQL"],
      description: "Website for signing up and training Digital Devhub Scrum Masters.",
      logo: MonitoLogo,
      link: {
        label: "digital-devhub.onrender.com",
        href: "https://digital-devhub.onrender.com",
      },
    },
  ],
} as const;

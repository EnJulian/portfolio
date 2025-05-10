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
  // about: "Software development thrills me.",
  summary:
    "I'm a Backend Software Engineer with a proven ability to turn concepts into high-performance, fully realized backend solutions. I specialize in C#, .NET Core, TypeScript, Node.js and Python focusing on scalability, reliability, and clean architecture."
,
  avatarUrl: "",
    // "https://res.cloudinary.com/dgtjf8v4b/image/upload/v1724425353/36317786_hkw9f9.png",
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
      company: "Plendify",
      link: "https://plendify.com",
      badges: ["Contract"],
      title: "Backend Software Engineer",
      logo: ParabolLogo,
      start: "April 2025",
      end: "May 2025",
      description:
        "Rebuilt ecommerce webapp with new features Technologies: TypeScript, Node.js, PostgresQL",
    },
    {
      company: "Enyata",
      link: "https://enyata.com",
      badges: ["Full Time"],
      title: "Backend Software Engineer",
      logo: ParabolLogo,
      start: "2023",
      end: "2025",
      description:
        "Implemented new features, still developing applications. Technologies: TypeScript, GraphQL, Node.js, MongoDB, PostgresQL",
    },
  ],
  skills: [
    { name: "C#", url: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
    { name: ".NET Core", url: "https://dotnet.microsoft.com/" },
    { name: "TypeScript", url: "https://www.typescriptlang.org/" },
    { name: "Node.js", url: "https://nodejs.org/" },
    { name: "LINQ", url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/" },
    { name: "Entity Framework", url: "https://docs.microsoft.com/en-us/ef/" },
    { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React/Next.js", url: "https://nextjs.org/" },
    { name: "PostgreSQL", url: "https://www.postgresql.org/docs/current/index.html" },
    { name: "GraphQL", url: "https://graphql.org/" },
    { name: "Amazon Web Services", url: "https://docs.aws.amazon.com" },
    { name: "Amazon Route 53", url: "https://docs.aws.amazon.com/route53/" },
    { name: "Amazon CloudFront", url: "https://docs.aws.amazon.com/cloudfront/" },
    { name: "Amazon EC2", url: "https://docs.aws.amazon.com/ec2/?icmpid=docs_homepage_featuredsvcs" },
    { name: "Amazon S3", url: "https://docs.aws.amazon.com/s3/" },
  ],
  projects: [
    {
      title: "Plendify Marketplace",
      techStack: ["TypeScript", "React", "Node.js", "PostgresQL"],
      description: "An ecommerce website used to shop and ship items outside Ghana.",
      logo: MonitoLogo,
      link: {
        label: "plendify.com",
        href: "https://plendify.com",
      },
    },
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
        href: "https://digitaldevhub.org",
      },
    },
  ],
} as const;

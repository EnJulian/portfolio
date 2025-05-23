import JarockiMeLogo from "../images/logos/jarocki.svg";
import MonitoLogo from "../images/logos/monito.svg";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MastodonIcon } from "@/components/icons/MastodonIcon";
import { ClockIcon } from "@/components/icons/ClockIcon";

export const RESUME_DATA = {
  name: "Julian A. Amoah",
  initials: "JAA",
  location: "Accra, Ghana",
  locationLink: "https://www.google.com/maps/place/Accra",
  summary:
    "I'm a developer with a proven ability to turn concepts into high-performance, fully realized backend solutions. I specialize in C#, .NET Core, TypeScript, Node.js and Python focusing on scalability, reliability, and clean architecture."
,
  avatarUrl: "",
    // "https://res.cloudinary.com/dgtjf8v4b/image/upload/v1724425353/36317786_hkw9f9.png",
  personalWebsiteUrl: "https://enjulian.vercel.app",
  resumeUrl: "/Curriculum_Vitae_BSE_Julian.pdf",
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
        name: "Mastodon",
        url: "https://mastodon.social/@enjulian",
        icon: MastodonIcon,
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
    {
      company: "Plendify",
      link: "https://www.linkedin.com/company/plendify/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B8sYnlGc6SXSvIlvv8XZTLw%3D%3D",
      badges: ["Contract"],
      title: "Backend Software Engineer",
      logo: ParabolLogo,
      start: "2025",
      end: "Present",
      description:
        "Rebuilt ecommerce web-app with new features Technologies: TypeScript, Node.js, PostgreSQL",
    },
    {
      company: "Enyata",
      link: "https://www.linkedin.com/company/enyata/",
      badges: ["Full Time"],
      title: "Backend Software Engineer",
      logo: ParabolLogo,
      start: "2023",
      end: "Present",
      description:
        "Implemented new features, still developing applications. Technologies: TypeScript, GraphQL, Node.js, MongoDB, PostgreSQL",
    },
  ],
  skills: [
    { name: "C#", url: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
    { name: ".NET Core", url: "https://dotnet.microsoft.com/" },
    { name: "TypeScript", url: "https://www.typescriptlang.org/" },
    { name: "Node.js", url: "https://nodejs.org/" },
    { name: "AWS", url: "https://docs.aws.amazon.com" },
    { name: "React/Next.js", url: "https://nextjs.org/" },
    { name: "GraphQL", url: "https://graphql.org/" },
    { name: "Redis", url: "https://redis.io/docs/latest/" },
    { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "LINQ", url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/" },
    { name: "Entity Framework", url: "https://docs.microsoft.com/en-us/ef/" },
    { name: "PostgreSQL", url: "https://www.postgresql.org/docs/current/index.html" },
    { name: "Amazon Route 53", url: "https://docs.aws.amazon.com/route53/" },
    { name: "Amazon CloudFront", url: "https://docs.aws.amazon.com/cloudfront/" },
    { name: "Amazon EC2", url: "https://docs.aws.amazon.com/ec2/?icmpid=docs_homepage_featuredsvcs" },
    { name: "Amazon S3", url: "https://docs.aws.amazon.com/s3/" },
  ],
  projects: [
    {
      title: "Plendify Marketplace",
      techStack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
      description: "Ecommerce web-app for shopping globally. Now with a new design and new features.",
      logo: MonitoLogo,
      link: {
        label: "plendify.com",
        href: "https://plendify.com",
      },
      // githubLink: "https://github.com/EnJulian/plendify-marketplace",
    },
    {
      title: "MyPurplePay",
      techStack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
      description: "Mobile application for creating and managing savings groups. Now with loan management.",
      logo: MonitoLogo,
      link: {
        label: "purple-vest.enyata.com",
        href: "https://purple-vest.enyata.com/",
      },
    },
    {
      title: "Clearline",
      techStack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
      description: "Health maintenance organization (HMO) that provides various health insurance plans.",
      logo: MonitoLogo,
      link: {
        label: "clearlinehmo.com",
        href: "https://clearlinehmo.com",
      },
    },
    {
      title: "Build-A-Thon",
      techStack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
      description: "A hackathon where tech creatives collaborate to build innovative solutions and compete for prizes.",
      logo: YearProgressLogo,
      link: {
        label: "hack.enyata.com",
        href: "https://hack.enyata.com",
      },
    },
    {
      title: "HRMS by Enyata",
      techStack: ["TypeScript", "Node.js", "MongoDB", "GraphQL", "AWS"],
      description: "SaaS for Human Resource Management.",
      logo: MonitoLogo,
      link: {
        label: "hrms.enyata.com",
        href: "https://hrms.enyata.com/",
      },
    },
    {
      title: "Fluxtribe",
      techStack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "GraphQL", "AWS"],
      description: "Social app for collaborating on goals.",
      logo: YearProgressLogo,
      link: {
        label: "merifot.enyata.com",
        href: "https://merifot.enyata.com/auth/create-account",
      },
    },
    {
      title: "Campus Care",
      techStack: ["TypeScript", "Node.js", "PostgreSQL"],
      description: "Platform for managing student health. Including a dashboard for students and physicians.",
      logo: MonitoLogo,
      link: {
        label: "campus-care.onrender.com",
        href: "https://campus-care.onrender.com/",
      },
    },
    {
      title: "Digital Devhub",
      techStack: ["C#", ".NET Core", "PostgreSQL", "Redis"],
      description: "Website for onboarding and training Digital Devhub Scrum Masters.",
      logo: MonitoLogo,
      link: {
        label: "digital-devhub.onrender.com",
        href: "https://digitaldevhub.org",
      },
    },
  ],
  personalProjects: [
    {
      title: "Portfolio Website",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      description: "My personal portfolio website.",
      badgeIconTypes: ["none"],
      logo: JarockiMeLogo,
      link: {
        label: "enjulian.vercel.app",
        href: "https://enjulian.vercel.app",
      },
      githubLink: "https://github.com/EnJulian/portfolio",
    },
    {
      title: "Nodejs Typescript Template",
      techStack: ["TypeScript", "Node.js", "PostgreSQL"],
      description: "A scalable and modular Node.js TypeScript API template for quickly bootstrapping new projects.",
      badgeIconTypes: ["none"],
      logo: JarockiMeLogo,
      link: {
        label: "github.com/EnJulian/nodejs-typescript-template",
        href: "",
      },
      githubLink: "https://github.com/EnJulian/nodejs-typescript-template",
    },
    {
      title: "Task Manager API",
      techStack: ["C#", ".NET Core", "Entity Framework", "PostgreSQL"],
      description: "A RESTful API for managing tasks and projects with user authentication.",
      badgeIconTypes: ["clock"],
      logo: NSNLogo,
      link: {
        label: "github.com/EnJulian/TaskManagerAPI",
        href: "https://github.com/EnJulian/TaskManagerAPI",
      },
      githubLink: "https://github.com/EnJulian/TaskManagerAPI",
    },
    {
      title: "Weather Dashboard",
      techStack: ["React", "JavaScript", "OpenWeather API"],
      description: "A weather dashboard that displays current weather and forecasts for multiple locations.",
      badgeIconTypes: ["clock"],
      logo: YearProgressLogo,
      link: {
        label: "github.com/EnJulian/WeatherDashboard",
        href: "https://github.com/EnJulian/WeatherDashboard",
      },
      githubLink: "https://github.com/EnJulian/WeatherDashboard",
    },
  ],
} as const;

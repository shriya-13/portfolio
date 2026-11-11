/**
 * All portfolio content lives here. Edit this file to change the name, photo,
 * projects, skills, experience and contact links across every page.
 */
import collegeForYouPoster from "@/assets/collegeforyou-poster.jpg.asset.json";
import mindResetPoster from "@/assets/mind-reset-poster.jpg.asset.json";
import trexRunnerPoster from "@/assets/trex-runner-poster.jpg.asset.json";

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  /** One-line pitch shown on cards. */
  summary: string;
  /** The description box — a short paragraph about the project. */
  description: string;
  /** Key points shown as a list on the Work page. */
  highlights: string[];
  tags: string[];
  /** Project cover image. Leave out for projects that are still being built. */
  image?: string;
  links: { label: string; href: string }[];
  featured?: boolean;
  /** "building" shows the project as under construction. */
  status?: "live" | "building";
};

export type Social = { label: string; handle: string; href: string };

export const profile = {
  name: "Shriya Somyajula",
  handle: "shriya",
  role: "Computer Engineering Student & Web Developer",
  shortRole: "Web Developer",
  location: "Mumbai, India",
  availability: "Open to internships & freelance",
  /** Set to an imported image (e.g. `import photo from "@/assets/me.jpg"`) to show a photo. */
  photo: null as string | null,
  headline: "I build web tools that turn messy data into clear decisions.",
  intro:
    "Computer Engineering student at Somaiya Vidyavihar and freelance web developer. I build fast, data-driven websites and browser extensions — from structuring 150,000+ rows of government data to nudging people off the endless scroll.",
  bio: [
    "I'm a Computer Engineering student at Somaiya Vidyavihar College of Engineering, Mumbai, and a freelance web developer.",
    "My flagship project, College for You, is a JoSAA counselling seat calculator built on 150,000+ lines of historical cutoff data that I cleaned, structured and turned into a fast, cross-device interface.",
    "I also enjoy browser extensions and hackathons — from a Chrome extension that uses behavioural psychology to curb mindless scrolling, to designing backends and system architecture with a team under a deadline.",
  ],
  email: "somyajulashriya@gmail.com",
  socials: [
    { label: "LinkedIn", handle: "in/shriyasomyajula", href: "https://www.linkedin.com/in/shriyasomyajula/" },
    { label: "X / Twitter", handle: "@ShriyaSomyajula", href: "https://x.com/ShriyaSomyajula" },
    { label: "GitHub", handle: "shriya-13", href: "https://github.com/shriya-13" },
  ] satisfies Social[],
};

/** Socials shown in the "Let's connect" section after the projects. */
export const connectLinks = profile.socials.filter((s) => s.label === "LinkedIn" || s.label === "X / Twitter");

export const stats = [
  { value: "150K+", label: "Rows of data structured" },
  { value: "130+", label: "Institutes covered" },
  { value: "100+", label: "Hackathon participants" },
];

export const projects: Project[] = [
  {
    slug: "college-for-you",
    title: "College for You",
    year: "2025",
    category: "Website",
    summary: "A JoSAA counselling seat calculator — compare cutoffs and find your college.",
    description:
      "College for You helps engineering aspirants make sense of JoSAA counselling. Enter your rank, category, gender and home state, and it predicts the colleges and branches you can realistically get — with opening and closing ranks, fees and placement data for IITs, NITs, IIITs, GFTIs and top private colleges.",
    highlights: [
      "Prediction algorithm built on historical cutoffs, accounting for gender, home state and category.",
      "Cleaned and structured 150,000+ lines of disorganised government data into a responsive, cross-device interface.",
      "Serverless Netlify functions keep database queries secure and user data private.",
      "College preference cart, branch ranking filters and placement history dashboards.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Netlify Functions"],
    image: collegeForYouPoster.url,
    links: [{ label: "Visit website", href: "https://collegeforyou.in" }],
    featured: true,
    status: "live",
  },
  {
    slug: "mind-reset",
    title: "Mind Reset",
    year: "2026",
    category: "Chrome Extension",
    summary: "Scroll, slowly. A Chrome extension that gently breaks the doom-scroll loop.",
    description:
      "An intervention-based browser extension that uses behavioural psychology to reduce mindless social media use. Scrolling gradually slows down the longer you scroll, then a short guided meditation takes over the feed, followed by active recall of what you just consumed.",
    highlights: [
      "Slow — scroll speed eases down the longer you scroll.",
      "Breathe — a guided meditation takes over the feed.",
      "Recall — name what you just saw, from memory.",
      "Built on Chrome's Manifest APIs with content scripts and a background service worker.",
    ],
    tags: ["HTML", "JavaScript", "Chrome Manifest APIs", "Content Scripts"],
    image: mindResetPoster.url,
    links: [{ label: "View code", href: "https://github.com/shriya-13/Anti-scroll-chrome-extension-prototype" }],
    featured: true,
    status: "live",
  },
  {
    slug: "trex-runner",
    title: "T-Rex Runner",
    year: "2020",
    category: "Browser Game",
    summary: "Run offline. A from-scratch recreation of Google's offline dinosaur game.",
    description:
      "A from-scratch recreation of the dinosaur game Chrome shows when you're offline. Built entirely client-side with plain HTML, CSS and JavaScript — no game engine, no libraries.",
    highlights: [
      "Game loop, movement and obstacles written from scratch in vanilla JavaScript.",
      "Runs fully in the browser — no install, no server.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Browser Game"],
    image: trexRunnerPoster.url,
    links: [{ label: "View code", href: "https://github.com/shriya-13/trex-game" }],
    featured: true,
    status: "live",
  },
  {
    slug: "coming-soon",
    title: "Something new",
    year: "Soon",
    category: "Under construction",
    summary: "A new project is on the workbench. Check back soon.",
    description: "Currently being designed and built. Details will appear here once it ships.",
    highlights: [],
    tags: [],
    links: [],
    featured: true,
    status: "building",
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "JavaScript", "Python", "C++", "SQL", "HTML / CSS"] },
  { group: "Frameworks & Tools", items: ["Firebase", "Netlify", "GitHub", "Terminal", "Bash"] },
  { group: "Explored in hackathons", items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Redis"] },
  { group: "Browser", items: ["Chrome Extensions", "Content Scripts", "Service Workers"] },
];

export type Experience = { role: string; org: string; period: string; points: string[] };

export const experience: Experience[] = [
  {
    role: "Freelance Web Developer",
    org: "Highlift Pages",
    period: "Freelance",
    points: [
      "Resolved critical frontend bugs and shipped updates through GitHub for a live client website.",
      "Optimised the codebase and site structure, significantly speeding up page loads and ensuring full cross-device compatibility.",
    ],
  },
  {
    role: "First Year Representative",
    org: "Computer Society of India (CSI) Student Chapter",
    period: "Student chapter",
    points: [
      "Selected as one of only 10 representatives from 300+ applicants, with first preference for the technology domain.",
      "Helped organise a university-wide hackathon, managing logistics for 100+ participants.",
      "Core liaison driving first-year student engagement in technical events.",
    ],
  },
  {
    role: "B.Tech, Computer Engineering",
    org: "Somaiya Vidyavihar College of Engineering",
    period: "2026 — 2030 (expected)",
    points: [],
  },
];

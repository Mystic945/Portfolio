// ---------------------------------------------------------------------------
// Single source of truth for the portfolio copy. Edit here, not in components.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Pratik Sonar",
  handle: "Mystic945",
  location: "Pune, India",
  heading: "Hi, I'm Pratik",
  status: "available for work",
  bio: [
    "I'm Pratik Sonar — a full-stack developer and agentic-AI builder based in Pune, India. I take web apps from idea to production and ship them end to end.",
    "Right now I'm deep in agentic AI — RAG pipelines, LLM-powered features, and tool-using agents. I pair that with solid web fundamentals and a fast, AI-assisted workflow that turns a prototype into a deployed product.",
  ],
};

export const stats = [
  { label: "Full-stack", note: "frontend → DB", color: "amber" },
  { label: "Agentic AI", note: "RAG · LLM", color: "green" },
  { label: "Ship", note: "build & deploy", color: "cyan" },
];

// Sits under the profile picture — mirrors the reference "languages" row.
export const currently = [
  { name: "Agentic AI", level: "focus", color: "amber" },
  { name: "RAG / LLM", level: "building", color: "green" },
  { name: "React", level: "daily", color: "green" },
  { name: "C++", level: "learning", color: "amber" },
  { name: "Python", level: "learning", color: "amber" },
];

export const focus = [
  {
    period: "now",
    title: "Agentic AI Engineering",
    detail: "RAG pipelines · LLM apps · tool-using agents",
    tag: "AI",
  },
  {
    period: "now",
    title: "Full-Stack Web Development",
    detail: "React frontends · Node & FastAPI backends",
    tag: "WEB",
  },
  {
    period: "2026",
    title: "ConnectX · Stocklyzer",
    detail: "Two full-stack products — built, deployed, shipped",
    tag: "SHIP",
  },
  {
    period: "ongoing",
    title: "C++ & Python",
    detail: "Systems fundamentals and problem solving",
    tag: "CORE",
  },
];

export const projects = [
  {
    name: "ConnectX",
    link: "https://github.com/Mystic945/ConnectX",
    live: "https://connect-x-blond.vercel.app",
    blurb:
      "Student networking platform — swipe-based matching, real-time chat, and college-scoped discovery.",
    stack: "React · Express · MongoDB Atlas · Socket.io",
    accent: "green",
  },
  {
    name: "Stocklyzer",
    link: "https://github.com/Mystic945/Stocklyzer",
    live: "https://stocklyzer-nine.vercel.app",
    blurb:
      "AI-assisted portfolio tracker with risk & diversification analytics and plain-language commentary.",
    stack: "React · FastAPI · PostgreSQL",
    accent: "amber",
  },
  {
    name: "More on GitHub",
    link: "https://github.com/Mystic945",
    live: null,
    blurb: "Experiments, prototypes, and work in progress.",
    stack: "@Mystic945",
    accent: "cyan",
  },
];

export const skillTracks = [
  {
    label: "frontend",
    color: "amber",
    speed: "42s",
    reverse: false,
    items: ["HTML", "CSS", "JavaScript", "React", "Motion", "21st.dev", "Vite", "Git"],
  },
  {
    label: "backend",
    color: "teal",
    speed: "55s",
    reverse: true,
    items: ["Node.js", "Express", "FastAPI", "JWT", "Socket.io"],
  },
  {
    label: "data & ai",
    color: "cyan",
    speed: "38s",
    reverse: false,
    items: [
      "MongoDB Atlas",
      "PostgreSQL",
      "RAG",
      "LLM APIs",
      "Vector Search",
      "Vercel",
      "Render",
    ],
  },
];

export const contacts = [
  { kind: "github", label: "GitHub", href: "https://github.com/Mystic945" },
  {
    kind: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pratik-sonar-7b2647256/",
  },
  { kind: "email", label: "Email", href: "mailto:nsonar327@gmail.com" },
];

export const nav = [
  { href: "#top", label: "Home" },
  { href: "#focus", label: "Focus" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

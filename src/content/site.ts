export const site = {
  name: "Mustaf Ahmed",
  monogram: "MA",
  role: "AI Engineer & Full-Stack Developer",
  headline: "Engineering AI systems that do more than generate text.",
  intro:
    "I build AI-powered products, research workflows and data analysis systems, combining full-stack engineering with reliable AI integrations.",
  email: "ahmedmustaf103@gmail.com",
  github: "https://github.com/ahmedmustaf103-dot",
  linkedin: "https://www.linkedin.com/in/mustaf-ahmed-a08619398/",
} as const;

export const sections = [
  { id: "home", index: "01", label: "Intro" },
  { id: "projects", index: "02", label: "Work" },
  { id: "experience", index: "03", label: "Experience" },
  { id: "products", index: "04", label: "Products" },
  { id: "about", index: "05", label: "About" },
  { id: "contact", index: "06", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const capabilities = [
  {
    id: "jobtracker",
    href: "#project-jobtracker",
    label: "Job search",
    title: "JobTracker AI",
    detail: "Application tracking, cover letters, and tool-calling agents in one workspace.",
  },
  {
    id: "researchflow",
    href: "#project-researchflow",
    label: "Research",
    title: "ResearchFlow AI",
    detail: "A deterministic pipeline from question to sourced, verified report.",
  },
  {
    id: "insightflow",
    href: "#project-insightflow",
    label: "Analysis",
    title: "InsightFlow AI",
    detail: "Natural-language questions answered by real Pandas calculations.",
  },
] as const;

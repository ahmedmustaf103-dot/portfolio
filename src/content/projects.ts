export const jobtracker = {
  name: "JobTracker AI",
  problem:
    "Job search usually splits across a spreadsheet, a cover-letter doc, and a separate resume tool. Progress is hard to see, and the AI is not wired into the pipeline.",
  summary:
    "A signed-in workspace for tracking applications, drafting cover letters, analysing resumes, and matching a resume to a job description.",
  highlights: [
    "Shared capability handlers power both the in-app Gemini agent and a local MCP server with seven tools.",
    "Job Match scores are Gemini JSON validated with Zod — recommendation bands are derived from the score, not free text.",
  ],
  stack: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "Gemini", "OpenAI", "MCP", "Zod"],
  demo: "https://jobtracker-ai-tau.vercel.app/",
  repo: "https://github.com/ahmedmustaf103-dot/jobtracker-ai",
  caseStudy: "/projects/jobtracker-ai",
  screenshots: {
    dashboard: {
      src: "/projects/jobtracker/dashboard.png",
      alt: "JobTracker AI dashboard showing pipeline totals and recent applications",
    },
    coverLetters: {
      src: "/projects/jobtracker/cover-letters.png",
      alt: "JobTracker AI cover letter generator with company, role, and draft panel",
    },
  },
} as const;

export const researchflow = {
  name: "ResearchFlow AI",
  problem:
    "A research question dumped into a chatbot produces fluent text without a visible plan, provenance, or check that quotes actually exist in the sources.",
  summary:
    "A deterministic research pipeline that turns a question into a sourced brief: plan, search, retrieve, enrich, extract, verify, analyse, report.",
  highlights: [
    "Planning, extraction, analysis and reporting use Gemini structured output with Zod — the pipeline is not a free-roaming agent loop.",
    "MCP company profiles are local fixtures. They are not live company data. Full live Prisma + Gemini + Brave + Jina + MCP end-to-end is still pending.",
  ],
  stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "Gemini", "Brave Search", "Jina", "MCP", "Zod"],
  demo: "https://researchflow-ai-omega.vercel.app/",
  repo: "https://github.com/ahmedmustaf103-dot/researchflow-ai",
  caseStudy: "/projects/researchflow-ai",
  demoNote: "Deployed UI. A complete live pipeline run has not been verified.",
} as const;

export const insightflow = {
  name: "InsightFlow AI",
  problem:
    "Useful CSV data still needs someone who can write the analysis. A language model asked to ‘just calculate it’ will invent numbers.",
  summary:
    "Upload a CSV, ask a question in English, and get an answer grounded in Pandas — the model only plans and explains.",
  highlights: [
    "Plans that name a missing column, or that answer a different question (profit when the user asked for revenue), are rejected before anything runs.",
    "The model never reaches exec, eval, or a shell. Charts are derived from validated results, not from the prose.",
  ],
  stack: ["Next.js 16", "TypeScript", "Python", "Pandas", "Gemini", "Vercel AI SDK", "Zod"],
  demo: "https://insightflow-ai-eight.vercel.app/",
  repo: "https://github.com/ahmedmustaf103-dot/insightflow-ai",
  caseStudy: "/projects/insightflow-ai",
  demoNote: "Deployed UI. Live analysis on this host has not been verified in this pass.",
} as const;

export const bookflow = {
  name: "BookFlow AI",
  positioning: "Booking and business management software designed to simplify appointments for service businesses.",
  customers: "Built first for barbers and salons. The same booking idea can be adapted for other appointment-based shops — that is not a shipped multi-industry product.",
  problem:
    "Phone-tag booking and no-shows leave chairs empty. Calendar embeds rarely include staff, services, permissions, and the day-to-day ops view.",
  features: [
    "Public booking wizard on a shop slug",
    "Owner dashboard for calendar, clients, staff, services and hours",
    "Clerk authentication and org-scoped data",
    "Stripe plans and a notification outbox (email / SMS)",
  ],
  stack: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "Stripe"],
  demo: "https://bookflow-ai-isga.vercel.app/",
  booking: "https://bookflow-ai-isga.vercel.app/book/bookflow-demo",
  repo: "https://github.com/ahmedmustaf103-dot/bookflow-ai",
} as const;

import { insightflow, jobtracker, researchflow } from "@/content/projects";

export type FlowNode = {
  id: string;
  label: string;
  detail: string;
};

export type ToolRow = {
  name: string;
  purpose: string;
  surface: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  problem: string;
  why: string;
  users: string;
  overview: string;
  workflow: readonly string[];
  architecture: string;
  flow: FlowNode[];
  ai: string;
  reliability: string;
  testing: string;
  tools?: ToolRow[];
  decisions: string[];
  limitations: string[];
  stack: readonly string[];
  demo: string;
  repo: string;
  demoNote?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "jobtracker-ai",
    name: jobtracker.name,
    kicker: "Job search product",
    summary: jobtracker.summary,
    problem: jobtracker.problem,
    why: "A job search is a pipeline, not a chat. If cover letters, resume notes and application status live in different tabs, the AI cannot act on the same data the user is managing.",
    users: "People running an active search who need one signed-in workspace — not a recruiter ATS, and not a public job board.",
    overview:
      "Auth.js email/password sessions, an application pipeline from wishlist to offer, Gemini cover letters, an OpenAI resume analyzer, an in-app tool-calling assistant, a local stdio MCP server, and on-demand Job Match scores. Demo login: demo@jobtracker.ai / password123.",
    workflow: [
      "Track applications through a status pipeline, with a dashboard of totals and recent activity.",
      "Draft cover letters from company, role and job description, then save them against an application.",
      "Upload a resume; OpenAI analyses the extracted text.",
      "Ask the in-app Gemini assistant to search jobs, inspect the pipeline, and save or update applications.",
      "On an application detail page, run Job Match against the latest resume and the job description.",
      "Optionally connect a trusted local MCP host to the same capabilities.",
    ],
    architecture:
      "The Next.js app and the MCP server call the same capability handlers. Those handlers wrap Prisma services scoped by userId. There is one ownership model and one place to sanitize errors.",
    flow: [
      {
        id: "ui",
        label: "Next.js + Auth.js",
        detail: "JWT sessions. Dashboard, applications, cover letters, resume, assistant.",
      },
      {
        id: "agent",
        label: "Gemini agent",
        detail: "In-app function calling. Five tools: search jobs, pipeline stats, search, save and update applications.",
      },
      {
        id: "mcp",
        label: "MCP stdio",
        detail: "Seven tools for a trusted local host. Identity from MCP_USER_EMAIL or MCP_USER_ID — never from tool arguments.",
      },
      {
        id: "caps",
        label: "Shared capabilities",
        detail: "Zod validation, ownership checks, sanitized errors. Agent and MCP both land here.",
      },
      {
        id: "data",
        label: "Prisma + PostgreSQL",
        detail: "Neon in production. Resume files use local disk in development and Vercel Blob in production.",
      },
    ],
    tools: [
      { name: "search_remote_jobs", purpose: "Find remote openings (Jobicy, Remotive fallback)", surface: "Agent" },
      { name: "get_pipeline_stats", purpose: "Totals by application status", surface: "Agent + MCP" },
      { name: "search_applications", purpose: "Search the signed-in user’s applications", surface: "Agent" },
      { name: "save_application", purpose: "Create a tracked application", surface: "Agent + MCP" },
      { name: "update_application_status", purpose: "Update status with ownership checks", surface: "Agent" },
      { name: "search_jobs", purpose: "Search remote openings", surface: "MCP" },
      { name: "get_applications", purpose: "List or search applications", surface: "MCP" },
      { name: "get_application_details", purpose: "Application plus timeline, ownership-scoped", surface: "MCP" },
      { name: "update_application", purpose: "Full field update, ownership-checked", surface: "MCP" },
      { name: "generate_cover_letter", purpose: "Generate with Gemini and save", surface: "MCP" },
    ],
    ai: "Cover letters use Gemini. Resume analysis uses OpenAI. The assistant uses Gemini function calling. Job Match asks Gemini for JSON, validates it with Zod, clamps the score to 0–100, and derives the recommendation band from that score. Gaps are phrased as ‘not mentioned in the resume’, not as facts about the candidate. Job search uses Jobicy with a Remotive fallback.",
    reliability:
      "Capability errors strip secrets and connection strings before they reach the UI or MCP client. Rate limits sit on AI and upload actions. MCP is a local trusted stdio process, not remote multi-tenant OAuth. Job Match scores are not persisted.",
    testing:
      "The repo defines a deterministic eval suite covering tool routing, ownership, invalid input, job search, cover letters, job match, and MCP response formatting — 31 cases by inspection of evals/ plus mcp/src/format.test.ts. scripts/verify-mcp.mjs records 19 smoke checks. Playwright has 5 live-demo smokes, including Job Match UI without submitting to Gemini. Those commands were not re-run in this portfolio pass because the JobTracker install was not present on this machine.",
    decisions: [
      "Share capability handlers instead of duplicating Prisma and Gemini logic for MCP.",
      "Keep Job Match on the application detail page — not as an agent or MCP tool.",
      "Treat MCP as a local developer host, not a hosted multi-user API.",
    ],
    limitations: [
      "Job Match is recomputed on demand and not stored.",
      "Resume quality depends on text extraction and OpenAI quota.",
      "MCP is not a remote, OAuth-protected service.",
    ],
    stack: jobtracker.stack,
    demo: jobtracker.demo,
    repo: jobtracker.repo,
  },
  {
    slug: "researchflow-ai",
    name: researchflow.name,
    kicker: "Research pipeline",
    summary: researchflow.summary,
    problem: researchflow.problem,
    why: "Research needs a plan, sources, and a way to reject quotes that never appeared. A single completion can sound sourced while inventing both the facts and the citations.",
    users: "The first product workflow is a sourced real-estate brief — competitor, property, area, developer, or market. The engine is domain-shaped, not a general chatbot. Intended readers include estate agents, property analysts, developers and research teams.",
    overview:
      "A stored project moves through Question → Plan → Search → Retrieve → Enrich → Extract → Verify → Analyse → Report. Planning, extraction, analysis and reporting use Gemini structured output. Search is Brave. Retrieval is Jina. Enrichment is an MCP company-profile lookup.",
    workflow: [
      "A research question is stored as the project brief. Nothing is searched or generated until a plan exists.",
      "Gemini returns a structured plan. Task count is capped at 6 research tasks.",
      "Brave Search runs as an internal tool. Tests inject a mock. Live calls are optional.",
      "Jina Reader fetches page text, capped at 12 pages.",
      "MCP lookup_company_profile attaches a local fixture profile only when a retrieved hostname matches.",
      "Findings are extracted as structured objects. Quoted claims are checked against retrieved text.",
      "Citation hygiene is checked in code. Report URLs are never taken from the model.",
      "Structured analysis keeps conflicts and gaps visible. The report is generated from persisted sources and findings.",
    ],
    architecture:
      "Stages are a deterministic orchestrator with dependency-injected tools. Gemini sits behind an LLMProvider. Tests use mocks. The LLM does not choose MCP tools — the pipeline calls lookup_company_profile when a retrieved hostname matches.",
    flow: [
      { id: "plan", label: "Plan", detail: "Gemini + Zod. Task count is capped (6 research tasks)." },
      { id: "search", label: "Search", detail: "Brave Search. Tests inject a mock. Live calls are optional." },
      { id: "retrieve", label: "Retrieve", detail: "Jina Reader, capped at 12 pages." },
      {
        id: "enrich",
        label: "Enrich",
        detail: "MCP lookup_company_profile against local fixtures. Not a live company API.",
      },
      {
        id: "verify",
        label: "Verify + report",
        detail: "Quote checks against retrieved text. Citations must match stored source IDs.",
      },
    ],
    ai: "Gemini is used where structure helps: plan, extract, analyse, report. Search and retrieval are ordinary HTTP tools. MCP enrichment is fixture-backed for known hostnames (stripe.com, adyen.com, paypal.com, emaar.com, damacproperties.com, select-group.ae). Unknown domains return not found and do not fail the project. Transient Gemini 429s retry once with a short backoff.",
    reliability:
      "Quote support and citation hygiene are scored in the eval layer. Hallucinated quotes are rejected. Report URLs are never taken from the model. Research Trace is rebuilt from persisted tasks, sources, findings and the report — it does not invent events that were never stored.",
    testing:
      "npm run test:eval was run for this portfolio pass: 22/22 tests passed (quality, reliability, and eval-runner cases). Those evals use fixtures and mocks. They are not a live Brave + Jina + Gemini + MCP run. Full live Prisma + Gemini + Brave + Jina + MCP E2E remains pending after previous attempts stopped on Gemini HTTP 429.",
    decisions: [
      "Orchestrate a fixed pipeline instead of a free-roaming agent loop.",
      "Keep MCP as an explicit client/server call, not a model-selected tool.",
      "Treat missing prices and specifications as gaps, not guesses.",
    ],
    limitations: [
      "MCP profiles are local demo fixtures, not live market or company data.",
      "The product is research support — not valuation or investment advice.",
      "A complete live end-to-end pipeline run has not been verified.",
      "Search and retrieval stay inside current caps: 6 tasks, 5 results each, 12 pages, 3 profile lookups.",
    ],
    stack: researchflow.stack,
    demo: researchflow.demo,
    repo: researchflow.repo,
    demoNote: researchflow.demoNote,
  },
  {
    slug: "insightflow-ai",
    name: insightflow.name,
    kicker: "Data analysis",
    summary: insightflow.summary,
    problem: insightflow.problem,
    why: "If the model both interprets the question and invents the arithmetic, a confident answer can still be the wrong number. That is unsafe for any decision that depends on the total.",
    users: "Someone with a CSV who can ask a question in English. There is no account, no saved history, and no database.",
    overview:
      "Upload one CSV. Pandas profiles it. Gemini proposes an AnalysisPlan. The plan is validated against the schema and the user’s intent. A closed Pandas catalog runs aggregate, trend, or detail. Results and numeric claims are checked before the explanation is shown. Charts come from the validated table.",
    workflow: [
      "Upload one CSV (defaults: 5 MB, 50,000 rows). Pandas profiles columns, types and nulls.",
      "Gemini returns a structured AnalysisPlan. It does not return numbers.",
      "The plan is checked against the profile and the user’s wording. Unknown columns fail. A plan that answers profit when the user asked for revenue is rejected.",
      "One optional repair is allowed. A repair cannot change the question.",
      "Pandas runs only aggregate, trend or detail. No derived metrics such as profit from revenue and cost.",
      "Result validation, numeric claim checks and deterministic chart selection happen before the answer is shown.",
    ],
    architecture:
      "Gemini is behind LLMProvider (GeminiLLMProvider or MockLLMProvider). TypeScript orchestrates. Python profile.py and execute.py speak JSON on stdin/stdout. The model never reaches exec, eval, or a shell.",
    flow: [
      {
        id: "csv",
        label: "CSV + profile",
        detail: "Pandas inspects columns, types and nulls. Limits: 5 MB, 50,000 rows by default.",
      },
      {
        id: "plan",
        label: "AnalysisPlan",
        detail: "Gemini structured output. One optional repair. A repair cannot change the question.",
      },
      {
        id: "guard",
        label: "Validate intent",
        detail: "Unknown columns fail. A plan that answers profit when the user asked for revenue is rejected.",
      },
      {
        id: "run",
        label: "Pandas catalog",
        detail: "aggregate, trend, or detail only. No derived metrics such as profit from revenue and cost.",
      },
      {
        id: "check",
        label: "Evidence",
        detail: "Result validation, numeric claim checks, deterministic chart selection.",
      },
    ],
    ai: "A normal question uses two Gemini calls: plan and explanation. An invalid first plan adds one repair call. That is the maximum. GEMINI_API_KEY stays on the server. Default model is gemini-2.5-flash.",
    reliability:
      "Intent preservation is a hard gate. The evaluation fixture ‘derived-profit’ exists so a missing profit column cannot be silently rewritten as revenue. Claim verification compares numbers in the explanation to the computed result.",
    testing:
      "npm test was run for this portfolio pass: 99/99 tests passed, including the evaluation suite. That suite reported 29/29 cases for plan accuracy, intent preservation, result validation, claim verification and chart selection. It uses MockLLMProvider and never calls Gemini. Live analysis on the Vercel host was not verified here.",
    decisions: [
      "Keep numbers out of the model. Pandas calculates; the LLM only plans and explains.",
      "Reject intent drift instead of ‘helpfully’ answering a nearby question.",
      "Prohibit arbitrary generated Python.",
    ],
    limitations: [
      "CSV only, one dataset at a time.",
      "No authentication and no saved history.",
      "Operations are limited to aggregate, trend and detail.",
      "No derived business metrics.",
      "The deployed UI exists; live analysis on that host has not been verified in this pass.",
    ],
    stack: insightflow.stack,
    demo: insightflow.demo,
    repo: insightflow.repo,
    demoNote: insightflow.demoNote,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export const otherStudies = (slug: string) => caseStudies.filter((study) => study.slug !== slug);

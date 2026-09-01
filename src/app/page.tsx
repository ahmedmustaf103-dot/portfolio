import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "Clerk",
  "Stripe",
  "Firebase",
  "SaaS Development",
  "JavaScript",
  "Tailwind CSS",
  "HTML & CSS",
  "Responsive Design",
  "Web Accessibility",
  "Git & GitHub",
  "AI-assisted development",
];

const projects = [
  {
    title: "BookFlow AI",
    description:
      "A multi-tenant booking SaaS for barbers and salons — public booking, ops dashboard, Stripe billing, automation, and AI on one stack.",
    image: "https://placehold.co/640x360/1a1a1a/ffffff?text=BookFlow+AI",
    liveHref: "https://bookflow-ai-isga.vercel.app/",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "Stripe"],
  },
  {
    title: "JobTracker AI",
    description:
      "A full-stack SaaS platform for tracking job applications with auth, PostgreSQL, dashboards, and AI-powered cover letters and resume analysis.",
    image: "https://placehold.co/640x360/1a1a1a/ffffff?text=JobTracker+AI",
    githubHref: "https://github.com/ahmedmustaf103-dot/jobtracker-ai",
    liveHref: "https://jobtracker-ai-tau.vercel.app/",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js"],
  },
  {
    title: "Ecommerce Site",
    description:
      "A full-stack ecommerce app with authentication, product data management, and API-driven user flows.",
    image: "https://placehold.co/640x360/1a1a1a/ffffff?text=Ecommerce+Site",
    githubHref: "https://github.com/ahmedmustaf103-dot/ecomerce",
    liveHref: "https://ecomerce-phi.vercel.app/",
    tech: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Movie Site",
    description:
      "A movie discovery frontend built with Next.js and TypeScript, consuming external APIs with a clean mobile-first UI.",
    image: "https://placehold.co/640x360/1a1a1a/ffffff?text=Movie+Site",
    githubHref: "https://github.com/ahmedmustaf103-dot/moviesite",
    liveHref: "https://moviesite-tau-lake.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Finance Dashboard",
    description:
      "A responsive finance dashboard interface focused on clear data presentation, card layout, and fast navigation.",
    image: "https://placehold.co/640x360/1a1a1a/ffffff?text=Finance+Dashboard",
    githubHref: "https://github.com/ahmedmustaf103-dot/dashboard",
    liveHref: "https://dashboard-ivory-eta-66.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Chatbot React",
    description:
      "A chatbot web app using API-based responses, component-driven architecture, and smooth conversation UX.",
    image: "https://placehold.co/640x360/1a1a1a/ffffff?text=Chatbot+React",
    githubHref: "https://github.com/ahmedmustaf103-dot/chatbot-react",
    liveHref: "https://chatbot-react-tawny.vercel.app/",
    tech: ["React", "JavaScript"],
  },
];

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] text-white">
      <Hero
        name="Mustaf Ahmed"
        role="Full-Stack Developer (React)"
        intro="Full-Stack Developer | React • Firebase • APIs | Building & Deploying Real-World Web Apps — including BookFlow AI, a multi-tenant booking SaaS with authentication, databases, and AI integrations."
      />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact
        email="ahmedmustaf103@gmail.com"
        links={[
          { label: "GitHub", href: "https://github.com/ahmedmustaf103-dot" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/mustaf-ahmed-a08619398/" },
        ]}
      />
    </main>
  );
}

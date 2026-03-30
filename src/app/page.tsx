import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
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
    title: "Ecommerce Site",
    description:
      "A responsive ecommerce frontend with clear product browsing and a streamlined user flow.",
    image: "https://placehold.co/640x360/1a1a1a/ffffff?text=Ecommerce+Site",
    githubHref: "https://github.com/ahmedmustaf103-dot/ecomerce",
    liveHref: "https://ecomerce-phi.vercel.app/",
    tech: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Movie Site",
    description:
      "A movie discovery web app built with typed components and a clean, mobile-first layout.",
    image: "https://placehold.co/640x360/1a1a1a/ffffff?text=Movie+Site",
    githubHref: "https://github.com/ahmedmustaf103-dot/moviesite",
    liveHref: "https://moviesite-tau-lake.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Finance Dashboard",
    description:
      "A finance dashboard UI presenting key metrics with clear hierarchy and responsive card layouts.",
    image: "https://placehold.co/640x360/1a1a1a/ffffff?text=Finance+Dashboard",
    githubHref: "https://github.com/ahmedmustaf103-dot/dashboard",
    liveHref: "https://dashboard-ivory-eta-66.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Chatbot React",
    description:
      "A chatbot interface focused on conversation flow, reusable message components, and smooth UX.",
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
        role="Junior Frontend Developer"
        intro="I build clean, responsive, and user-focused web interfaces using React, Next.js, and TypeScript."
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

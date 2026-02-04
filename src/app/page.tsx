import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WorkWithMe from "@/components/WorkWithMe";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML & CSS",
];

const projects = [
  {
    title: "Cookie Clicker",
    description: "A classic incremental clicker game built with vanilla JavaScript. Tracks clicks, upgrades, and progress with a clean UI.",
    highlight: "First time wiring game logic and state without a framework.",
    href: "https://github.com/ahmedmustaf103-dot/cookie-clicker",
    liveHref: "https://cookie-clicker-gules-omega.vercel.app/",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Todo React App",
    description: "A task manager built with React. Add, complete, and manage todos with a simple, responsive interface.",
    highlight: "Solidified React state and component composition.",
    href: "https://github.com/ahmedmustaf103-dot/todo-react-app",
    liveHref: "https://todo-react-app-green-kappa.vercel.app/",
    tech: ["React", "CSS"],
  },
  {
    title: "Chatbot React",
    description: "A conversational chatbot interface built with React and JavaScript. Demonstrates component structure and state handling.",
    highlight: "Built a full UI flow and learned to structure chat-style UIs.",
    href: "https://github.com/ahmedmustaf103-dot/chatbot-react",
    liveHref: "https://chatbot-react-tawny.vercel.app/",
    tech: ["React", "JavaScript"],
  },
];

export default function Home() {
  return (
    <>
      <Nav name="Mustaf Ahmed" />
      <Hero
        name="Mustaf Ahmed"
        tagline="I build web apps that are fast and easy to use—and I'd love to build yours."
      />
      <About heading="About">
        <p>
          I'm Mustaf Ahmed, a frontend developer focused on building clean,
          responsive web apps and side projects with React, Next.js, and
          TypeScript.
        </p>
        <p>
          I care about fast, accessible interfaces—and I enjoy turning ideas
          into real products while learning new tools as I go.
        </p>
        <p>
          I'm looking for my first full-time role or freelance work—remote or
          on-site.
        </p>
      </About>
      <Skills heading="Skills & Tech" skills={skills} />
      <Projects heading="My Projects" projects={projects} />
      <WorkWithMe line="Available for freelance and full-time roles." />
      <Testimonial
        quote="Add a short quote from a mentor, peer, or client when you have one."
        attribution="— Name, Role or Company"
      />
      <Contact
        heading="Get in touch"
        email="ahmedmustaf103@gmail.com"
        copy="Have a project in mind or want to chat? I'd love to hear from you."
        links={[
          { label: "GitHub", href: "https://github.com/ahmedmustaf103-dot" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/mustaf-ahmed-a08619398/" },
        ]}
      />
      <Footer
        name="Mustaf Ahmed"
        socialLinks={[
          { label: "GitHub", href: "https://github.com/ahmedmustaf103-dot" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/mustaf-ahmed-a08619398/" },
        ]}
      />
    </>
  );
}

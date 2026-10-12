import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Rule } from "@/components/ui/Rule";

export function SiteFooter() {
  return (
    <footer className="pb-10">
      <Container>
        <Rule className="mb-6" />
        <div className="flex flex-col gap-3 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.name}
            <span className="mx-2 text-line">/</span>
            {new Date().getFullYear()}
          </p>
          <div className="flex gap-5">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-ink">
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

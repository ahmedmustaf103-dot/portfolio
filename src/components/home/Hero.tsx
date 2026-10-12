import { site } from "@/content/site";
import { CapabilityBoard } from "@/components/home/CapabilityBoard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";

export function Hero() {
  return (
    <section id="home" className="scroll-mt-16 border-b border-line">
      <Container className="grid items-start gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:gap-16 lg:py-24">
        <div className="reveal">
          <Kicker>{site.role}</Kicker>
          <h1 className="mt-6 font-serif text-[2.15rem] leading-[1.1] tracking-[-0.03em] text-ink sm:text-[3.15rem] lg:text-[3.55rem]">
            Engineering AI systems
            <br />
            that do more than
            <br />
            generate text.
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-mute sm:text-[1.05rem]">
            {site.intro}
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="#projects">Explore my projects</Button>
            <Button href={site.github} variant="secondary" target="_blank" rel="noopener noreferrer">
              View GitHub
            </Button>
            <Button href="#contact" variant="ghost">
              Discuss a project
            </Button>
          </div>
        </div>
        <div className="reveal lg:mt-16">
          <CapabilityBoard />
        </div>
      </Container>
    </section>
  );
}

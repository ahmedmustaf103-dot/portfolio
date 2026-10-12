import { BookFlowFeature } from "@/components/home/BookFlowFeature";
import { Chapter } from "@/components/home/Chapter";
import { Hero } from "@/components/home/Hero";
import { InsightFlowFeature } from "@/components/home/InsightFlowFeature";
import { JobTrackerFeature } from "@/components/home/JobTrackerFeature";
import { OutlineRow } from "@/components/home/OutlineRow";
import { ResearchFlowFeature } from "@/components/home/ResearchFlowFeature";
import { site } from "@/content/site";

export default function Home() {
  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <Hero />

      <Chapter id="projects" index="02" label="Work" title="Selected engineering work">
        <p className="-mt-6 mb-14 max-w-xl text-mute">
          Three AI systems — job search, research, and data analysis — each built as
          complete software, not a prompt wrapper.
        </p>
        <div className="space-y-24">
          <JobTrackerFeature />
          <ResearchFlowFeature />
          <InsightFlowFeature />
        </div>
      </Chapter>

      <Chapter id="experience" index="03" label="Experience" title="Commercial software">
        <OutlineRow
          id="experience-agentzero"
          name="AgentZero"
          summary="Contributions to an existing multi-tenant product codebase — inbound lead capture, WhatsApp callback routing, and careful work inside a live commercial system."
        />
      </Chapter>

      <Chapter
        id="products"
        index="04"
        label="Products"
        title="Business products"
        tone="warm"
      >
        <BookFlowFeature />
      </Chapter>

      <Chapter id="about" index="05" label="About" title="Building useful software">
        <div className="grid gap-10 lg:grid-cols-2">
          <p className="max-w-xl text-mute">
            I care about architecture, validation and whether a system still works when
            the model is wrong. Most of my work sits between product thinking and
            implementation — turning a practical problem into software someone can use.
          </p>
          <p className="max-w-xl text-mute">
            I learn by shipping: structured outputs, tool integrations, tests, and the
            unglamorous work of making an AI feature reliable enough to demo without
            apology.
          </p>
        </div>
      </Chapter>

      <Chapter id="contact" index="06" label="Contact" title="Two conversations. One inbox.">
        <div className="grid gap-10 border-t border-line pt-10 lg:grid-cols-2">
          <div>
            <h3 className="text-lg text-ink">For engineering roles</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-mute">
              Open to AI engineering, AI software engineering, and full-stack roles.
              The fastest way to evaluate my work is the three projects above and GitHub.
            </p>
          </div>
          <div>
            <h3 className="text-lg text-ink">For business software</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-mute">
              If you need a booking platform, internal tools, or suitable AI automation,
              start with BookFlow and tell me what you run today.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <a href={`mailto:${site.email}`} className="text-ink hover:text-signal">
            {site.email}
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-mute hover:text-ink">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-mute hover:text-ink">
            LinkedIn
          </a>
        </div>
      </Chapter>
    </main>
  );
}

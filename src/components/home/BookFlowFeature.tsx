import { BookingWizard } from "@/components/previews/BookingWizard";
import { Button } from "@/components/ui/Button";
import { StackList } from "@/components/home/StackList";
import { bookflow } from "@/content/projects";
import { site } from "@/content/site";

export function BookFlowFeature() {
  return (
    <article id="product-bookflow" className="scroll-mt-24">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <BookingWizard />
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-warm">Business product</p>
          <h3 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-ink sm:text-4xl">
            {bookflow.name}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-ink/85 sm:text-base">{bookflow.positioning}</p>
          <p className="mt-4 text-sm leading-relaxed text-mute">{bookflow.problem}</p>
          <p className="mt-4 text-sm leading-relaxed text-mute">{bookflow.customers}</p>
          <ul className="mt-6 space-y-2 text-sm text-mute">
            {bookflow.features.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-warm" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <StackList items={bookflow.stack} />
          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <Button href={`mailto:${site.email}`}>Discuss a booking system</Button>
            <Button href={bookflow.booking} variant="secondary" target="_blank" rel="noopener noreferrer">
              Try the demo
            </Button>
            <Button href={bookflow.repo} variant="ghost" target="_blank" rel="noopener noreferrer">
              GitHub
            </Button>
          </div>
          <p className="mt-4 text-xs text-mute">
            Need a booking system or custom business software? Let’s discuss your requirements.
          </p>
        </div>
      </div>
    </article>
  );
}

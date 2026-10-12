import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main
      id="content"
      tabIndex={-1}
      className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center outline-none"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">404</p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight">This page does not exist.</h1>
      <p className="mt-3 max-w-md text-mute">The work lives on the homepage.</p>
      <Button href="/" className="mt-8">
        Back home
      </Button>
    </main>
  );
}

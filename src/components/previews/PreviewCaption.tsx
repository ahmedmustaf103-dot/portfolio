export function PreviewCaption({ children }: { children: string }) {
  return (
    <p className="border-t border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
      {children}
    </p>
  );
}

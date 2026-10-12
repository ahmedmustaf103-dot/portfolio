export function StackList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-mute">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

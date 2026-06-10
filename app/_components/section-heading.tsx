export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xl font-semibold uppercase tracking-[0.18em] text-[var(--color-blue)]">
      {children}
    </h2>
  );
}

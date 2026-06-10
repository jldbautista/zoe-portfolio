export default function SectionPanel({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-6 rounded-[20px] border border-[var(--color-border)] bg-[var(--color-panel)] ${className}`}
    >
      {children}
    </section>
  );
}

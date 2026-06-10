export default function Footer() {
  return (
    <footer className="pb-5 pt-1 text-center font-mono text-xs text-[var(--color-muted)] sm:flex sm:items-center sm:justify-center sm:gap-8">
      <p>© 2026 Zoe Bremer</p>
      <span className="hidden h-4 w-px bg-[var(--color-border-strong)] sm:block" />
      <p className="mt-2 sm:mt-0">UC Davis Chemical Engineering Student</p>
    </footer>
  );
}

export default function BackToTop() {
  return (
    <a
      href="#home"
      className="fixed bottom-5 right-5 z-30 grid h-12 w-12 place-items-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-panel)] text-[var(--color-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-blue)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      aria-label="Back to top"
    >
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 19 .1-14" />
        <path d="m6 11 6-6 6 6" />
      </svg>
    </a>
  );
}

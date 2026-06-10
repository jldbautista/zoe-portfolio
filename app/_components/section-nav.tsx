"use client";

import type { NavItem } from "../_lib/types";

type SectionNavProps = {
  items: NavItem[];
};

export default function SectionNav({ items }: SectionNavProps) {
  function handleClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    const target = document.getElementById(href.replace("#", ""));

    if (!target) return;

    event.preventDefault();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center",
    });

    window.history.pushState(null, "", href);
  }

  return (
    <nav
      className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-1 lg:justify-end lg:gap-x-7"
      aria-label="Primary navigation"
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(event) => handleClick(event, item.href)}
          className="group inline-flex flex-col items-center rounded-md px-1 py-1 font-mono text-sm font-semibold uppercase leading-none tracking-[0.18em] text-[var(--color-muted)] transition-colors duration-200 hover:text-[var(--color-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-blue)]"
        >
          {item.label}
          <span className="mt-1 block h-px w-0 bg-[var(--color-blue)] transition-all duration-300 ease-out group-hover:w-full" />
        </a>
      ))}
    </nav>
  );
}

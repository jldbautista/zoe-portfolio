import type { IconName } from "../_lib/types";

export default function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "graduation":
      return (
        <svg {...props}>
          <path d="m3 8.5 9-4 9 4-9 4-9-4Z" />
          <path d="M7 11v4.5c2.8 2 7.2 2 10 0V11" />
          <path d="M21 9v6" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.35 3.5h13.3c1.02 0 1.85.83 1.85 1.85v13.3c0 1.02-.83 1.85-1.85 1.85H5.35a1.85 1.85 0 0 1-1.85-1.85V5.35c0-1.02.83-1.85 1.85-1.85Zm2.25 6.68v7.25h2.25v-7.25H7.6Zm-.18-2.28c0 .72.54 1.27 1.32 1.27.77 0 1.31-.55 1.31-1.27 0-.73-.54-1.28-1.31-1.28-.78 0-1.32.55-1.32 1.28Zm3.95 9.53h2.25v-4.05c0-.22.02-.44.08-.6.16-.44.55-.9 1.2-.9.85 0 1.19.68 1.19 1.66v3.89h2.25v-4.16c0-2.23-1.15-3.27-2.68-3.27-1.25 0-1.8.7-2.1 1.18h.02v-1h-2.21c.03.64 0 7.25 0 7.25Z" />
        </svg>
      );
    case "location":
      return (
        <svg {...props}>
          <path d="M19 10c0 5-7 11-7 11s-7-6-7-11a7 7 0 0 1 14 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "person":
      return (
        <svg {...props}>
          <circle cx="12" cy="7.5" r="3" />
          <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
        </svg>
      );
  }
}

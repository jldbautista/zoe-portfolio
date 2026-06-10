import { experiences } from "../_data/site-data";
import type { Experience } from "../_lib/types";
import SectionHeading from "./section-heading";
import SectionPanel from "./section-panel";

export default function ExperienceSection() {
  return (
    <SectionPanel
      id="experience"
      className="relative px-6 py-7 sm:px-8 lg:px-12"
    >
      <SectionHeading>Experience</SectionHeading>
      <div className="mt-5 grid gap-7">
        <div className="relative">
          <div
            className="absolute left-[18px] top-2 hidden h-[calc(100%-24px)] w-px bg-[var(--color-border-strong)] sm:block"
            aria-hidden="true"
          />
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.title}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionPanel>
  );
}

function ExperienceItem({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <article
      className={`grid gap-4 py-5 sm:grid-cols-[48px_270px_1fr] ${
        index > 0 ? "border-t border-dashed border-[var(--color-border-light)]" : ""
      }`}
    >
      <div className="hidden pt-1 sm:block">
        <span className="relative z-10 block h-4 w-4 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-panel)] p-0.5">
          <span className="block h-full w-full rounded-full bg-[var(--color-green)]" />
        </span>
      </div>
      <div>
        <h3 className="font-mono text-base font-semibold leading-6 text-[var(--color-text)]">
          {experience.title}
        </h3>
        <p className="mt-1 font-mono text-sm font-semibold text-[var(--color-blue)]">
          {experience.organization}
        </p>
        <p className="mt-1 font-mono text-xs text-[var(--color-muted)]">
          {experience.date}
        </p>
      </div>
      <p className="border-t border-[var(--color-border-light)] pt-4 font-sans text-sm leading-6 text-[var(--color-text-soft)] sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
        {experience.description}
      </p>
    </article>
  );
}

import { education } from "../_data/site-data";
import type { Education } from "../_lib/types";
import SectionHeading from "./section-heading";
import SectionPanel from "./section-panel";

export default function EducationSection() {
  return (
    <SectionPanel
      id="education"
      className="relative px-6 py-7 sm:px-8 lg:px-12"
    >
      <SectionHeading>Education</SectionHeading>
      <div className="mt-5 grid gap-0">
        {education.map((item, index) => (
          <EducationItem key={item.degree} education={item} index={index} />
        ))}
      </div>
    </SectionPanel>
  );
}

function EducationItem({
  education,
  index,
}: {
  education: Education;
  index: number;
}) {
  const coursework = education.details.replace(/^Relevant Coursework:\s*/, "");

  return (
    <article
      className={`grid gap-3 py-5 ${
        index > 0 ? "border-t border-dashed border-[var(--color-border-light)]" : ""
      }`}
    >
      <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-start">
        <h3 className="font-mono text-base font-semibold leading-6 text-[var(--color-text)]">
          {education.degree}
        </h3>
        <p className="font-mono text-xs text-[var(--color-muted)] sm:text-sm">
          {education.date}
        </p>
      </div>
      <p className="font-mono text-sm font-semibold text-[var(--color-blue)]">
        {education.school}
      </p>
      <p className="font-sans text-sm leading-6 text-[var(--color-text-soft)]">
        <span className="font-bold">Relevant Coursework:</span> {coursework}
      </p>
    </article>
  );
}

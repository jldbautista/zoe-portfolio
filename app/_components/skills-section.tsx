import { focusAreas, skills } from "../_data/site-data";
import SectionHeading from "./section-heading";
import SectionPanel from "./section-panel";

export default function SkillsSection() {
  return (
    <div id="skills" className="grid scroll-mt-6 gap-4 lg:grid-cols-2">
      <SectionPanel className="relative px-6 py-7 sm:px-8 lg:px-12">
        <SectionHeading>Skills</SectionHeading>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-lg border border-[var(--color-border-light)] px-3 py-2 text-center font-mono text-xs font-semibold uppercase tracking-[0.06em] text-[var(--color-text)] transition-colors duration-200 hover:border-[#ddb307] hover:bg-[#ddb307] hover:text-[var(--color-text)]"
            >
              {skill}
            </div>
          ))}
        </div>
      </SectionPanel>
      <SectionPanel className="relative px-6 py-7 sm:px-8 lg:px-12">
        <SectionHeading>Focus Areas</SectionHeading>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {focusAreas.map((area) => (
            <div
              key={area}
              className="rounded-lg border border-[var(--color-border-light)] px-3 py-2 text-center font-mono text-xs font-semibold uppercase tracking-[0.06em] text-[var(--color-text)] transition-colors duration-200 hover:border-[#ddb307] hover:bg-[#ddb307] hover:text-[var(--color-text)]"
            >
              {area}
            </div>
          ))}
        </div>
      </SectionPanel>
    </div>
  );
}

import Image from "next/image";
import { projects } from "../_data/site-data";
import type { Project } from "../_lib/types";
import SectionHeading from "./section-heading";
import SectionPanel from "./section-panel";

export default function ProjectsSection() {
  const [featured, ...rest] = projects;

  return (
    <SectionPanel id="projects" className="px-6 py-7 sm:px-8 lg:px-12">
      <SectionHeading>Projects</SectionHeading>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <FeaturedProjectItem project={featured} />
        <div className="grid gap-5">
          {rest.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </div>
      </div>
    </SectionPanel>
  );
}

function FeaturedProjectItem({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border-light)]">
      {project.image ? (
        <div className="relative h-48 w-full overflow-hidden bg-[var(--color-site-bg)] sm:h-64">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain object-bottom scale-90"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="font-mono text-base font-semibold uppercase tracking-[0.1em] text-[var(--color-text)] sm:text-lg">
          {project.title}
        </h3>
        <p className="mt-3 font-sans text-sm leading-6 text-[var(--color-text-soft)]">
          {project.description}
        </p>
        {project.highlights ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-[var(--color-border-light)] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-[var(--color-blue)]"
              >
                {highlight}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function ProjectItem({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border-light)]">
      {project.image ? (
        <div className="relative h-32 w-full overflow-hidden bg-[var(--color-site-bg)]">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 35vw, 100vw"
            className={
              project.image === "/catboom.jpg"
                ? "object-cover object-[center_75%]"
                : "object-cover"
            }
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-text)]">
          {project.title}
        </h3>
        <p className="mt-3 font-sans text-sm leading-6 text-[var(--color-text-soft)]">
          {project.description}
        </p>
      </div>
    </article>
  );
}

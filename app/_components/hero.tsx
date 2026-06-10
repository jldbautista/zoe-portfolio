import Image from "next/image";
import { contactLinks } from "../_data/site-data";
import Icon from "./icon";
import IdentityItem from "./identity-item";
import SectionHeading from "./section-heading";
import SectionPanel from "./section-panel";

export default function Hero() {
  return (
    <SectionPanel
      id="hero"
      className="relative grid items-center gap-8 px-6 py-7 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-14 lg:py-9"
    >
      <div className="relative z-10 max-w-2xl">
        <h1 className="font-mono text-5xl font-semibold uppercase leading-[1.08] tracking-[0.22em] text-[var(--color-blue)] sm:text-6xl lg:text-[3.5rem]">
          Zoe Bremer
        </h1>
        <p className="mt-4 font-mono text-base font-semibold uppercase tracking-[0.18em] text-[var(--color-text)] sm:text-lg">
          Undergraduate Chemical Engineering Student @{" "}
          <a
            href="https://www.ucdavis.edu/"
            className="mr-[-0.18em] text-[#ddb307] underline decoration-[#ddb307] underline-offset-4 transition hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ddb307]"
            target="_blank"
            rel="noreferrer"
          >
            UC Davis
          </a>
        </p>
        <div className="mt-4 h-px w-12 bg-[var(--color-blue)]" aria-hidden />
        <div className="mt-5">
          <SectionHeading>Contacts</SectionHeading>
          <div className="mt-4 grid gap-3">
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex w-fit items-center gap-3 rounded-md font-mono text-sm text-[var(--color-text)] transition hover:text-[var(--color-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-blue)]"
            >
              <Icon name={link.icon} className="h-5 w-5 shrink-0 text-[var(--color-blue)]" />
              {link.label}
            </a>
          ))}
          </div>
        </div>
      </div>
      <div className="relative z-10 grid gap-6 border-t border-[var(--color-border-light)] pt-7 lg:grid-cols-[128px_1fr] lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
        <div className="relative h-28 w-28 overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-site-bg)] sm:h-32 sm:w-32">
          <Image
            src="/flask-kitty.png"
            alt="Flask kitty profile illustration"
            width={564}
            height={564}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <SectionHeading>About Me</SectionHeading>
          <p className="mt-4 font-sans text-sm leading-6 text-[var(--color-text-soft)]">
            I&apos;m an undergraduate student
            passionate about sustainable process design, clean energy, and
            practical solutions that bridge lab-scale research with
            real-world impact. I love exploring how complex systems work and
            discovering thoughtful ways to make them better. Outside of
            engineering, you can usually find me crocheting!
          </p>
          <div className="mt-5 grid gap-3">
            <IdentityItem icon="graduation" title="UC Davis">
              Chemical Engineering Student
            </IdentityItem>
            <IdentityItem icon="location" title="Davis, California" />
          </div>
        </div>
      </div>
    </SectionPanel>
  );
}

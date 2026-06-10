import Image from "next/image";
import { navItems } from "../_data/site-data";
import SectionNav from "./section-nav";

export default function Header() {
  return (
    <header className="relative z-20 rounded-[20px] border border-[var(--color-border)] bg-[rgba(250,249,245,0.92)] px-4 py-4 sm:px-5 lg:px-6">
      <div className="grid gap-4 lg:grid-cols-[minmax(240px,380px)_1fr] lg:items-center lg:gap-10">
        <a
          href="#home"
          className="justify-self-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-blue)] lg:justify-self-start"
          aria-label="Zoe Bremer portfolio home"
        >
          <Image
            src="/che_logo.png"
            alt="UC Davis Chemical Engineering"
            width={1452}
            height={306}
            priority
            className="h-auto w-[380px] max-w-full"
          />
        </a>

        <SectionNav items={navItems} />
      </div>
    </header>
  );
}

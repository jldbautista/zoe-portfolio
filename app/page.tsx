import BackToTop from "./_components/back-to-top";
import EducationSection from "./_components/education-section";
import ExperienceSection from "./_components/experience-section";
import Footer from "./_components/footer";
import Header from "./_components/header";
import Hero from "./_components/hero";
import ProjectsSection from "./_components/projects-section";
import SkillsSection from "./_components/skills-section";

export default function Home() {
  return (
    <main
      id="home"
      className="relative min-h-screen bg-[var(--color-site-bg)] bg-[url('/chem-bg.png')] bg-cover bg-center bg-fixed text-[var(--color-text)]"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1120px] flex-col gap-4 px-4 py-5 sm:px-6 lg:px-6">
        <Header />
        <Hero />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <Footer />
      </div>
      <BackToTop />
    </main>
  );
}

import { AboutSection } from "@/components/AboutSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Hero, NavItem } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SkillsSection } from "@/components/SkillsSection";

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <AnimatedBackground />
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl sm:-left-20" />
        <div className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl sm:right-0" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <main className="mx-auto flex min-h-screen max-w-[1200px] flex-col gap-14 px-5 pb-20 pt-10 sm:gap-16 sm:px-10 sm:pb-24 sm:pt-20">
        <Hero navItems={navItems} />

        <div className="grid gap-20">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </div>

        <SiteFooter />
      </main>
    </div>
  );
}

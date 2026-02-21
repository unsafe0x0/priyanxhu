import { HeroSection } from "@/components/hero-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ExtensionsSection } from "@/components/extensions-section";
import { ContactSection } from "@/components/contact-section";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground flex justify-center pb-16 pt-10 px-4 sm:px-8">
      <div className="w-full max-w-xl flex flex-col gap-16 sm:gap-20">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ExtensionsSection />
        <ContactSection />
      </div>
    </main>
  );
}

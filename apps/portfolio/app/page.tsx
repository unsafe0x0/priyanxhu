import Experience from "@/components/experience";
import Extensions from "@/components/extensions";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import React from "react";

const PortfolioPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-mono selection:bg-primary selection:text-primary-foreground p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-16 py-4">
        <div className="space-y-24">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Extensions />
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default PortfolioPage;

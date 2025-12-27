import Extensions from "@/components/extensions";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import React from "react";

const PortfolioPage = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center space-y-12 max-w-4xl mx-auto px-2 pb-6 pt-4">
        <Hero />
        <Skills />
        <Projects />
        <Extensions />
        <Footer />
      </main>
    </>
  );
};

export default PortfolioPage;

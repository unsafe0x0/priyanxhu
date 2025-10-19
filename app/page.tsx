import React from "react";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import CurrentlyWorking from "@/components/CurrentlyWorking";
import VsCodeExtensions from "@/components/VsCodeExtensions";
import ContactForm from "@/components/ContactForm";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-3 py-8">
        <Hero />
        <Skills />
        <Projects />
        <Blogs />
        <CurrentlyWorking />
        <VsCodeExtensions />
        <Experience />
        <ContactForm />
      </div>
    </div>
  );
};

export default Landing;

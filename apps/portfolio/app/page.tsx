import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import CurrentlyWorking from "@/components/CurrentlyWorking";
import VsCodeExtensions from "@/components/VsCodeExtensions";

const Landing = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto min-h-screen w-full px-2 space-y-10 pb-14 md:pb-20 pt-5">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <CurrentlyWorking />
        <VsCodeExtensions />
        <Blogs />
        <Contact />
      </main>
    </>
  );
};

export default Landing;

"use client";

import React from "react";
import { profileData } from "@/data/Data";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import CurrentlyWorking from "@/components/CurrentlyWorking";
import Skills from "@/components/Skills";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import FloatingNav from "@/components/FloatingNav";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Extensions from "@/components/Extensions";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const {
    name,
    title,
    about,
    imageUrl,
    skills,
    currentlyLearning,
    projects,
    currentlyWorking,
    experience,
    vsCodeExtensions,
    socialLinks,
    email,
  } = profileData;

  return (
    <main className="max-w-2xl mx-auto px-3 pt-10 space-y-10 min-h-screen">
      <Hero name={name} title={title} about={about} imageUrl={imageUrl} />
      <Skills skills={skills} />
      <CurrentlyLearning learningItems={currentlyLearning} />
      <Projects projects={projects} />
      <CurrentlyWorking currentlyWorking={currentlyWorking} />
      <Extensions extensions={vsCodeExtensions} />
      <Blogs />
      <Experience experience={experience} />
      <FloatingNav email={email} links={socialLinks} />
      <ContactMe />
      <Footer />
    </main>
  );
}

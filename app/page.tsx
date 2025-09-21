"use client";

import React from "react";
import { profileData } from "@/data/Data";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import CurrentlyWorking from "@/components/CurrentlyWorking";
import Skills from "@/components/Skills";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Socials from "@/components/Socials";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Extensions from "@/components/Extensions";
import Blogs from "@/components/Blogs";

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
    blogs,
    socialLinks,
    email,
  } = profileData;

  return (
    <main className="max-w-2xl mx-auto px-3 py-10 space-y-10">
      <Hero name={name} title={title} about={about} imageUrl={imageUrl} />
      <Skills skills={skills} />
      <CurrentlyLearning learningItems={currentlyLearning} />
      <Projects projects={projects} />
      <CurrentlyWorking currentlyWorking={currentlyWorking} />
      <Extensions extensions={vsCodeExtensions} />
      <Blogs blogs={blogs.slice(0, 3)} />
      <Experience experience={experience} />
      <Socials email={email} links={socialLinks} />
      <ContactMe />
    </main>
  );
}

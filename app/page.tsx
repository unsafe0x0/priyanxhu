"use client";

import React, { useEffect } from "react";
import { profileData } from "@/data/Data";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import CurrentlyWorking from "@/components/CurrentlyWorking";
import SkillsBadges from "@/components/Skills";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Socials from "@/components/Socials";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Extensions from "@/components/Extensions";

export default function LandingPage() {
  useEffect(() => {
    fetch("/api/view", { method: "POST" }).catch(() => {});
  }, []);

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
    <main className="max-w-2xl mx-auto px-3 py-10 space-y-12">
      <Hero name={name} title={title} about={about} imageUrl={imageUrl} />
      <SkillsBadges skills={skills} />
      <CurrentlyLearning learningItems={currentlyLearning} />
      <Projects projects={projects} />
      <CurrentlyWorking currentlyWorking={currentlyWorking} />
      <Extensions extensions={vsCodeExtensions} />
      <Experience experience={experience} />
      <Socials email={email} links={socialLinks} />
      <ContactMe />
    </main>
  );
}

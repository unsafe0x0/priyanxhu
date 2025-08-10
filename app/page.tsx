"use client";

import React, { useEffect } from "react";
import { profileData } from "@/data/Data";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsBadges from "@/components/Skills";
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
    projects,
    experience,
    vsCodeExtensions,
    socialLinks,
    email,
  } = profileData;

  return (
    <main className="max-w-2xl mx-auto px-5 py-14 sm:py-16 space-y-12 sm:space-y-14">
      <Hero name={name} title={title} about={about} imageUrl={imageUrl} />
      <SkillsBadges skills={skills} />
      <Projects projects={projects} />
      <Extensions extensions={vsCodeExtensions} />
      <Experience experience={experience} />
      <Socials email={email} links={socialLinks} />
      <ContactMe />
    </main>
  );
}

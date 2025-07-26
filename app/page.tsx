"use client";

import React, { useEffect } from "react";
import { profileData } from "@/data/Data";
import Info from "@/components/Info";
import Socials from "@/components/Socials";
import BasedIn from "@/components/BasedIn";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import GetInTouch from "@/components/GetInTouch";
import Project from "@/components/Project";
import { useMutation } from "@tanstack/react-query";

async function updateView() {
  const res = await fetch("/api/view", {
    method: "POST",
  });
  if (!res.ok) {
    throw new Error("Failed to update view");
  }
}

const LandingPage = () => {
  const mutation = useMutation({
    mutationFn: updateView,
  });

  const hasUpdatedView = React.useRef(false);

  useEffect(() => {
    if (!hasUpdatedView.current) {
      mutation.mutate();
      hasUpdatedView.current = true;
    }
  }, []);

  const { name, title, about, skills, projects, experience, socialLinks } =
    profileData;

  const getLink = (platform: string) =>
    socialLinks.find((link) => link.name === platform)?.url || "#";

  return (
    <React.Fragment>
      <main className="columns-1 md:columns-2 lg:columns-3 items-start space-y-5 space-x-5 justify-center max-w-6xl mx-auto px-4 py-12">
        <Info name={name} title={title} about={about} />
        <BasedIn />
        <Socials
          github={getLink("GitHub")}
          linkedin={getLink("LinkedIn")}
          twitter={getLink("Twitter")}
          leetcode={getLink("LeetCode")}
          codeforces={getLink("CodeForces")}
        />
        <Skills skills={skills} />
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
        <Experience experience={experience} />
        <GetInTouch />
      </main>
    </React.Fragment>
  );
};

export default LandingPage;

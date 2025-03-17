"use client";

import React, { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { GitGraph } from "@/components/GitGraph";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { GetInTouch } from "@/components/GetInTouch";

const Home: React.FC = () => {
  useEffect(() => {
    fetch("/api/views", { method: "POST" }).catch((error) =>
      console.error("Error updating views:", error)
    );
  }, []);

  return (
    <main className="space-y-12 py-8 flex flex-col justify-start items-center">
      <Hero />
      <GitGraph />
      <Skills />
      <Projects />
      <GetInTouch />
    </main>
  );
};

export default Home;

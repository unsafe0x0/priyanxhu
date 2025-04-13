"use client";

import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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

  useEffect(() => {
    mutation.mutate();
  }, [mutation]);

  return (
    <>
      <main className="py-8 flex flex-col justify-center items-center w-full gap-14">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;

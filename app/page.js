"use client";
import GetInTouch from "@/components/Home/GetInTouch";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";
import React, { useEffect } from "react";
import axios from "axios";
import GithubContribution from "@/components/Home/GithubContribution";
import Blogs from "@/components/Home/Blogs";

const LandingPage = () => {
  useEffect(() => {
    try {
      axios.post("/api/views");
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <main className="space-y-12 py-12 flex flex-col justify-start items-center">
        <Hero />
        <Skills />
        <GithubContribution />
        <Projects />
        <Blogs />
        <GetInTouch />
      </main>
    </>
  );
};

export default LandingPage;

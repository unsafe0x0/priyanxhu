"use client";

import React from "react";

export default function AboutMe() {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-full px-3 md:w-4xl gap-7">
        <h2 className="text-2xl font-medium underline underline-offset-8 decoration-2 decoration-green-500/80">
          About Me
        </h2>
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="text-md font-normal">
            {`Hey! I'm Priyanshu Chahar, a 4th year computer science student and
          developer who loves turning ideas into real, working things`}
          </p>
          <p className="text-md font-normal">
            {`I'm flexible working with any tech stack, though I prefer modern
          tools. I'm currently working with Next.js, Node, Express, and
          TypeScript`}
          </p>
        </div>
      </div>
    </section>
  );
}

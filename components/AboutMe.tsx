"use client";

import React from "react";

export default function AboutMe() {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-full px-3 md:w-3xl gap-7">
        <h2 className="text-2xl font-medium underline underline-offset-8 decoration-2 decoration-red-600">
          About Me
        </h2>
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="text-md font-normal">
            {`Hey, I'm Priyanshu Chahar, a 4th-year CSE student with a specialization in AI/ML. I enjoy bringing ideas to life by building real, usable projects.`}
          </p>
          <p className="text-md font-normal">
            {`I'm comfortable working with any tech stack, but I prefer using modern tools. Right now, I mostly work with NextJS, NodeJS, ExpressJS, and TypeScript or JavaScript.`}
          </p>
          <p className="text-md font-normal">
            {`Currently, I’m focused on improving my skills in AI/ML and solving DSA problems regularly.`}
          </p>
        </div>
      </div>
    </section>
  );
}

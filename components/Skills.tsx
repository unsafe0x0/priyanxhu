"use client";

import React from "react";
import { skills } from "@/data/Skills";

export default function Skills() {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-full px-3 md:w-3xl gap-7">
        <h2 className="text-2xl font-medium underline underline-offset-8 decoration-2 decoration-red-600">
          What i Know
        </h2>
        <div className="flex flex-wrap justify-start items-start gap-1.5 md:gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-1 border border-neutral-200 dark:border-neutral-700/50 rounded-md px-3 py-1.5 bg-neutral-50 dark:bg-neutral-900"
            >
              <span className="text-xl">{skill.icon}</span>
              <p className="text-md font-normal">{skill.skillName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

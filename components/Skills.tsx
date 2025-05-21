"use client";

import React from "react";
import { skills } from "@/data/Skills";

export default function Skills() {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-full px-3 md:w-4xl gap-7">
        <h2 className="text-2xl font-medium underline underline-offset-8 decoration-2 decoration-red-500/80">
          What i Know
        </h2>
        <div className="flex flex-wrap justify-start items-start gap-2">
          {skills.map((skill) => (
            <div
              key={skill.skillName}
              className="flex justify-center items-center gap-2 border border-white/10 rounded-lg px-3 py-2 bg-zinc-900"
            >
              <p className="text-md font-normal">{skill.skillName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

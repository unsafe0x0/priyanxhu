"use client";
import React from "react";

interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-3 p-4 bg-neutral-900 rounded-md border border-neutral-800 text-neutral-300 col-span-1 w-full break-inside-avoid">
      <h2 className="text-2xl font-semibold text-neutral-200 font-doto">
        What i Know
      </h2>
      <ul className="flex flex-wrap gap-2 justify-start items-start">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="text-neutral-800 bg-white px-2 py-1 text-xs rounded-md"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;

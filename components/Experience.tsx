"use client";
import React from "react";

interface ExperienceProps {
  experience: any[];
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-3 p-4 bg-neutral-900 rounded-md border border-neutral-800 text-neutral-300 col-span-1 w-full break-inside-avoid">
      <h2 className="text-2xl font-semibold text-neutral-200 font-doto">
        Experience
      </h2>
      <ul className="flex flex-col gap-3 w-full">
        {experience.map((exp, index) => (
          <li key={index} className="p-3 bg-neutral-800/60 rounded-md w-full flex flex-col gap-1">
            <p className="text-base">{exp.duration}</p>
            <p className="text-sm">{exp.company}</p>
            <p className="text-xs text-neutral-400">{exp.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;

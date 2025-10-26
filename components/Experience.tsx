import React from "react";
import { profileData } from "@/data/Data";

const Experience = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Experience</h2>
      <div className="space-y-3">
        {profileData.experience.map((exp, index) => (
          <div
            key={index}
            className="border border-neutral-800 rounded-md p-4 flex flex-col h-full bg-neutral-900 ring-2 ring-transparent hover:ring-neutral-800 transition-all duration-200"
          >
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-lg font-medium">{exp.position}</h3>
              <span className="text-neutral-400 text-sm px-2 py-1 rounded-md bg-neutral-800">
                {exp.duration}
              </span>
            </div>
            <p className="text-neutral-200 mb-1 text-sm">{exp.company}</p>
            <p className="text-neutral-300 text-base">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

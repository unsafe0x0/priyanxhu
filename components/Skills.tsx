import React from "react";
import { profileData } from "@/data/Data";

const Skills = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-medium mb-3">What I Know</h2>
      <div className="flex flex-wrap gap-2">
        {profileData.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1 text-neutral-300 bg-neutral-900 border border-neutral-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;

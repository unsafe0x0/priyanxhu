import React from "react";
import { profileData } from "@/data/Data";

const Skills = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">What I Know</h2>
      <div className="flex flex-wrap gap-2">
        {profileData.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-md text-sm font-normal flex items-center gap-1 text-neutral-300 bg-accent border border-border"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;

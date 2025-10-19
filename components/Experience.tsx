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
            className="border border-foreground/10 rounded-md p-4"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <h3 className="text-lg font-medium">{exp.position}</h3>
              <span className="text-foreground/60 text-sm">{exp.duration}</span>
            </div>
            <p className="text-foreground/80 mb-1 text-sm">{exp.company}</p>
            <p className="text-foreground/70 text-base">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

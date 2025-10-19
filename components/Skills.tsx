import React from "react";
import { profileData } from "@/data/Data";
import Badge from "./Badge";

const Skills = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">What I Know</h2>
      <div className="flex flex-wrap gap-2">
        {profileData.skills.map((skill) => (
          <Badge key={skill} item={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

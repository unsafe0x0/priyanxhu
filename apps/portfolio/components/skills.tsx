import { profileData } from "@/data/profile";
import React from "react";
import Badge from "./badge";

const Skills = () => {
  return (
    <section className="flex flex-col items-start justify-start gap-5 w-full">
      <h2 className="text-2xl font-semibold">skills & tools</h2>
      <div className="flex flex-wrap gap-2">
        {profileData.skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </section>
  );
};

export default Skills;

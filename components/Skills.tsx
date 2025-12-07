"use client";
import React from "react";
import { profileData } from "@/data/Data";
import { Badge } from "./ui/badge";

const Skills = () => {
  return (
    <section className="">
      <h2 className="text-2xl font-semibold mb-5">Skills & Tools</h2>
      <div className="flex flex-wrap gap-2.5">
        {profileData.skills.map((skill) => (
          <div key={skill}>
            <Badge className="px-3 py-1 rounded border border-border text-foreground bg-card">
              {skill}
            </Badge>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

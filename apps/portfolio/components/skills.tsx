import { profileData } from "@/data/profile";
import React from "react";

const Skills = () => {
  return (
    <section className="space-y-6 w-full">
      <h2 className="text-xl font-bold uppercase tracking-tight text-foreground">
        Skills
      </h2>

      <div className="flex flex-wrap gap-2">
        {profileData.skills.map((skill) => (
          <div
            key={skill}
            className="border border-border bg-card px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors cursor-crosshair font-mono font-medium"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

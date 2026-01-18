import { profileData } from "@/data/profile";
import React from "react";

const Experience = () => {
  return (
    <section className="space-y-6 w-full">
      <h2 className="text-xl font-bold uppercase tracking-tight text-foreground">
        Experience
      </h2>

      <div className="relative space-y-10 py-2">
        {profileData.experience.map((exp, index) => (
          <div key={exp.company} className="relative pl-0 group">
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-lg font-bold uppercase tracking-tight text-foreground">
                  {exp.company}
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono bg-card px-2 py-0.5">
                  [{exp.startDate} :: {exp.endDate}]
                </span>
              </div>

              <div className="text-xs uppercase tracking-wider text-primary font-medium">
                {exp.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

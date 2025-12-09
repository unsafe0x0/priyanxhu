"use client";
import React from "react";
import { profileData } from "@/data/Data";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const Experience = () => {
  return (
    <section className="">
      <h2 className="text-2xl font-semibold mb-5">Experience</h2>
      <div className="space-y-4">
        {profileData.experience.map((exp, index) => (
          <div key={index}>
            <Card className="border border-border rounded flex flex-col h-full shadow-none">
              <CardContent className="px-5 py-0 flex flex-col h-full">
                <div className="flex justify-between items-start gap-3 mb-2">
                  <h3 className="text-lg font-bold tracking-tight">
                    {exp.position}
                  </h3>
                  <Badge className="px-3 py-1 rounded text-xs font-medium whitespace-nowrap">
                    {exp.duration}
                  </Badge>
                </div>
                <p className="text-card-foreground/80 mb-2 text-base md:text-lg font-medium">
                  {exp.company}
                </p>
                <p className="text-card-foreground/65 text-base md:text-lg">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

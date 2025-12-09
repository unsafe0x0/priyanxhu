"use client";
import React, { useState } from "react";
import { profileData } from "@/data/Data";
import { FaAnglesDown } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const getLinkIcon = (linkName: string) => {
    if (linkName.toLowerCase() === "github") return FaGithub;
    if (
      linkName.toLowerCase() === "website" ||
      linkName.toLowerCase() === "live"
    )
      return MdLanguage;
    return MdLanguage;
  };

  return (
    <section className="">
      <h2 className="text-2xl font-semibold mb-5">Selected Works</h2>
      <div className="grid grid-cols-1 gap-4">
        {profileData.projects
          .slice(0, showAll ? undefined : 3)
          .map((project) => (
            <div key={project.name}>
              <Card className="border border-border rounded flex flex-col h-full shadow-none">
                <CardContent className="px-5 py-0 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.name}
                      </h3>
                    </div>
                    <TooltipProvider>
                      <div className="flex gap-2 ml-3">
                        {project.links.map((link) => {
                          const Icon = getLinkIcon(link.name);
                          return (
                            <Tooltip key={link.name}>
                              <TooltipTrigger asChild>
                                <Link
                                  href={link.url}
                                  target={
                                    link.url.startsWith("/")
                                      ? "_self"
                                      : "_blank"
                                  }
                                  rel={
                                    link.url.startsWith("/")
                                      ? ""
                                      : "noopener noreferrer"
                                  }
                                >
                                  {Icon && (
                                    <Icon
                                      size={34}
                                      className="p-1.5 rounded bg-card border border-border hover:border-border/70 transition-colors"
                                    />
                                  )}
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent>{link.name}</TooltipContent>
                            </Tooltip>
                          );
                        })}
                      </div>
                    </TooltipProvider>
                  </div>
                  <div className="flex-1">
                    <p className="text-card-foreground/75 mb-4 text-base md:text-lg">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          className="px-3 py-1 rounded border border-border text-foreground bg-secondary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
      </div>
      {profileData.projects.length > 3 && !showAll && (
        <div className="flex justify-center mt-5">
          <Button
            variant="outline"
            onClick={() => setShowAll(true)}
            className="shadow-none"
          >
            Show All
            <FaAnglesDown size={16} />
          </Button>
        </div>
      )}
      {showAll && profileData.projects.length > 3 && (
        <div className="flex justify-center mt-5">
          <Button
            variant="outline"
            onClick={() => setShowAll(false)}
            className="shadow-none"
          >
            Show Less
            <FaAnglesDown size={16} className="rotate-180" />
          </Button>
        </div>
      )}
    </section>
  );
};

export default Projects;

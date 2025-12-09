"use client";
import React from "react";
import { profileData } from "@/data/Data";
import { MdArrowOutward } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const VsCodeExtensions = () => {
  return (
    <section className="">
      <h2 className="text-2xl font-semibold mb-5">VS Code Extensions</h2>
      <div className="grid grid-cols-1 gap-4">
        {profileData.vsCodeExtensions.map((ext) => (
          <div key={ext.name}>
            <Card className="border border-border rounded flex flex-col h-full shadow-none">
              <CardContent className="px-5 py-0 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{ext.name}</h3>
                  </div>
                  <TooltipProvider>
                    <div className="flex gap-2 ml-3">
                      {ext.links.map((link) => {
                        let Icon = VscVscode;
                        if (link.name.toLowerCase() === "github") {
                          Icon = FaGithub;
                        }
                        return (
                          <Tooltip key={link.name}>
                            <TooltipTrigger asChild>
                              <Link
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Icon
                                  size={34}
                                  className="p-1.5 rounded bg-card border border-border hover:border-border/70 transition-colors"
                                />
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
                  <p className="text-card-foreground/75 text-base md:text-lg">
                    {ext.description}
                  </p>
                </div>
                <div className="mt-0" />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VsCodeExtensions;

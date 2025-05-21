"use client";

import React from "react";
import { projects } from "@/data/Projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-full px-3 md:w-4xl gap-7">
        <h2 className="text-2xl font-medium underline underline-offset-8 decoration-2 decoration-red-500/80">
          Things i worked on
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-stretch gap-5 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start gap-2 border border-white/10 rounded-lg p-5 bg-zinc-900"
            >
              <h2 className="text-2xl font-medium">{project.name}</h2>
              <p className="text-md font-normal">{project.desc}</p>
              <div className="flex flex-wrap justify-start items-start gap-1.5 mt-auto">
                {project.tech.map((tech, index) => (
                  <div
                    key={index}
                    className="text-xs p-1.5 bg-zinc-800 rounded-md"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-start items-start gap-2 w-full mt-2">
                <Link
                  href={project.link}
                  target="_blank"
                  className="bg-white/80 text-zinc-800 px-3 py-1 rounded-md text-md font-medium"
                >
                  Website
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  className="bg-white/80 text-zinc-800 px-3 py-1 rounded-md text-md font-medium"
                >
                  Github
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

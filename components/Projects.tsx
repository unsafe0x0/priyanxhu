"use client";

import React from "react";
import { projects } from "@/data/Projects";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

import FadeInOnScroll from "./FadeInScroll";

export default function Projects() {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-full px-3 md:w-4xl gap-7">
        <FadeInOnScroll>
          <h2 className="text-2xl font-medium underline underline-offset-8 decoration-2 decoration-green-500/80">
            Things i worked on
          </h2>
        </FadeInOnScroll>
        <div className="columns-1 md:columns-2 gap-5 w-full space-y-5">
          {projects.map((project, index) => (
            <FadeInOnScroll key={index} delay={index * 0.1}>
              <div className="flex flex-col justify-start items-start gap-2 border border-white/10 rounded-lg p-5 bg-neutral-900 break-inside-avoid">
                <h2 className="text-2xl font-medium">{project.name}</h2>
                <p className="text-md font-normal">{project.desc}</p>
                <div className="flex flex-wrap justify-start items-start gap-1.5 mt-auto">
                  {project.tech.map((tech, index) => (
                    <div
                      key={index}
                      className="text-xs p-1 bg-neutral-800 rounded-md"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap justify-start items-start gap-2 w-full mt-2">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="bg-white/80 text-neutral-800 px-2 py-1 rounded-md text-sm font-normal flex items-center"
                  >
                    Website
                    <TbExternalLink className="inline ml-1" />
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="bg-white/80 text-neutral-800 px-2 py-1 rounded-md text-sm font-normal flex items-center"
                  >
                    Github
                    <FaGithub className="inline ml-1" />
                  </Link>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

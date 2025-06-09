"use client";

import React from "react";
import { projects } from "@/data/Projects";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import TechIcon from "./TechIcon";

import FadeInOnScroll from "./FadeInScroll";

export default function Projects() {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-full px-3 md:w-4xl gap-7">
        <FadeInOnScroll>
          <h2 className="text-2xl font-medium underline underline-offset-8 decoration-2 decoration-red-500">
            Things i worked on
          </h2>
        </FadeInOnScroll>
        <div className="columns-1 md:columns-2 gap-5 w-full space-y-5">
          {projects.map((project, index) => (
            <FadeInOnScroll key={index}>
              <div className="flex flex-col justify-start items-start gap-2 border border-neutral-200 dark:border-neutral-700/50 rounded-md p-5 bg-neutral-50 dark:bg-neutral-900 break-inside-avoid">
                <h2 className="text-2xl font-medium">{project.name}</h2>
                <p className="text-md font-normal">{project.desc}</p>
                <div className="flex flex-wrap justify-start items-start gap-1.5 mt-auto">
                  {project.tech.map((tech, index) => (
                    <TechIcon key={index} name={tech.name} icon={tech.icon} />
                  ))}
                </div>
                <div className="flex flex-wrap justify-start items-start gap-2 w-full mt-2">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="bg-neutral-800 dark:bg-white/80 text-white/80 dark:text-neutral-800 px-2 py-1.5 rounded-md text-sm font-normal flex items-center"
                  >
                    Website
                    <TbExternalLink className="inline ml-1" />
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="bg-neutral-800 dark:bg-white/80 text-white/80 dark:text-neutral-800 px-2 py-1.5 rounded-md text-sm font-normal flex items-center"
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

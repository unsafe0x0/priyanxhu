"use client";

import React from "react";
import { projects } from "@/data/Projects";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GiWireframeGlobe } from "react-icons/gi";

interface Project {
  name: string;
  desc: string;
  link: string;
  github: string;
  tech: React.ReactNode[];
}

export const Projects: React.FC = () => {
  return (
    <section className="flex justify-center items-center w-full" id="projects">
      <div className="flex flex-col justify-start items-start w-[95vw] md:w-[80vw] lg:w-[60vw] xl:w-[50vw] gap-4">
        <h2 className="text-3xl font-medium text-zinc-100">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch justify-start w-full">
          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start gap-2 p-3 md:p-4 rounded-md bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition-colors duration-300 ease-in-out overflow-hidden"
            >
              <div className="flex justify-between items-center w-full">
                <h2 className="text-xl font-medium text-zinc-100 select-none">
                  {project.name}
                </h2>
                <div className="flex justify-start items-center gap-2">
                  <Link
                    href={project.link}
                    className="text-xl text-zinc-100 p-1.5 bg-zinc-950 rounded-md"
                  >
                    <GiWireframeGlobe />
                  </Link>
                  <Link
                    href={project.github}
                    className="text-xl text-zinc-100 p-1.5 bg-zinc-950 rounded-md"
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
              <p className="text-md font-normal text-zinc-300">
                {project.desc}
              </p>
              <ul className="flex flex-wrap justify-start items-center gap-2 w-full">
                {project.tech.map(
                  (tech: React.ReactNode, techIndex: number) => (
                    <li
                      key={techIndex}
                      className="text-md font-normal text-zinc-100 p-1 rounded-md bg-zinc-950"
                    >
                      {tech}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

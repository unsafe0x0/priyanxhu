import React from "react";
import projexts from "@/data/Projects";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";

const Projects = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 gap-4">
        <h2 className="text-2xl font-normal text-zinc-300 underline underline-offset-8 decoration-wavy decoration-cyan-500">
          Things i worked on
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch justify-start w-full">
          {projexts.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start gap-2 p-3 md:p-4 rounded-md bg-zinc-900 border md:border-2 border-zinc-800 overflow-hidden"
            >
              <div className="flex justify-between items-center w-full">
                <Link
                  href={project.link}
                  className="text-xl font-normal text-zinc-300 border-b md:border-b-2 border-transparent hover:border-zinc-800 flex items-center gap-1 transition-all duration-300 ease-in-out"
                >
                  <RiExternalLinkFill />
                  {project.name}
                </Link>
                <Link
                  href={project.github}
                  className="text-xl font-normal text-zinc-300 p-2 bg-zinc-950 rounded-md"
                >
                  <FaGithub />
                </Link>
              </div>
              <p className="text-sm md:text-md font-normal text-zinc-400">
                {project.desc}
              </p>
              <ul className="flex flex-wrap justify-start items-center gap-2 w-full">
                {project.tech.map((tech, index) => (
                  <li
                    key={index}
                    className="text-lg font-normal text-zinc-300 p-1 rounded-md bg-zinc-950"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

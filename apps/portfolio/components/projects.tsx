import { profileData } from "@/data/profile";
import React from "react";
import Badge from "./badge";

const Projects = () => {
  return (
    <section className="flex flex-col items-start justify-start gap-5 w-full">
      <h2 className="text-2xl font-semibold">things i've built</h2>
      <ul className="flex flex-col items-start justify-start w-full">
        {profileData.projects.map((project, index) => (
          <li
            key={project.name}
            className={`flex flex-col items-start justify-start gap-2 w-full border-x border-border p-3 ${
              index === 0 ? "border-t border-b" : "border-b"
            }`}
          >
            <p className="text-base font-normal lowercase">{project.name}</p>
            <p className="text-base font-normal text-muted-foreground lowercase">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <div className="flex gap-2">
              {project.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-normal underline hover:text-chart-2 lowercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;

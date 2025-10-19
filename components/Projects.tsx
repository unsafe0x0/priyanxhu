import React from "react";
import { profileData } from "@/data/Data";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import Badge from "./Badge";

const Projects = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Featured Projects</h2>
      <div className="grid grid-cols-1 gap-5">
        {profileData.projects.map((project) => (
          <div
            key={project.name}
            className="border border-foreground/10 rounded-md p-4 flex flex-col h-full"
          >
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-1">{project.name}</h3>
              <p className="text-foreground/70 mb-3 text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} item={tech} />
                ))}
              </div>
            </div>
            <div className="mt-auto">
              <div className="flex gap-4">
                {project.links.map((link) =>
                  link.url.startsWith("/") ? (
                    <Link
                      key={link.name}
                      href={link.url}
                      className="flex items-center gap-1 text-foreground/60 hover:text-foreground transition-colors"
                    >
                      <span>{link.name}</span>
                      <FiExternalLink size={14} />
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-foreground/60 hover:text-foreground transition-colors"
                    >
                      <span>{link.name}</span>
                      <FiExternalLink size={14} />
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

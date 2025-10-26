import React from "react";
import { profileData } from "@/data/Data";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const CurrentlyWorking = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Currently Working On</h2>
      <div className="grid grid-cols-1 gap-5">
        {profileData.currentlyWorking.map((project) => (
          <div
            key={project.name}
            className="border border-neutral-800 rounded-md p-4 flex flex-col h-full bg-neutral-900 ring-2 ring-transparent hover:ring-neutral-800 transition-all duration-200"
          >
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-1">{project.name}</h3>
              <p className="text-neutral-300 mb-3 text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1 text-neutral-300 bg-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <div className="flex gap-4">
                {project.links.map((link) =>
                  link.url.startsWith("/") ? (
                    <Link
                      key={link.name}
                      href={link.url}
                      className="flex items-center gap-1 text-neutral-400 hover:text-neutral-100 transition-colors"
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
                      className="flex items-center gap-1 text-neutral-400 hover:text-neutral-100 transition-colors"
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

export default CurrentlyWorking;

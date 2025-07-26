"use client";
import Link from "next/link";
import React from "react";

interface ProjectProps {
  project: {
    name: string;
    description?: string;
    stack: string[];
    links: { name: string; url: string }[];
  };
}

const Project = ({ project }: ProjectProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-3 p-4 bg-neutral-900 rounded-md border border-neutral-800 text-neutral-300 col-span-1 w-full break-inside-avoid">
      <h2 className="text-2xl font-semibold text-neutral-200 font-doto">
        {project.name}
      </h2>
      <p className="text-sm text-neutral-400">
        {project.description || "No description available."}
      </p>
      <div className="flex flex-wrap gap-1 mt-2">
        {project.stack.map((item, index) => (
          <span
            key={index}
            className="text-neutral-100 bg-neutral-800/60 px-2 py-1 text-xs rounded-md"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-800 bg-white px-3 py-1.5 text-xs rounded-md hover:bg-neutral-200 transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;

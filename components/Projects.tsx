"use client";

import Link from "next/link";

interface ProjectLink {
  name: string;
  url: string;
}

interface ProjectItem {
  name: string;
  description?: string;
  stack: string[];
  links: ProjectLink[];
}

interface ProjectsProps {
  projects: ProjectItem[];
}

const projectPrimaryLink = (links: ProjectLink[]) =>
  links.find((l) => l.name.toLowerCase() === "website")?.url ||
  links[0]?.url ||
  "#";

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="space-y-6">
      <h2 className="font-doto text-2xl tracking-wide">Things i Built</h2>
      <div className="space-y-5">
        {projects.map((project, idx) => (
          <div key={idx} className="space-y-2">
            <Link
              href={projectPrimaryLink(project.links)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg underline underline-offset-4"
            >
              {project.name}
            </Link>
            {project.description && (
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.description}
              </p>
            )}

            <div className="flex flex-wrap gap-2">
              {project.stack.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-md border border-neutral-700/50 bg-neutral-800/60 px-2 py-1 text-xs uppercase tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>

            {(() => {
              const live = project.links.find(
                (l) =>
                  l.name.toLowerCase() === "website" ||
                  l.name.toLowerCase() === "live",
              );
              const github = project.links.find(
                (l) => l.name.toLowerCase() === "github",
              );
              return (
                <div className="flex gap-3 text-sm text-neutral-300">
                  {live && (
                    <Link
                      href={live.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                    >
                      Live
                    </Link>
                  )}
                  {github && (
                    <Link
                      href={github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              );
            })()}
          </div>
        ))}
      </div>
    </section>
  );
}

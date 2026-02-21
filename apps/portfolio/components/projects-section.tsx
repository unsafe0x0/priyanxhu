import { profileData } from "@/data/profile";

export function ProjectsSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-base font-semibold text-muted-foreground">
        Projects
      </h2>
      <div className="flex flex-col gap-8">
        {profileData.projects.map((proj, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-medium">{proj.name}</span>
              {proj.links.length > 0 && (
                <div className="flex gap-2">
                  {proj.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-foreground hover:underline"
                    >
                      [{link.name}]
                    </a>
                  ))}
                </div>
              )}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {proj.description}
            </p>
            {proj.stack && proj.stack.length > 0 && (
              <ul className="flex flex-wrap gap-1.5 mt-1">
                {proj.stack.map((tech, k) => (
                  <li
                    key={k}
                    className="inline-flex items-center rounded-md border border-border px-2 py-0.5 text-xs font-normal text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 tracking-wider"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

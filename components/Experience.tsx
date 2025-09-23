"use client";

import Badge from "./Badge";

interface ExperienceItem {
  duration: string;
  position?: string;
  company: string;
  description?: string;
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl tracking-wide font-medium">Experience</h2>
      <div className="space-y-6">
        {experience.map((exp, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="text-md font-medium">
                {exp.position
                  ? `${exp.position} · ${exp.company}`
                  : exp.company}
              </div>
              <Badge item={exp.duration} />
            </div>
            {exp.description && (
              <p className="text-sm text-neutral-300  leading-relaxed">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

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
              <span className="inline-flex items-center border border-neutral-700/50 bg-[#212121] px-2 py-1 text-xs uppercase tracking-wide">
                {exp.duration}
              </span>
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

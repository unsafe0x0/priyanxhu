"use client";

interface SkillsBadgesProps {
  skills: string[];
}

export default function SkillsBadges({ skills }: SkillsBadgesProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl tracking-wide font-medium">What i Know</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="inline-flex items-center border border-neutral-700/50 bg-[#ffffff] text-neutral-800 px-2 py-1 text-xs tracking-wide rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

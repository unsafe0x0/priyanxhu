"use client";
import Badge from "./Badge";

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl tracking-wide font-semibold">What i Know</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <Badge key={i} item={skill} />
        ))}
      </div>
    </section>
  );
}

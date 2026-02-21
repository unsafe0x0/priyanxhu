import { profileData } from "@/data/profile";

export function SkillsSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Skills
      </h2>
      <ul className="flex flex-wrap gap-2">
        {profileData.skills.map((skill, i) => (
          <li
            key={i}
            className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-sm font-normal text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

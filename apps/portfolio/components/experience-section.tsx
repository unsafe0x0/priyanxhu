import { profileData } from "@/data/profile";

export function ExperienceSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-base font-semibold text-muted-foreground">
        Experience
      </h2>
      <div className="flex flex-col gap-6">
        {profileData.experience.map((exp, i) => (
          <div key={i} className="flex justify-between items-baseline gap-4">
            <div className="flex flex-col">
              <span className="font-medium text-foreground">{exp.company}</span>
              <span className="text-sm text-muted-foreground max-w-50 sm:max-w-none truncate sm:whitespace-normal">
                {exp.role}
              </span>
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap font-mono mt-1 sm:mt-0">
              {exp.startDate} — {exp.endDate}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

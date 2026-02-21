import { profileData } from "@/data/profile";

export function ContactSection() {
  return (
    <section className="flex flex-col gap-10 pb-16">
      <div className="flex flex-col gap-2">
        <h2 className="text-base font-semibold text-muted-foreground mb-2">
          Contact
        </h2>
        <a
          href={`mailto:${profileData.email}`}
          className="text-sm text-foreground hover:text-muted-foreground transition-colors underline underline-offset-4 w-fit"
        >
          {profileData.email}
        </a>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-base font-semibold text-muted-foreground">Links</h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {profileData.socialLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground underline decoration-transparent hover:decoration-border transition-colors underline-offset-4"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { profileData } from "@/data/profile";

export function ContactSection() {
  return (
    <section className="flex flex-col gap-6 border-t border-border pt-8 mt-4">
      <div className="flex flex-col sm:flex-row justify-between gap-6">
        <div className="flex flex-col gap-4 max-w-xs">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Contact
          </h2>
          <a
            href={`mailto:${profileData.email}`}
            className="text-sm text-foreground hover:text-muted-foreground transition-colors font-mono"
          >
            {profileData.email}
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Links
          </h2>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
            {profileData.socialLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground underline decoration-border underline-offset-4"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

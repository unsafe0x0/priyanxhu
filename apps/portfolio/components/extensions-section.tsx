import { profileData } from "@/data/profile";

export function ExtensionsSection() {
  if (
    !profileData.vsCodeExtensions ||
    profileData.vsCodeExtensions.length === 0
  )
    return null;

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-base font-semibold text-muted-foreground">
        VS Code Extensions
      </h2>
      <div className="flex flex-col gap-6">
        {profileData.vsCodeExtensions.map((ext, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">{ext.name}</span>
              {ext.links.length > 0 && (
                <div className="flex gap-2">
                  {ext.links.map((link, j) => (
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
              {ext.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

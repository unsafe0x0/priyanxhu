import { profileData } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-4 mb-2">
        <img
          src={profileData.imageUrl}
          alt={profileData.name}
          width={48}
          height={48}
          className="rounded-md border border-border grayscale object-cover"
        />
        <div className="flex flex-col">
          <h1 className="text-xl font-medium tracking-tight">
            {profileData.name}
          </h1>
          <span className="text-sm text-muted-foreground">
            {profileData.whoami}
          </span>
        </div>
      </div>
      <p className="text-muted-foreground leading-relaxed max-w-xl">
        {profileData.about}
      </p>
    </section>
  );
}

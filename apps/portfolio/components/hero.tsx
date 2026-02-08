import { ThemeToggle } from "@/components/theme-toggle";
import { profileData } from "@/data/profile";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col gap-8">
      <div className="absolute top-0 right-0 z-10">
        <ThemeToggle />
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="relative group w-full max-w-30 shrink-0">
          <div className="aspect-square w-full bg-muted overflow-hidden border border-border grayscale hover:grayscale-0 transition-all duration-500 bg-cover bg-center">
            <Image
              src={profileData.imageUrl}
              alt={profileData.name}
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
              draggable={false}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <h1 className="text-3xl font-bold uppercase tracking-tight text-foreground">
            {profileData.name}
          </h1>
          <h2 className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
            {profileData.whoami}
          </h2>
          <ul className="flex flex-wrap gap-2 items-center mt-1">
            {profileData.stackImages.map((image) => (
              <li key={image.name}>
                {image.invertOnDark ? (
                  <div
                    role="img"
                    aria-label={image.name}
                    className="h-5 w-5 bg-foreground"
                    style={{
                      maskImage: `url(${image.image})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskImage: `url(${image.image})`,
                      WebkitMaskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                    }}
                  />
                ) : (
                  <Image
                    src={image.image}
                    alt={image.name}
                    width={20}
                    height={20}
                    unoptimized
                    draggable={false}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
          <p>{profileData.about}</p>
        </div>

        <div className="space-y-3">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            Socials
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <li>
              <a
                href={`mailto:${profileData.email}`}
                className="hover:text-primary transition-colors uppercase tracking-tight flex items-center gap-2 group"
              >
                Email
              </a>
            </li>
            {profileData.socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors uppercase tracking-tight flex items-center gap-2 group hover:underline"
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
};

export default Hero;

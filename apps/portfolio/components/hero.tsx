import { profileData } from "@/data/profile";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

const Hero = () => {
  const stackImages = [
    { id: 1, image: "/typescript.svg" },
    { id: 2, image: "/nextjs.svg", invertOnDark: true },
    { id: 3, image: "/react.svg" },
    { id: 4, image: "/nodejs.svg" },
    { id: 5, image: "/expressjs.svg", invertOnDark: true },
    { id: 6, image: "/postgresql.svg" },
    { id: 7, image: "/mongodb.svg" },
  ];

  return (
    <section className="flex flex-col justify-start items-start w-full">
      <div className="flex justify-end w-full">
        <ThemeToggle />
      </div>
      <div className="flex flex-col md:flex-row items-start justify-start gap-5">
        <Image
          src={profileData.imageUrl}
          alt={profileData.name}
          width={120}
          height={120}
          unoptimized
          draggable={false}
        />
        <div className="flex flex-col items-start justify-start gap-1">
          <h1 className="text-2xl font-bold">{profileData.name}</h1>
          <p className="text-xl font-medium">{profileData.whoami}</p>
          <ul className="flex flex-wrap gap-2 items-center">
            {stackImages.map((image) => (
              <li key={image.id}>
                {image.invertOnDark ? (
                  <div
                    role="img"
                    aria-label={image.image}
                    className="h-5 w-5 bg-current"
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
                    alt={image.image}
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
      <p className="text-base font-normal text-muted-foreground mt-2 lowercase">
        {profileData.about}
      </p>
      <ul className="flex flex-wrap gap-2 mt-2">
        {profileData.socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-chart-2 lowercase"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-base font-normal text-muted-foreground mt-2">
        wants to work with me or have a career opportunity mail me at{" "}
        <a
          href={`mailto:${profileData.email}`}
          className="text-primary underline hover:text-chart-2"
        >
          {profileData.email}
        </a>
      </p>
    </section>
  );
};

export default Hero;

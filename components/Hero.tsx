import React from "react";
import { profileData } from "@/data/Data";
import { FaGithub, FaLinkedin, FaYoutube, FaDiscord } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Hero = () => {
  const socialIcons = {
    GitHub: FaGithub,
    Twitter: FaSquareXTwitter,
    LinkedIn: FaLinkedin,
    Youtube: FaYoutube,
    Discord: FaDiscord,
    CodeChef: SiCodechef,
    LeetCode: SiLeetcode,
    CodeForces: SiCodeforces,
  };

  const links = [...profileData.socialLinks];

  return (
    <section className="">
      <div className="flex flex-col md:flex-row items-start gap-5">
        <Image
          src={profileData.imageUrl}
          alt={profileData.name}
          className="w-28 h-28 object-cover rounded"
          width={112}
          height={112}
          unoptimized
        />

        <div className="flex-1 md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-card-foreground">
            {profileData.name}
          </h1>
          <p className="text-xl font-medium text-card-foreground/70 mt-2">
            {profileData.whoami}
          </p>

          <TooltipProvider>
            <div className="flex flex-wrap gap-2 mt-2">
              {links.map((link) => {
                const Icon = socialIcons[link.name as keyof typeof socialIcons];
                return (
                  <Tooltip key={link.name}>
                    <TooltipTrigger asChild>
                      <Link
                        href={link.url}
                        target="_blank"
                        className="group relative"
                      >
                        {Icon && (
                          <Icon
                            size={34}
                            className="p-1 rounded bg-card border border-border"
                          />
                        )}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>{link.name}</TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </TooltipProvider>
        </div>
      </div>

      <p className="text-card-foreground/70 mt-5 text-base md:text-lg">
        {profileData.about}
      </p>
    </section>
  );
};

export default Hero;

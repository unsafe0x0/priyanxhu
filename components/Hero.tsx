import React from "react";
import { profileData } from "@/data/Data";
import { FaGithub, FaLinkedin, FaYoutube, FaDiscord } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const socialIcons = {
    Email: MdEmail,
    GitHub: FaGithub,
    Twitter: FaSquareXTwitter,
    LinkedIn: FaLinkedin,
    Youtube: FaYoutube,
    Discord: FaDiscord,
    LeetCode: SiLeetcode,
    CodeForces: SiCodeforces,
  };

  const links = [
    { name: "Email", url: `mailto:${profileData.email}` },
    ...profileData.socialLinks,
  ];

  return (
    <section className="mb-8">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <Image
          src={profileData.imageUrl}
          alt={profileData.name}
          className="w-28 h-28 object-cover rounded-md"
          width={112}
          height={112}
          unoptimized
        />

        <div className="flex-1 md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold">
            {profileData.name}
          </h1>
          <p className="text-base font-medium text-neutral-200 mt-1">
            {profileData.whoami}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {links.map((link) => {
              const Icon = socialIcons[link.name as keyof typeof socialIcons];
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  className="group relative text-neutral-400 hover:text-neutral-100 transition-colors"
                >
                  {Icon && (
                    <Icon
                      size={32}
                      className="p-1 rounded-md bg-neutral-900 border border-neutral-800"
                    />
                  )}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-100 text-neutral-800 text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <p className="text-neutral-300 mt-5 text-base">{profileData.about}</p>
    </section>
  );
};

export default Hero;

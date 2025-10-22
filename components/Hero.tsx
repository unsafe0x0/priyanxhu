import React from "react";
import { profileData } from "@/data/Data";
import { FaGithub, FaLinkedin, FaYoutube, FaDiscord } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiPeerlist } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

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
    Peerlist: SiPeerlist,
  };

  const links = [
    { name: "Email", url: `mailto:${profileData.email}` },
    ...profileData.socialLinks,
  ];

  return (
    <section className="mb-8">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          src={profileData.imageUrl}
          alt={profileData.name}
          className="w-28 h-28 object-cover rounded-md"
        />

        <div className="flex-1 md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            {profileData.name}
          </h1>
          <p className="text-base text-foreground/80 mt-1">
            {profileData.whoami}
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            {links.map((link) => {
              const Icon = socialIcons[link.name as keyof typeof socialIcons];
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  className="group relative text-foreground/60 hover:text-foreground transition-colors"
                >
                  {Icon && <Icon size={22} />}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <p className="text-foreground/70 mt-5 text-base">{profileData.about}</p>
    </section>
  );
};

export default Hero;

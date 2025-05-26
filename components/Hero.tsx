"use client";

import React from "react";
import Image from "next/image";
import SocialBadge from "./SocialBadge";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { GrStatusCriticalSmall } from "react-icons/gr";

const socials = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/muxdust",
    icon: <FaGithub />,
  },
  {
    id: 2,
    name: "Twitter",
    url: "https://x.com/muxdust",
    icon: <FaSquareXTwitter />,
  },
  {
    id: 3,
    name: "LeetCode",
    url: "https://leetcode.com/muxdust",
    icon: <SiLeetcode />,
  },
  {
    id: 4,
    name: "CodeForces",
    url: "https://codeforces.com/profile/bluetooxth",
    icon: <SiCodeforces />,
  },
  {
    id: 5,
    name: "LinkedIn",
    url: "https://linkedin.com/in/priyannxhuu",
    icon: <FaLinkedin />,
  },
];

export default function Hero() {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start px-3 md:w-4xl w-full">
        <p className="text-xs md:text-sm font-normal px-2 py-1 rounded-md border border-red-500/80 bg-red-500/40 backdrop-blur-2xl mb-3 flex items-center gap-1">
          <GrStatusCriticalSmall className="text-red-500/80 animate-pulse" />{" "}
          Available
        </p>
        <div className="flex flex-row justify-start items-center w-full gap-4">
          <div className="flex flex-col justify-start items-start">
            <Image
              src="https://avatars.githubusercontent.com/u/165533860?v=4"
              alt="Hero"
              width={120}
              height={120}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-1 max-w-lg">
            <h1 className="text-2xl font-semibold">Priyanshu Chahar</h1>
            <p className="text-md font-normal">Software Developer</p>
            <div className="flex flex-wrap justify-start items-start gap-2">
              {socials.map((social, index) => (
                <SocialBadge
                  key={index}
                  url={social.url}
                  icon={social.icon}
                  name={social.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

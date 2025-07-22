"use client";

import React from "react";
import Image from "next/image";
import SocialBadge from "./SocialBadge";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const socials = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/unsafe0x0",
    icon: <FaGithub />,
  },
  {
    id: 2,
    name: "Twitter",
    url: "https://x.com/unsafezero",
    icon: <FaSquareXTwitter />,
  },
  {
    id: 3,
    name: "LeetCode",
    url: "https://leetcode.com/unsafezero/",
    icon: <SiLeetcode />,
  },
  {
    id: 4,
    name: "CodeForces",
    url: "https://codeforces.com/profile/unsafezero",
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
      <div className="flex flex-col justify-start items-start px-3 md:w-3xl w-full">
        <div className="flex flex-row justify-start items-center w-full gap-4 mt-10">
          <div className="flex flex-col justify-start items-start">
            <Image
              src="https://avatars.githubusercontent.com/u/165533860?v=4"
              alt="Hero"
              width={120}
              height={120}
              className="rounded-md"
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

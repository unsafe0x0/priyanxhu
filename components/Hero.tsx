"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const socials = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/muxdust",
    icon: <FaGithub />,
  },
  {
    id: 2,
    name: "X",
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
    url: "https://codeforces.com/profile/muxdust",
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
      <div className="flex flex-wrap justify-start items-start w-full px-3 md:w-4xl gap-7">
        <div className="flex justify-center items-center">
          <Image
            src="https://avatars.githubusercontent.com/u/165533860?v=4"
            alt="Hero"
            width={150}
            height={150}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 max-w-lg">
          <h1 className="text-2xl font-medium flex flex-wrap items-center gap-3">
            <span>{`Hi, I'm`}</span>
            <span className="text-[#cc241d]">{` Priyanshu`}</span>
          </h1>
          <p className="text-md font-normal">
            {`3rd-year CS student with specialization in AiML, passionate about development, problem-solving, and learning new things`}
          </p>
          <div className="flex flex-wrap justify-start items-start gap-5">
            {socials.map((social) => (
              <Link
                key={social.id}
                href={social.url}
                target="_blank"
                className="text-2xl hover:scale-125 transition-all duration-300 ease-in-out"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

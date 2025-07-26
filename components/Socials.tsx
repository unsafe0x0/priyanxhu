"use client";
import React from "react";
import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

interface SocialsProps {
  github: string;
  linkedin: string;
  twitter: string;
  leetcode: string;
  codeforces: string;
}

const Socials = ({
  github,
  linkedin,
  twitter,
  leetcode,
  codeforces,
}: SocialsProps) => {
  return (
    <div className="flex flex-col justify-start items-start p-4 gap-3 bg-neutral-900 rounded-md border border-neutral-800 text-neutral-300 col-span-1 w-full break-inside-avoid">
      <h2 className="text-2xl font-semibold text-neutral-200 font-doto">
        Connect with Me
      </h2>
      <div className="grid grid-cols-2 gap-4 w-full">
        <Link
          href={github}
          target="_blank"
          className="flex justify-center items-center transition-colors duration-200 w-full h-full bg-neutral-800/60 p-4 rounded-md"
        >
          <FaGithub className="text-3xl" />
        </Link>
        <Link
          href={linkedin}
          target="_blank"
          className="flex justify-center items-center transition-colors duration-200 w-full h-full bg-neutral-800/60 p-4 rounded-md"
        >
          <FaLinkedin className="text-3xl" />
        </Link>
        <Link
          href={twitter}
          target="_blank"
          className="flex justify-center items-center transition-colors duration-200 w-full h-full bg-neutral-800/60 p-4 rounded-md"
        >
          <FaSquareXTwitter className="text-3xl" />
        </Link>
        <Link
          href={leetcode}
          target="_blank"
          className="flex justify-center items-center transition-colors duration-200 w-full h-full bg-neutral-800/60 p-4 rounded-md"
        >
          <SiLeetcode className="text-3xl" />
        </Link>
        <Link
          href={codeforces}
          target="_blank"
          className="flex justify-center items-center transition-colors duration-200 w-full h-full bg-neutral-800/60 p-4 rounded-md"
        >
          <SiCodeforces className="text-3xl" />
        </Link>
      </div>
    </div>
  );
};

export default Socials;

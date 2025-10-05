"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiMailFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiCodeblocks } from "react-icons/si";
import { TfiLayoutLineSolid } from "react-icons/tfi";

interface SocialLink {
  name: string;
  url: string;
}

interface FloatingNavProps {
  email: string;
  links: SocialLink[];
}

export default function FloatingNav({ email, links }: FloatingNavProps) {
  const get = (platform: string) =>
    links.find((l) => l.name.toLowerCase() === platform.toLowerCase())?.url ||
    "#";

  const theme = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const next = theme.resolvedTheme === "dark" ? "light" : "dark";
    theme.setTheme(next);
  };

  return (
    <nav
      aria-label="Floating social dock"
      className="fixed left-1/2 bottom-1 z-50 transform -translate-x-1/2 flex items-center gap-2 sm:gap-3 bg-white/10 dark:bg-black/10 border border-neutral-200 dark:border-neutral-800 backdrop-blur-xs rounded-full px-3 sm:px-5 py-2.5"
    >
      <Link
        href={`mailto:${email}`}
        aria-label="Send email"
        className="p-1 text-neutral-800 dark:text-neutral-100"
      >
        <RiMailFill size={24} />
      </Link>
      <Link
        href={get("GitHub")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="p-1 text-neutral-800 dark:text-neutral-100"
      >
        <AiFillGithub size={24} />
      </Link>

      <Link
        href={get("LinkedIn")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="p-1 text-neutral-800 dark:text-neutral-100"
      >
        <FaLinkedin size={24} />
      </Link>

      <Link
        href={get("Twitter")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="p-1 text-neutral-800 dark:text-neutral-100"
      >
        <FaSquareXTwitter size={24} />
      </Link>

      <Link
        href={get("LeetCode")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LeetCode"
        className="p-1 text-neutral-800 dark:text-neutral-100"
      >
        <SiLeetcode size={24} />
      </Link>

      <Link
        href={get("Discord")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discord"
        className="p-1 text-neutral-800 dark:text-neutral-100"
      >
        <FaDiscord size={24} />
      </Link>

      <TfiLayoutLineSolid
        size={24}
        className="text-neutral-800 dark:text-neutral-100 rotate-90"
      />

      <button
        type="button"
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className="p-1 text-neutral-800 dark:text-neutral-100"
      >
        {mounted &&
          (theme.resolvedTheme === "dark" ? (
            <SiCodeblocks size={24} />
          ) : (
            <SiCodeblocks size={24} />
          ))}
      </button>
    </nav>
  );
}

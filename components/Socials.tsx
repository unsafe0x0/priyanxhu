"use client";

import Link from "next/link";

interface SocialLink {
  name: string;
  url: string;
}

interface SocialsProps {
  email: string;
  links: SocialLink[];
}

export default function Socials({ email, links }: SocialsProps) {
  const get = (platform: string) =>
    links.find((l) => l.name.toLowerCase() === platform.toLowerCase())?.url ||
    "#";

  return (
    <section className="space-y-3">
      <h2 className="text-2xl tracking-wide font-medium">Socials</h2>
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-300">
        <Link href={`mailto:${email}`} className="underline underline-offset-4">
          Email
        </Link>
        <Link
          href={get("GitHub")}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          GitHub
        </Link>
        <Link
          href={get("LinkedIn")}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          LinkedIn
        </Link>
        <Link
          href={get("Twitter")}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          Twitter
        </Link>
        <Link
          href={get("LeetCode")}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          LeetCode
        </Link>
        <Link
          href={get("CodeForces")}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          CodeForces
        </Link>
      </div>
    </section>
  );
}

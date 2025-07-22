"use client";
import React, { useState } from "react";
import Link from "next/link";

const SocialBadge = ({
  url,
  icon,
  name,
}: {
  url: string;
  icon: React.ReactNode;
  name: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={url}
      target="_blank"
      className="text-2xl p-1.5 rounded-md relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon}
      <span
        className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap bg-neutral-800 dark:bg-neutral-50 text-white/80 dark:text-neutral-900 text-sm p-1 rounded-md border border-neutral-200 dark:border-neutral-700/50 transition-opacity duration-300 ease-in-out ${
          hovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {name}
      </span>
    </Link>
  );
};

export default SocialBadge;

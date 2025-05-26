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
      className="text-2xl transition-all duration-300 ease-in-out p-1.5 rounded-lg bg-neutral-900 border border-white/10 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon}
      <span
        className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap bg-neutral-100 text-neutral-900 text-sm p-1 rounded-lg border border-white/10 transition-opacity duration-300 ease-in-out ${
          hovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {name}
      </span>
    </Link>
  );
};

export default SocialBadge;

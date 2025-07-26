"use client";
import React from "react";
import Link from "next/link";

interface InfoProps {
  name: string;
  title: string;
  about: string;
}

const Info = ({ name, title, about }: InfoProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-3 p-4 bg-neutral-900 rounded-md border border-neutral-800 text-neutral-300 col-span-1 w-full break-inside-avoid">
      <h1 className="text-3xl font-semibold text-neutral-200 font-doto">
        {name}
      </h1>
      <p className="text-base font-medium">{title}</p>
      <p className="text-sm font-normal text-neutral-400">{about}</p>
      <Link href={'mailto:unsafezero@gmail.com'} className="text-neutral-800 bg-white px-3 py-2 text-sm rounded-md hover:bg-neutral-200 transition-colors duration-200 cursor-pointer self-start mt-2">
        Hire Me
      </Link>
    </div>
  );
};

export default Info;

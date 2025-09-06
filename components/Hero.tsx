"use client";

import Image from "next/image";

interface HeroProps {
  name: string;
  title: string;
  about: string;
  imageUrl: string;
}

export default function Hero({ name, title, about, imageUrl }: HeroProps) {
  return (
    <section className="space-y-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-start gap-4 sm:gap-5">
        <Image
          src={imageUrl}
          alt={`${name} avatar`}
          width={100}
          height={100}
          className="rounded-md object-cover"
          priority
        />
        <div className="space-y-1 text-left">
          <h2 className="text-3xl tracking-tight font-medium">{name}</h2>
            <p className="text-base">{title}</p>
            <span className="inline-flex items-center rounded-md border border-neutral-700/50 bg-[#212121] px-2 py-1 text-xs uppercase tracking-wide">
              Open to work
            </span>
        </div>
      </div>
      <p className="text-sm text-neutral-300 leading-relaxed ">{about}</p>
    </section>
  );
}

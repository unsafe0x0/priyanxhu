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
        <div className="space-y-2 text-left">
          <h2 className="font-doto text-3xl md:text-4xl tracking-tight">
            {name}
          </h2>
          <p className="text-base">{title}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-300 leading-relaxed ">{about}</p>
    </section>
  );
}

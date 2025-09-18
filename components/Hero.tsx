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
          className="object-cover rounded-md"
          priority
        />
        <div className="space-y-1.5">
          <h2 className="text-3xl tracking-tight font-medium">{name}</h2>
          <p className="text-base">{title}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-300">{about}</p>
    </section>
  );
}

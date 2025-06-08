"use client";

import React from "react";
import { skills } from "@/data/Skills";
import Image from "next/image";

import FadeInOnScroll from "./FadeInScroll";

export default function Skills() {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-full px-3 md:w-4xl gap-7">
        <FadeInOnScroll>
          <h2 className="text-2xl font-medium underline underline-offset-8 decoration-2 decoration-green-500/80">
            What i Know
          </h2>
        </FadeInOnScroll>
        <div className="flex flex-wrap justify-start items-start gap-1.5 md:gap-2">
          {skills.map((skill, index) => (
            <FadeInOnScroll key={index}>
              <div className="flex justify-center items-center gap-1 border border-white/10 rounded-lg px-3 py-1.5 bg-neutral-900">
                <Image
                  src={skill.image}
                  alt={skill.skillName}
                  width={22}
                  height={22}
                  className="object-contain h-5 w-5"
                />
                <p className="text-md font-normal">{skill.skillName}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

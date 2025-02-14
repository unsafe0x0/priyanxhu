import React from "react";
import skills from "@/data/Skills";

const Skills = () => {
  return (
    <section className="flex justify-center items-center w-full font-[family-name:var(--font-secondary)]">
      <div className="flex flex-col justify-start items-start w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 gap-4">
        <h2 className="text-2xl font-normal text-slate-200 underline underline-offset-8 decoration-wavy decoration-cyan-500 font-[family-name:var(--font-primary)]">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-start items-start gap-2 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-1 border md:border-2 border-zinc-800 rounded-md py-1.5 px-3 bg-zinc-900 text-slate-300"
            >
              {skill.skillIcon} {skill.skillName}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

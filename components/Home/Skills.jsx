import React from "react";
import skills from "@/data/Skills";

const Skills = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 gap-4">
        <h2 className="text-3xl font-normal text-zinc-100 font-primary">
          What i know
        </h2>
        <div className="flex flex-wrap justify-start items-start gap-2 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-1 border md:border-2 border-[#282828] hover:border-green-500 transition-colors duration-300 ease-in-out rounded-lg py-1.5 px-3 bg-[#151515] text-zinc-300"
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

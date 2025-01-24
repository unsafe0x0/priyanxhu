import React from "react";
import skills from "@/data/Skills";

const Skills = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 gap-4">
        <h2 className="text-2xl font-normal text-zinc-100 underline underline-offset-8 decoration-wavy decoration-cyan-500">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch justify-start w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start w-full bg-zinc-900 border md:border-2 border-zinc-800 p-3 rounded-lg"
            >
              <h3 className="text-xl font-medium text-zinc-100">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 justify-start items-start w-full gap-2  mt-2">
                {skill.skills.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-start items-start w-full gap-2"
                  >
                    <div className="flex justify-start items-center w-full gap-2 bg-zinc-950 p-2 rounded-md transition-all duration-300 ease-in-out">
                      <span className="text-xl text-zinc-200 p-1 bg-zinc-900 rounded-md">
                        {tech.skillIcon}
                      </span>
                      <span className="text-md text-zinc-200">
                        {tech.skillName}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

"use client";

import React, { JSX } from "react";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiHono,
  SiMongodb,
  SiPython,
  SiPostman,
  SiExpo,
  SiPostgresql,
  SiCplusplus,
  SiBun,
  SiC,
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { TbBrandPrisma, TbBrandReactNative } from "react-icons/tb";
import { GiBearFace, GiPalmTree } from "react-icons/gi";

interface Skill {
  skillName: string;
  skillIcon: JSX.Element;
}

export const skills: Skill[] = [
  {
    skillName: "JavaScript",
    skillIcon: <FaJsSquare />,
  },
  {
    skillName: "Golang",
    skillIcon: <FaGolang />,
  },
  {
    skillName: "C",
    skillIcon: <SiC />,
  },
  {
    skillName: "C++",
    skillIcon: <SiCplusplus />,
  },
  {
    skillName: "Python",
    skillIcon: <SiPython />,
  },
  {
    skillName: "ReactJS",
    skillIcon: <FaReact />,
  },
  {
    skillName: "Tanstack",
    skillIcon: <GiPalmTree />,
  },
  {
    skillName: "NextJS",
    skillIcon: <SiNextdotjs />,
  },
  {
    skillName: "TailwindCSS",
    skillIcon: <SiTailwindcss />,
  },
  {
    skillName: "React Native",
    skillIcon: <TbBrandReactNative />,
  },
  {
    skillName: "Expo",
    skillIcon: <SiExpo />,
  },
  {
    skillName: "NodeJS",
    skillIcon: <FaNodeJs />,
  },
  {
    skillName: "Bun",
    skillIcon: <SiBun />,
  },
  {
    skillName: "ExpressJS",
    skillIcon: <SiExpress />,
  },
  {
    skillName: "Hono",
    skillIcon: <SiHono />,
  },
  {
    skillName: "Zustand",
    skillIcon: <GiBearFace />,
  },
  {
    skillName: "Prisma",
    skillIcon: <TbBrandPrisma />,
  },
  {
    skillName: "PostgreSQL",
    skillIcon: <SiPostgresql />,
  },
  {
    skillName: "MongoDB",
    skillIcon: <SiMongodb />,
  },
  {
    skillName: "Git",
    skillIcon: <FaGitAlt />,
  },
  {
    skillName: "Github",
    skillIcon: <FaGithub />,
  },
  {
    skillName: "Postman",
    skillIcon: <SiPostman />,
  },
  {
    skillName: "Linux",
    skillIcon: <FaLinux />,
  },
];

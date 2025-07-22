import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io5";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiReactquery,
  SiPrisma,
  SiHono,
  SiCloudinary,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaRobot } from "react-icons/fa6";
import { IoSparklesOutline } from "react-icons/io5";
import { LuFramer } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";

interface ProjectTech {
  name: string;
  icon: React.ReactNode | null;
}

interface Project {
  name: string;
  tech: ProjectTech[];
  desc: string;
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    name: "OptiCV",
    tech: [
      { name: "NextJS", icon: <RiNextjsLine /> },
      { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
      { name: "Tanstack Query", icon: <SiReactquery /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Groq AI", icon: <IoSparklesOutline /> },
      { name: "Framer Motion", icon: <LuFramer /> },
      { name: "NextAuth", icon: <MdOutlineSecurity /> },
    ],
    desc: "Ai powered overleaf resume optimizer",
    link: "https://opticv.vercel.app",
    github: "https://github.com/unsafe0x0/opticv",
  },
  {
    name: "BashForge",
    tech: [
      { name: "NextJS", icon: <RiNextjsLine /> },
      { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
      { name: "VsCode", icon: <VscVscode /> },
    ],
    desc: "Coding time activity tracker with VsCode extension",
    link: "https://bashforge.vercel.app",
    github: "https://github.com/unsafe0x0/bashforge",
  },
  {
    name: "Vaulture",
    tech: [
      { name: "NextJS", icon: <RiNextjsLine /> },
      { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
      { name: "Tanstack Query", icon: <SiReactquery /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
    ],
    desc: "Password manager with end-to-end encryption",
    link: "https://vaulture.vercel.app",
    github: "https://github.com/unsafe0x0/vaulture",
  },
  // {
  //   name: "QuadState",
  //   tech: [
  //     { name: "NextJS", icon: <RiNextjsLine /> },
  //     { name: "Cloudinary", icon: <SiCloudinary /> },
  //     { name: "MongoDB", icon: <SiMongodb /> },
  //     { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
  //     { name: "Tanstack Query", icon: <SiReactquery /> },
  //     { name: "XGBoost", icon: <FaRobot /> },
  //   ],
  //   desc: "Explore or list luxury properties and predict property price based on features.",
  //   link: "https://quadstate.vercel.app",
  //   github: "https://github.com/unsafe0x0/quadstate",
  // },
  // {
  //   name: "Lynktree",
  //   tech: [
  //     { name: "NextJS", icon: <RiNextjsLine /> },
  //     { name: "NodeJS", icon: <IoLogoNodejs /> },
  //     { name: "Express", icon: <SiExpress /> },
  //     { name: "MongoDB", icon: <SiMongodb /> },
  //     { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
  //   ],
  //   desc: "Organize and share multiple links through a single URL.",
  //   link: "https://lynktree.vercel.app",
  //   github: "https://github.com/unsafe0x0/Lynktree",
  // },
  // {
  //   name: "Zkip",
  //   tech: [
  //     { name: "NextJS", icon: <RiNextjsLine /> },
  //     { name: "MongoDB", icon: <SiMongodb /> },
  //     { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
  //   ],
  //   desc: "URL shortener for easy sharing and tracking.",
  //   link: "https://zkip.vercel.app",
  //   github: "https://github.com/unsafe0x0/zkip",
  // },
  {
    name: "Dokxy",
    tech: [
      { name: "NextJS", icon: <RiNextjsLine /> },
      { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
      { name: "NodeJS", icon: <IoLogoNodejs /> },
      { name: "HonoJS", icon: <SiHono /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Cloudinary", icon: <SiCloudinary /> },
    ],
    desc: "Doctor-patient appointment system for easy scheduling and management.",
    link: "https://dokxyv1.vercel.app",
    github: "https://github.com/unsafe0x0/healthcare-frontend",
  },
];

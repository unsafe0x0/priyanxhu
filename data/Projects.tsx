import { FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiHono,
  SiPostgresql,
} from "react-icons/si";
import { ReactNode } from "react";

interface Project {
  name: string;
  tech: ReactNode[];
  desc: string;
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    name: "Lynktree",
    tech: [
      <SiNextdotjs key="nextjs" />,
      <FaNodeJs key="nodejs" />,
      <SiExpress key="express" />,
      <SiMongodb key="mongodb" />,
    ],
    desc: "Organize and share multiple links through a single URL.",
    link: "https://lynktree.vercel.app",
    github: "https://github.com/Bluetooxth/Lynktree",
  },
  {
    name: "Zkip",
    tech: [
      <SiNextdotjs key="nextjs" />,
      <SiMongodb key="mongodb" />,
      <SiTailwindcss key="tailwind" />,
    ],
    desc: "URL shortening service for easy sharing and tracking.",
    link: "https://zkip.vercel.app",
    github: "https://github.com/Bluetooxth/zkip",
  },
  //   {
  //     name: "ByteRace",
  //     tech: [
  //       <SiNextdotjs key="nextjs" />,
  //       <SiMongodb key="mongodb" />,
  //       <SiTailwindcss key="tailwind" />,
  //     ],
  //     desc: "Coding time tracker along with language and a vs code extension.",
  //     link: "https://byterace.vercel.app",
  //     github: "https://github.com/Bluetooxth/ByteRace",
  //   },
  {
    name: "Dokxy",
    tech: [
      <SiNextdotjs key="nextjs" />,
      <SiTailwindcss key="tailwind" />,
      <SiPostgresql key="postgresql" />,
      <FaNodeJs key="nodejs" />,
      <SiHono key="hono" />,
    ],
    desc: "Doctor-patient appointment system for easy scheduling and management.",
    link: "https://dokxyv1.vercel.app",
    github: "https://github.com/Bluetooxth/healthcare-api",
  },
];

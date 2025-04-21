import { FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiHono,
  SiCloudinary,
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
    name: "RoomUncle",
    tech: [
      <SiNextdotjs key="nextjs" />,
      <SiCloudinary key="cloudinary" />,
      <SiMongodb key="mongodb" />,
      <SiTailwindcss key="tailwind" />,
    ],
    desc: "A platform for listing hostel rooms and pg rooms.",
    link: "https://roomuncle.vercel.app",
    github: "https://github.com/muxdust/roomuncle",
  },
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
    github: "https://github.com/muxdust/Lynktree",
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
    github: "https://github.com/muxdust/zkip",
  },
  {
    name: "Dokxy",
    tech: [
      <SiNextdotjs key="nextjs" />,
      <SiTailwindcss key="tailwind" />,
      <FaNodeJs key="nodejs" />,
      <SiHono key="hono" />,
      <SiMongodb key="mongodb" />,
      <SiCloudinary key="cloudinary" />,
    ],
    desc: "Doctor-patient appointment system for easy scheduling and management.",
    link: "https://dokxyv1.vercel.app",
    github: "https://github.com/muxdust/healthcare-frontend",
  },
];

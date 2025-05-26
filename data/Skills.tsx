import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithub, FaPython, FaGolang } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoNodejs, IoLogoJavascript } from "react-icons/io5";

import {
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
  RiBearSmileLine,
} from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiReactquery,
  SiPrisma,
  SiHono,
  SiBun,
  SiTypescript,
} from "react-icons/si";
import {
  TbBrandCpp,
  TbHexagonLetterC,
  TbBrandReactNative,
} from "react-icons/tb";
import { VscTerminalLinux } from "react-icons/vsc";

interface Skill {
  skillName: string;
  icon?: React.ReactNode;
}

export const skills: Skill[] = [
  {
    skillName: "JavaScript",
    icon: <IoLogoJavascript />,
  },
  {
    skillName: "C",
    icon: <TbHexagonLetterC />,
  },
  {
    skillName: "C++",
    icon: <TbBrandCpp />,
  },
  {
    skillName: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    skillName: "Golang",
    icon: <FaGolang />,
  },
  {
    skillName: "Python",
    icon: <FaPython />,
  },
  {
    skillName: "ReactJS",
    icon: <RiReactjsLine />,
  },
  {
    skillName: "Tanstack",
    icon: <SiReactquery />,
  },
  {
    skillName: "NextJS",
    icon: <RiNextjsLine />,
  },
  {
    skillName: "TailwindCSS",
    icon: <RiTailwindCssFill />,
  },
  {
    skillName: "React Native",
    icon: <TbBrandReactNative />,
  },
  {
    skillName: "NodeJS",
    icon: <IoLogoNodejs />,
  },
  {
    skillName: "BunJS",
    icon: <SiBun />,
  },
  {
    skillName: "ExpressJS",
    icon: <SiExpress />,
  },
  {
    skillName: "HonoJS",
    icon: <SiHono />,
  },
  {
    skillName: "Zustand",
    icon: <RiBearSmileLine />,
  },
  {
    skillName: "Prisma",
    icon: <SiPrisma />,
  },
  {
    skillName: "PostgreSQL",
    icon: <BiLogoPostgresql />,
  },
  {
    skillName: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    skillName: "Git",
    icon: <FaGitAlt />,
  },
  {
    skillName: "Github",
    icon: <FaGithub />,
  },
  {
    skillName: "Postman",
    icon: <SiPostman />,
  },
  {
    skillName: "Linux",
    icon: <VscTerminalLinux />,
  },
];

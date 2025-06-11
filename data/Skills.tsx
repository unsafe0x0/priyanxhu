import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithub, FaPython, FaGolang, FaGitAlt } from "react-icons/fa6";
import { IoLogoNodejs, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiReactquery,
  SiPrisma,
  SiHono,
  SiBun,
  SiTypescript,
  SiTensorflow,
  SiKeras,
} from "react-icons/si";
import {
  TbBrandCpp,
  TbHexagonLetterC,
  TbBrandReactNative,
} from "react-icons/tb";
import { VscTerminalLinux } from "react-icons/vsc";
import { GiArtificialIntelligence } from "react-icons/gi";
import { LuFramer } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";

interface Skill {
  skillName: string;
  icon: React.ReactNode;
}

export const skills: Skill[] = [
  { skillName: "JavaScript", icon: <IoLogoJavascript /> },
  { skillName: "TypeScript", icon: <SiTypescript /> },
  { skillName: "C", icon: <TbHexagonLetterC /> },
  { skillName: "C++", icon: <TbBrandCpp /> },
  { skillName: "Golang", icon: <FaGolang /> },
  { skillName: "Python", icon: <FaPython /> },
  { skillName: "ReactJS", icon: <RiReactjsLine /> },
  { skillName: "NextJS", icon: <RiNextjsLine /> },
  { skillName: "NextAuth", icon: <MdOutlineSecurity /> },
  { skillName: "NodeJS", icon: <IoLogoNodejs /> },
  { skillName: "BunJS", icon: <SiBun /> },
  { skillName: "ExpressJS", icon: <SiExpress /> },
  { skillName: "HonoJS", icon: <SiHono /> },
  { skillName: "TailwindCSS", icon: <RiTailwindCssFill /> },
  { skillName: "Framer Motion", icon: <LuFramer /> },
  { skillName: "Tanstack Query", icon: <SiReactquery /> },
  { skillName: "React Native", icon: <TbBrandReactNative /> },
  { skillName: "Prisma", icon: <SiPrisma /> },
  { skillName: "PostgreSQL", icon: <BiLogoPostgresql /> },
  { skillName: "MongoDB", icon: <SiMongodb /> },
  { skillName: "Git", icon: <FaGitAlt /> },
  { skillName: "Github", icon: <FaGithub /> },
  { skillName: "Postman", icon: <SiPostman /> },
  { skillName: "Linux", icon: <VscTerminalLinux /> },
  { skillName: "ML", icon: <GiArtificialIntelligence /> },
  { skillName: "TensorFlow", icon: <SiTensorflow /> },
  { skillName: "Keras", icon: <SiKeras /> },
];

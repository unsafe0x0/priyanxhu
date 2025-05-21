interface Project {
  name: string;
  tech: string[];
  desc: string;
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    name: "QuadState",
    tech: [
      "NextJS",
      "Cloudinary",
      "MongoDB",
      "TailwindCSS",
      "Tanstack Query",
      "XGBoost",
    ],
    desc: "Explore or list luxury properties and predict property price based on features.",
    link: "https://quadstate.vercel.app",
    github: "https://github.com/muxdust/quadstate",
  },
  {
    name: "Vaulture",
    tech: ["NextJS", "TailwindCSS", "Tanstack Query", "Prisma", "PostgreSQL"],
    desc: "Password manager with end-to-end encryption",
    link: "https://vaulture.vercel.app",
    github: "https://github.com/muxdust/vaulture",
  },
  {
    name: "ByteRace",
    tech: ["NextJS", "TailwindCSS", "PostgreSQL", "VsCode"],
    desc: "Coding time activity tracker with vs code extension",
    link: "https://byterace.vercel.app",
    github: "https://github.com/muxdust/byterace",
  },
  {
    name: "Lynktree",
    tech: ["NextJS", "NodeJS", "Express", "MongoDB", "TailwindCSS"],
    desc: "Organize and share multiple links through a single URL.",
    link: "https://lynktree.vercel.app",
    github: "https://github.com/muxdust/Lynktree",
  },
  {
    name: "Zkip",
    tech: ["NextJS", "MongoDB", "TailwindCSS"],
    desc: "URL shortening service for easy sharing and tracking.",
    link: "https://zkip.vercel.app",
    github: "https://github.com/muxdust/zkip",
  },
  {
    name: "Dokxy",
    tech: [
      "NextJS",
      "TailwindCSS",
      "NodeJS",
      "HonoJS",
      "MongoDB",
      "Cloudinary",
    ],
    desc: "Doctor-patient appointment system for easy scheduling and management.",
    link: "https://dokxyv1.vercel.app",
    github: "https://github.com/muxdust/healthcare-frontend",
  },
];

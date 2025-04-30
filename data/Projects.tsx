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
      "Tailwind CSS",
      "Tanstack Query",
      "XGBoost",
    ],
    desc: "QuadState is a platform for listing luxury properties and predicting price of properties based on features.",
    link: "https://quadstate.vercel.app",
    github: "https://github.com/muxdust/quadstate",
  },
  {
    name: "Lynktree",
    tech: ["NextJS", "NodeJS", "Express", "MongoDB"],
    desc: "Organize and share multiple links through a single URL.",
    link: "https://lynktree.vercel.app",
    github: "https://github.com/muxdust/Lynktree",
  },
  {
    name: "Zkip",
    tech: ["NextJS", "MongoDB", "Tailwind CSS"],
    desc: "URL shortening service for easy sharing and tracking.",
    link: "https://zkip.vercel.app",
    github: "https://github.com/muxdust/zkip",
  },
  {
    name: "Dokxy",
    tech: [
      "NextJS",
      "Tailwind CSS",
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

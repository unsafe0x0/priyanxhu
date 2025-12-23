import type React from "react";

export default function Resume(): React.ReactElement {
	return (
		<div className="flex justify-center items-start min-h-screen p-2 sm:p-3 md:p-5">
			<div className="w-full max-w-[800px] px-4 py-6 sm:px-6 sm:py-8 md:p-8 border border-neutral-500 text-sm sm:text-[15px] leading-relaxed">
				<header className="text-center mb-4 sm:mb-6">
					<h1 className="text-2xl sm:text-3xl font-bold">Priyanshu Chahar</h1>

					<div className="mt-2">
						<a
							href="mailto:priyanshuchahar07@gmail.com"
							className="text-blue-600 hover:underline break-all"
						>
							priyanshuchahar07@gmail.com
						</a>
					</div>

					<div className="mt-1 flex flex-col sm:flex-row sm:justify-center sm:items-center gap-1 sm:gap-0">
						<span>
							Github:{" "}
							<a
								href="https://github.com/Unsafe0x0"
								target="_blank"
								rel="noreferrer"
								className="text-blue-600 hover:underline"
							>
								Unsafe0x0
							</a>
						</span>
						<span className="hidden sm:inline">{" | "}</span>
						<span>
							LinkedIn:{" "}
							<a
								href="https://www.linkedin.com/in/priyannxhuu"
								target="_blank"
								rel="noreferrer"
								className="text-blue-600 hover:underline"
							>
								Priyanshu Chahar
							</a>
						</span>
						<span className="hidden sm:inline">{" | "}</span>
						<a
							href="https://priyanxhu.me"
							target="_blank"
							rel="noreferrer"
							className="text-blue-600 hover:underline"
						>
							priyanxhu.me
						</a>
					</div>
				</header>

				<Section title="Objective">
					<p className="text-sm sm:text-[15px]">
						Software Developer skilled in building scalable systems and
						high-performance web applications. Focused on systems design,
						performance optimization, and reliability. Experienced in developing
						AI/ML and Generative AI applications, with a strong foundation in
						modern software architecture and emerging technologies.
					</p>
				</Section>

				<Section title="Educational Qualification">
					<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
						<div>
							<div className="font-bold">
								B.Tech CSE with AI/ML Specialization
							</div>
							<div>JECRC University, Jaipur</div>
						</div>
						<span className="text-neutral-600 sm:text-inherit">2022–2026</span>
					</div>
				</Section>

				<Section title="Skills">
					<div className="space-y-1">
						<Skill
							label="Frontend"
							value="JavaScript, TypeScript, React, NextJS, TailwindCSS, TanstackQuery"
						/>
						<Skill
							label="Backend"
							value="NodeJS, ExpressJS, Fastify, Bun, Prisma, DrizzleORM, NextAuth, MongoDB, PostgreSQL, Redis"
						/>
						<Skill label="Tools" value="VS Code, Linux, Postman" />
						<Skill label="Version Control" value="Git, GitHub" />
						<Skill label="Languages" value="C++, Python, Golang" />
						<Skill
							label="Concepts"
							value="REST API, Web Security, System Design, AI/ML, Generative AI"
						/>
						<Skill
							label="Soft Skills"
							value="Quick Learner, Problem Solving, Punctuality, Curiosity, Adaptability"
						/>
					</div>
				</Section>

				<Section title="Projects">
					<div className="space-y-3">
						<Project
							name="Ai SDK"
							desc="AI SDK to integrate AI models into Golang apps with minimal code. Lightweight and well-documented."
						/>
						<Project
							name="Heloq"
							desc="A minimal, fast, type-safe token library with HMAC-SHA512 signing. Built using TypeScript."
						/>
						<Project
							name="CoreDump"
							desc="Coding activity tracker with VS Code extension, leaderboard, insights. Built using NextJS, TailwindCSS, NextAuth, PostgreSQL."
						/>
						<Project
							name="Paperly"
							desc="E-commerce web + mobile app for stationery. Built using NextJS, TailwindCSS, React Native, NextAuth, MongoDB, ExpressJS, NodeJS."
						/>
						<Project
							name="XeroChat"
							desc="AI-powered chat app supporting 15+ LLMs. Built using NextJS, TailwindCSS, MistralAI, OpenRouter, Gemini API, NextAuth."
						/>
						<Project
							name="Dokxy"
							desc="Appointment scheduling & management platform with multi-role dashboards. Built using NextJS, TailwindCSS, Fastify, MongoDB."
						/>
					</div>
				</Section>

				<Section title="Achievements">
					<ul className="list-disc list-inside space-y-1">
						<li>
							Solved 600+ coding problems across LeetCode, Codeforces, and
							CodeChef.
						</li>
						<li>Built 20+ full-stack projects.</li>
					</ul>
				</Section>

				<Section title="Interests">
					<div className="space-y-1">
						<Skill
							label="Tech"
							value="Development, Open Source, System Design, Backend, AI/ML"
						/>
						<Skill label="Non-Tech" value="Playing & Watching Cricket" />
					</div>
				</Section>
			</div>
		</div>
	);
}

type SectionProps = {
	title: string;
	children: React.ReactNode;
};

function Section({ title, children }: SectionProps): React.ReactElement {
	return (
		<section className="mb-4 sm:mb-6">
			<h2 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 border-b border-neutral-300 pb-1">
				{title}
			</h2>
			{children}
		</section>
	);
}

type ProjectProps = {
	name: string;
	desc: string;
};

function Project({ name, desc }: ProjectProps): React.ReactElement {
	return (
		<div>
			<span className="font-bold">{name}</span>
			<span className="hidden sm:inline"> – </span>
			<span className="sm:hidden block text-sm mt-0.5">{desc}</span>
			<span className="hidden sm:inline">{desc}</span>
		</div>
	);
}

type SkillProps = {
	label: string;
	value: string;
};

function Skill({ label, value }: SkillProps): React.ReactElement {
	return (
		<div className="flex flex-col sm:flex-row sm:gap-1">
			<strong className="shrink-0">{label}:</strong>
			<span className="text-sm sm:text-[15px]">{value}</span>
		</div>
	);
}

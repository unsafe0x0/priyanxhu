import { profileData } from "@/lib/data";

export function Projects() {
	return (
		<section className="space-y-4">
			<h2 className="text-2xl font-bold">Projects I've Built</h2>

			<ul className="space-y-3 list-disc list-inside">
				{profileData.projects.map((project) => (
					<li key={project.name}>
						<a
							href={project.links[0]?.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary underline hover:no-underline font-medium"
						>
							{project.name.toLowerCase()}
						</a>
						{" : "}
						<span className="text-muted-foreground">{project.description}</span>
						{project.stack && (
							<div className="flex flex-wrap gap-2 mt-2">
								{project.stack.map((tech) => (
									<span
										key={tech}
										className="text-xs text-foreground bg-card px-2 py-1 rounded-md"
									>
										{tech}
									</span>
								))}
							</div>
						)}
					</li>
				))}
			</ul>
		</section>
	);
}

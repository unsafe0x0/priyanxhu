import Link from "next/link";
import { FaArrowRight, FaDiamond } from "react-icons/fa6";
import Badge from "./Badge";

interface Blog {
	title: string;
	description: string;
	slug: string;
	publishedAt: string;
	readTime: string;
	tags: string[];
}

interface BlogCardProps {
	blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	return (
		<Link href={`/${blog.slug}`} className="block">
			<article className="relative p-5 rounded-lg border border-[#282828] bg-[#1a1a1a]">
				<div className="relative space-y-3">
					<div className="flex items-start justify-between gap-4">
						<h2 className="text-lg font-medium text-white leading-snug">
							{blog.title}
						</h2>
						<FaArrowRight
							className="text-neutral-500 flex-shrink-0 mt-1"
							size={14}
						/>
					</div>

					<p className="text-sm text-neutral-400 leading-relaxed line-clamp-2">
						{blog.description}
					</p>

					<div className="flex items-center gap-3 text-sm text-neutral-500">
						<time dateTime={blog.publishedAt} className="font-medium">
							{formatDate(blog.publishedAt)}
						</time>
						<FaDiamond className="text-[8px] text-neutral-600" />
						<span>{blog.readTime}</span>
					</div>

					<div className="flex flex-wrap items-center gap-2 pt-1">
						{blog.tags.slice(0, 4).map((tag) => (
							<Badge key={tag} item={tag} />
						))}
						{blog.tags.length > 4 && (
							<span className="text-sm text-neutral-500">
								+{blog.tags.length - 4}
							</span>
						)}
					</div>
				</div>
			</article>
		</Link>
	);
}

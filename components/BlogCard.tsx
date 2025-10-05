import Link from "next/link";
import { FaDiamond } from "react-icons/fa6";
import Badge from "./Badge";

interface Blog {
  title: string;
  description: string;
  url: string;
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
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-2">
      <Link href={`${blog.url}`} target="_blank" rel="noopener noreferrer">
        <h2 className="text-lg font-medium text-neutral-900 dark:text-white hover:text-[#5865F2]">
          {blog.title}
        </h2>
      </Link>

      <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {blog.description}
      </p>

      <div className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
        <time dateTime={blog.publishedAt}>{formatDate(blog.publishedAt)}</time>
        <FaDiamond className="inline text-xs" />
        <span>{blog.readTime}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <Badge key={tag} item={tag} />
        ))}
      </div>
    </div>
  );
}

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
        <h2 className="text-lg font-medium text-foreground hover:text-foreground/80 transition-colors">
          {blog.title}
        </h2>
      </Link>

      <p className="text-base text-foreground/70 leading-relaxed">
        {blog.description}
      </p>

      <div className="flex items-center gap-3 text-base text-foreground/60">
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

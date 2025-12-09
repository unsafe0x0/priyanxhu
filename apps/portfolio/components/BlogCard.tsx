"use client";
import Link from "next/link";
import { FaDiamond } from "react-icons/fa6";
import { Badge } from "./ui/badge";

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
        <h2 className="text-xl font-medium text-card-foreground hover:underline">
          {blog.title}
        </h2>
      </Link>

      <p className="text-base md:text-lg text-card-foreground/80">
        {blog.description}
      </p>

      <div className="flex items-center gap-3 text-lg text-card-foreground/80">
        <time dateTime={blog.publishedAt}>{formatDate(blog.publishedAt)}</time>
        <FaDiamond className="inline text-sm" />
        <span>{blog.readTime}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <Badge key={tag} className="rounded">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

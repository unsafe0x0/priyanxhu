"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import BlogCard from "./BlogCard";

interface Blog {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
}

interface BlogsProps {
  blogs: Blog[];
}

export default function Blogs({ blogs }: BlogsProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl tracking-wide font-medium">Latest Blogs</h2>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1 text-base text-neutral-400 hover:text-red-400 transition-colors"
        >
          View all <FaArrowRight className="inline" />
        </Link>
      </div>

      <div className="space-y-5">
        {blogs.slice(0, 3).map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>

      {blogs.length === 0 && (
        <div className="text-center py-8 text-neutral-400">
          <p>No blogs published yet. Check back soon!</p>
        </div>
      )}
    </section>
  );
}

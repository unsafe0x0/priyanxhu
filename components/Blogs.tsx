"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import BlogCard from "./BlogCard";
import Button from "./Button";

interface Blog {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
}
const fetchBlogs = async () => {
  const res = await fetch("/api/feed");
  const data = await res.json();
  return data.data;
};

export default function Blogs() {
  const [fetchedBlogs, setFetchedBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogs = await fetchBlogs();
      setFetchedBlogs(blogs);
    };
    getBlogs();
  }, []);

  console.log(fetchedBlogs);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl tracking-wide font-semibold">Latest Blogs</h2>
      </div>

      <div className="space-y-5">
        {fetchedBlogs.map((blog) => (
          <BlogCard key={blog.url} blog={blog} />
        ))}
      </div>

      {fetchedBlogs.length === 0 && (
        <div className="text-center py-8 text-neutral-700 dark:text-neutral-300">
          <p>Unable to fetch blogs</p>
        </div>
      )}
      <Button type="button">
        <Link
          href="https://blogs.priyanxhu.me"
          className="inline-flex items-center gap-2"
        >
          View all <FaArrowRight className="inline" />
        </Link>
      </Button>
    </section>
  );
}

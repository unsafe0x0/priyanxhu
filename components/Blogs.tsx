"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import BlogCard from "./BlogCard";
import { Button } from "./ui/button";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const blogs = await fetchBlogs();
        setFetchedBlogs(blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);

  if (loading) {
    return (
      <section className="">
        <h2 className="text-3xl font-semibold mb-5">Latest Blogs</h2>
        <div className="space-y-5">
          <div className="">
            <h3 className="text-lg font-medium mb-1">Loading...</h3>
            <p className="text-foreground/70 text-base md:text-lg">
              Loading blog content...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="">
      <h2 className="text-3xl font-semibold mb-5">Latest Blogs</h2>

      <div className="space-y-5 mb-5">
        {fetchedBlogs.map((blog) => (
          <BlogCard key={blog.url} blog={blog} />
        ))}
      </div>

      {fetchedBlogs.length === 0 && (
        <div className="text-center py-8 text-foreground/70">
          <p>Unable to fetch blogs</p>
        </div>
      )}

      <Button type="button" className="shadow-none">
        <Link
          href="https://blogs.priyanxhu.me"
          className="inline-flex items-center gap-2"
        >
          View All <FaArrowRight className="inline" />
        </Link>
      </Button>
    </section>
  );
}

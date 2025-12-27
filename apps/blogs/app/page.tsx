"use client";

import BlogCard from "@/components/blog-card";
import blogsData from "@/data/data";
import { useMemo, useState } from "react";
import { FaPen, FaSearch } from "react-icons/fa";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = useMemo(() => {
    if (!searchQuery.trim()) return blogsData;

    const query = searchQuery.toLowerCase();
    return blogsData.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.description.toLowerCase().includes(query) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(query)),
    );
  }, [searchQuery]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    for (const blog of blogsData) {
      for (const tag of blog.tags) {
        tags.add(tag);
      }
    }
    return Array.from(tags).slice(0, 6);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-3 py-12">
      <section className="space-y-6 mb-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Writing about
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#c15f3c] to-orange-400">
              code & systems
            </span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
            Exploring software development, backend systems, databases, and
            everything in between. Thoughts on building reliable software.
          </p>
        </div>

        <div className="relative">
          <FaSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
            size={14}
          />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-[#1a1a1a] border border-[#282828] rounded-lg text-white placeholder:text-neutral-500 outline-none text-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 text-sm px-2 py-1 rounded bg-[#252525]"
            >
              Clear
            </button>
          )}
        </div>

        {!searchQuery && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-neutral-500 mr-1">
              Quick filters:
            </span>
            {allTags.map((tag) => (
              <button
                type="button"
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="text-sm px-3 py-1.5 bg-[#1e1e1e] text-neutral-400 rounded-md border border-[#282828]"
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </section>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-medium text-neutral-400">
          {searchQuery ? (
            <>
              Found <span className="text-white">{filteredBlogs.length}</span>{" "}
              {filteredBlogs.length === 1 ? "article" : "articles"}
            </>
          ) : (
            <>
              All articles{" "}
              <span className="text-neutral-500">({blogsData.length})</span>
            </>
          )}
        </h2>
      </div>

      <div className="space-y-4">
        {filteredBlogs.map((blog, index) => (
          <div
            key={blog.slug}
            className="animate-in fade-in slide-in-from-bottom-4"
            style={{
              animationDelay: `${index * 50}ms`,
              animationFillMode: "both",
            }}
          >
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <div className="text-center py-16">
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-md bg-[#1e1e1e] border border-[#282828] flex items-center justify-center">
              <FaSearch className="text-neutral-500" size={24} />
            </div>
            <h2 className="text-xl font-semibold text-neutral-300">
              No articles found
            </h2>
            <p className="text-neutral-500 max-w-sm mx-auto">
              No articles match &quot;{searchQuery}&quot;. Try searching for
              something else.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-[#c15f3c] text-sm font-medium"
            >
              Clear search
            </button>
          </div>
        </div>
      )}

      {blogsData.length === 0 && !searchQuery && (
        <div className="text-center py-16">
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-md bg-[#1e1e1e] border border-[#282828] flex items-center justify-center">
              <FaPen className="text-neutral-500" size={24} />
            </div>
            <h2 className="text-xl font-semibold text-neutral-300">
              No blogs yet
            </h2>
            <p className="text-neutral-500">
              I&apos;m working on some great content. Check back soon!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

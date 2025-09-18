import { Metadata } from "next";
import Link from "next/link";
import { profileData } from "@/data/Data";
import BlogCard from "@/components/BlogCard";
import { FaArrowLeft } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Blogs - Priyanshu Chahar",
  description:
    "Technical blogs and articles about software development, AI, and programming.",
};

export default function BlogsPage() {
  const { blogs } = profileData;

  return (
    <div className="max-w-2xl mx-auto px-3 py-10 space-y-10">
      <div className="space-y-8">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-base text-neutral-400 hover:text-red-400 transition-colors"
          >
            <FaArrowLeft /> Back to Home
          </Link>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Blogs</h1>
            <p className="text-neutral-400 mt-2">
              Technical articles about software development, AI, and
              programming.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-16">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-neutral-400">
                No blogs yet
              </h2>
              <p className="text-neutral-500">
                I'm working on some great content. Check back soon!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import blogsData from "@/data/Data";
import { FaDiamond, FaArrowLeft, FaCalendar, FaClock } from "react-icons/fa6";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Badge from "@/components/Badge";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} - Priyanshu Chahar`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.publishedAt,
      authors: ["Priyanshu Chahar"],
      tags: blog.tags,
      images: [
        {
          url: "https://priyanxhu.me/og-image.png",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      creator: "@unsafezero",
      images: ["https://priyanxhu.me/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  let content = "";
  try {
    const filePath = path.join(process.cwd(), "data", "blogs", `${slug}.md`);
    content = await fs.readFile(filePath, "utf8");
  } catch (error) {
    console.error("Error reading blog file:", error);
    notFound();
  }

  const currentIndex = blogsData.findIndex((b) => b.slug === slug);
  const prevBlog =
    currentIndex < blogsData.length - 1 ? blogsData[currentIndex + 1] : null;
  const nextBlog = currentIndex > 0 ? blogsData[currentIndex - 1] : null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-3 py-10">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-400"
        >
          <FaArrowLeft size={12} />
          <span>Back to all articles</span>
        </Link>
      </div>

      <header className="space-y-6 pb-8 border-b border-[#282828]">
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <Badge key={tag} item={tag} />
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {blog.title}
        </h1>

        <p className="text-lg text-neutral-400 leading-relaxed">
          {blog.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-2 text-neutral-400">
            <FaCalendar size={12} className="text-neutral-500" />
            <time dateTime={blog.publishedAt}>
              {formatDate(blog.publishedAt)}
            </time>
          </div>
          <FaDiamond className="text-[8px] text-neutral-600" />
          <div className="flex items-center gap-2 text-neutral-400">
            <FaClock size={12} className="text-neutral-500" />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </header>

      <article className="py-10">
        <div className="prose prose-invert max-w-none">
          <MarkdownRenderer content={content} />
        </div>
      </article>

      <div className="border-t border-[#282828] py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-neutral-400">
              Enjoyed this article? Share it with others.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                blog.title,
              )}&url=${encodeURIComponent(
                `https://blogs.priyanxhu.me/${blog.slug}`,
              )}&via=unsafezero`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e1e1e] border border-[#282828] rounded-lg text-sm text-neutral-300"
            >
              <FaXTwitter size={14} />
              <span>Tweet</span>
            </Link>
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                `https://blogs.priyanxhu.me/${blog.slug}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e1e1e] border border-[#282828] rounded-lg text-sm text-neutral-300"
            >
              <FaLinkedinIn size={14} />
              <span>Share</span>
            </Link>
          </div>
        </div>
      </div>

      {(prevBlog || nextBlog) && (
        <div className="border-t border-[#282828] pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevBlog ? (
              <Link
                href={`/${prevBlog.slug}`}
                className="p-4 rounded-lg border border-[#282828] bg-[#1a1a1a]"
              >
                <span className="text-xs text-neutral-500 uppercase tracking-wide">
                  Previous
                </span>
                <p className="mt-2 text-sm font-medium text-neutral-300 line-clamp-2">
                  {prevBlog.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextBlog ? (
              <Link
                href={`/${nextBlog.slug}`}
                className="p-4 rounded-lg border border-[#282828] bg-[#1a1a1a] text-right"
              >
                <span className="text-xs text-neutral-500 uppercase tracking-wide">
                  Next
                </span>
                <p className="mt-2 text-sm font-medium text-neutral-300 line-clamp-2">
                  {nextBlog.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      )}

      <div className="pt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-400"
        >
          <FaArrowLeft size={12} />
          <span>View all articles</span>
        </Link>
      </div>
    </div>
  );
}

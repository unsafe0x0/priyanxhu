import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { profileData } from "@/data/Data";
import { FaDiamond } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Badge from "@/components/Badge";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return profileData.blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = profileData.blogs.find((b) => b.slug === slug);

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
  const blog = profileData.blogs.find((b) => b.slug === slug);

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-3 py-10 space-y-10">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1 text-base text-neutral-400 hover:text-red-400 transition-colors"
            >
              <FaArrowLeft className="inline" />
              Back to Blogs
            </Link>
            <Link
              href="/"
              className="text-base text-neutral-400 hover:text-red-400 transition-colors"
            >
              Home
            </Link>
          </div>
          <header className="space-y-4 border-b border-[#282828] pb-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight leading-tight">
                {blog.title}
              </h1>
              <p className="text-base text-neutral-400 leading-relaxed">
                {blog.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
              <time dateTime={blog.publishedAt}>
                {formatDate(blog.publishedAt)}
              </time>
              <FaDiamond className="inline text-xs" />
              <span>{blog.readTime}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <Badge key={tag} item={tag} />
              ))}
            </div>
          </header>

          <article className="prose prose-invert max-w-none">
            <MarkdownRenderer content={content} />
          </article>

          <footer className="border-t border-[#282828] pt-8">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <p className="text-neutral-400">
                  Thanks for reading! If you found this helpful, feel free to
                  share it.
                </p>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <Link
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      blog.title,
                    )}&url=${encodeURIComponent(
                      `https://priyanxhu.me/blogs/${blog.slug}`,
                    )}&via=unsafezero`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:underline underline-offset-4 transition-colors"
                  >
                    Share on Twitter
                  </Link>
                  <FaDiamond className="inline text-xs text-neutral-500" />
                  <Link
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      `https://priyanxhu.me/blogs/${blog.slug}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:underline underline-offset-4 transition-colors"
                  >
                    Share on LinkedIn
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-1 text-base text-neutral-400 hover:text-red-400 transition-colors"
                >
                  <FaArrowLeft />
                  Read more articles
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

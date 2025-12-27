"use client";

import hljs from "highlight.js";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
  isStreaming?: boolean;
}

function copyText(text: string) {
  if (navigator?.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Fallback copy failed", err);
  }
  document.body.removeChild(textarea);
  return Promise.resolve();
}

const InlineCode = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) => (
  <code
    className="bg-[#252525] px-1.5 py-0.5 text-sm text-[#c15f3c] font-mono border border-[#303030] rounded select-none"
    {...props}
  >
    {children}
  </code>
);

function CodeBlock({ children }: { children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const getLanguage = () => {
    if (React.isValidElement(children)) {
      const codeElement = children as React.ReactElement<{
        className?: string;
      }>;
      const match = /language-(\w+)/.exec(codeElement.props.className || "");
      if (match) {
        const lang = match[1].toLowerCase();
        const languageMap: Record<string, string> = {
          js: "JavaScript",
          javascript: "JavaScript",
          ts: "TypeScript",
          typescript: "TypeScript",
          py: "Python",
          python: "Python",
          cpp: "C++",
          c: "C",
          java: "Java",
          html: "HTML",
          css: "CSS",
          scss: "SCSS",
          json: "JSON",
          bash: "Bash",
          shell: "Shell",
          sql: "SQL",
          rust: "Rust",
          go: "Go",
          php: "PHP",
          ruby: "Ruby",
          swift: "Swift",
          kotlin: "Kotlin",
          scala: "Scala",
          r: "R",
          matlab: "MATLAB",
          yaml: "YAML",
          yml: "YAML",
          xml: "XML",
          dockerfile: "Dockerfile",
          markdown: "Markdown",
          md: "Markdown",
          plaintext: "Text",
          txt: "Text",
        };
        return languageMap[lang] || lang.toUpperCase();
      }
    }
    return "CODE";
  };

  const handleCopy = () => {
    const code = preRef.current?.textContent ?? "";
    if (!code) return;
    copyText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative my-6 w-full max-w-full border border-[#282828] bg-[#1a1a1a] overflow-hidden rounded-lg">
      <div className="flex justify-between items-center bg-[#1e1e1e] px-4 py-2.5 border-b border-[#282828]">
        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
          {getLanguage()}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded ${
            copied
              ? "bg-green-500/10 text-green-400 border border-green-500/20"
              : "bg-[#252525] text-neutral-400 border border-[#303030]"
          }`}
        >
          {copied ? (
            <>
              <IoMdCheckmark size={12} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <MdContentCopy size={12} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <pre
          ref={preRef}
          className="p-4 text-sm leading-relaxed w-full text-neutral-200 whitespace-pre overflow-x-auto bg-[#1a1a1a]"
        >
          {children}
        </pre>
      </div>
    </div>
  );
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  useEffect(() => {
    hljs.configure({
      languages: [
        "javascript",
        "typescript",
        "python",
        "java",
        "cpp",
        "c",
        "html",
        "css",
        "scss",
        "json",
        "bash",
        "shell",
        "sql",
        "rust",
        "go",
        "php",
        "ruby",
        "swift",
        "kotlin",
        "scala",
        "r",
        "matlab",
        "yaml",
        "xml",
        "dockerfile",
        "markdown",
        "plaintext",
      ],
    });
  }, []);

  return (
    <div className="prose prose-invert max-w-none w-full min-w-0 overflow-hidden">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            if (!match) return <InlineCode {...props}>{children}</InlineCode>;
            return (
              <code
                className={`${className} block text-neutral-200 whitespace-pre`}
                style={{ background: "transparent" }}
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-white mt-10 mb-4 first:mt-0 leading-tight tracking-tight">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-white mt-10 mb-4 first:mt-0 leading-tight tracking-tight border-b border-[#282828] pb-3">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-white mt-8 mb-3 first:mt-0 leading-tight">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-lg font-semibold text-white mt-6 mb-2 first:mt-0 leading-tight">
              {children}
            </h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-base font-semibold text-white mt-5 mb-2 first:mt-0 leading-tight">
              {children}
            </h5>
          ),
          h6: ({ children }) => (
            <h6 className="text-sm font-semibold text-neutral-300 mt-4 mb-2 first:mt-0 leading-tight uppercase tracking-wide">
              {children}
            </h6>
          ),
          p: ({ node, children }) => {
            if (
              node?.children.some(
                (child) => "tagName" in child && child.tagName === "img",
              )
            ) {
              return <>{children}</>;
            }
            return (
              <p className="mb-5 text-neutral-300 leading-7 text-base wrap-break-word">
                {children}
              </p>
            );
          },
          ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-5 space-y-2 text-neutral-300 marker:text-neutral-500">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 mb-5 space-y-2 text-neutral-300 marker:text-neutral-500">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-neutral-300 leading-7 wrap-break-word pl-1">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-3 border-[#c15f3c] bg-[#c15f3c]/5 pl-5 pr-4 py-4 my-6 rounded-r-lg">
              <div className="text-neutral-300 italic [&>p]:mb-0">
                {children}
              </div>
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="my-6 w-full max-w-full">
              <div className="overflow-x-auto rounded-lg border border-[#282828]">
                <table className="border-collapse bg-[#1a1a1a] w-full min-w-full">
                  {children}
                </table>
              </div>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-[#1e1e1e] border-b border-[#282828]">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-[#282828]">{children}</tbody>
          ),
          tr: ({ children }) => <tr>{children}</tr>,
          th: ({ children }) => (
            <th className="px-4 py-3 text-left font-semibold text-white text-sm">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-neutral-300 text-sm">{children}</td>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-[#c15f3c] underline decoration-[#c15f3c]/30 underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-white">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-neutral-200">{children}</em>
          ),
          hr: () => <hr className="border-t border-[#282828] my-10" />,
          img: ({ src, alt }) => {
            if (!src || typeof src !== "string") return null;
            return (
              <figure className="my-8">
                <Image
                  src={src as string}
                  alt={alt || ""}
                  width={800}
                  height={450}
                  className="max-w-full h-auto rounded-lg border border-[#282828]"
                  unoptimized
                />
                {alt && (
                  <figcaption className="mt-3 text-center text-sm text-neutral-500">
                    {alt}
                  </figcaption>
                )}
              </figure>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

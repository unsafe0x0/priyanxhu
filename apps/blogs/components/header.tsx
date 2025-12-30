"use client";

import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#282828] bg-[#161616]/80 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-3">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-lg font-semibold text-white">
            priyanxhu
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              href="https://priyanxhu.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400"
            >
              Portfolio
            </Link>
            <div className="h-4 w-px bg-[#282828]" />
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/unsafe0x0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </Link>
              <Link
                href="https://twitter.com/unsafezero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400"
                aria-label="Twitter"
              >
                <FaXTwitter size={18} />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

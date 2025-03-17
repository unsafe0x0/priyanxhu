import Link from "next/link";
import React from "react";
import { RiTerminalLine } from "react-icons/ri";

export const Navbar: React.FC = () => {
  return (
    <header className="flex justify-center items-center w-full sticky top-0 bg-zinc-900 backdrop-blur-[100px] p-3">
      <nav className="flex justify-between items-center w-[95vw] md:w-[80vw] lg:w-[60vw] xl:w-[50vw]">
        <Link href="/" passHref>
          <p className="text-2xl font-medium text-zinc-100 cursor-pointer">
            <RiTerminalLine />
          </p>
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href="/blogs" passHref>
            <p className="text-md font-medium text-zinc-100 hover:underline underline-offset-2 decoration-1 cursor-pointer">
              Blogs
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

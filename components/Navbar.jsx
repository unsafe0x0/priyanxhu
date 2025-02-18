import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center w-full font-[family-name:var(--font-secondary)] p-2">
      <div className="flex justify-between items-center w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] bg-zinc-900 backdrop-blur-3xl rounded-xl px-5 py-2 fixed top-2 z-50">
        <Link href="/">
          <span className="text-xl font-medium italic text-slate-300 font-[family-name:var(--font-primary)]">Priyanshu</span>
        </Link>
        <Link href="/blogs">
          <span className="text-md font-medium text-slate-300 hover:text-cyan-500 transition-colors duration-300 ease-in-out  underline underline-offset-4 decoration-dashed">
            Blogs
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

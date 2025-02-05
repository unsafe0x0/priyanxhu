import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-center items-center w-full bg-zinc-950 py-2 text-slate-200 sticky top-0 left-0 z-50 bg-opacity-70 backdrop-blur-xs">
      <div className="flex justify-between items-center w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 gap-2">
        <Link href="/" className="text-lg md:text-xl font-medium">
          <p>Priyanshu</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

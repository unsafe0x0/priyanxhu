import Link from "next/link";
import React from "react";
import { RiTerminalLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <header className="flex justify-center items-center w-full sticky top-0 bg-zinc-900 backdrop-blur-[100px] p-3">
      <nav className="flex justify-between items-center w-[95vw] md:w-[80vw] lg:w-[60vw] xl:w-[50vw]">
        <Link href="/" className="text-2xl font-medium text-zinc-100">
          <RiTerminalLine />
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href={"/blogs"}>
            <p className="text-md font-medium text-zinc-100 hover:underline underline-offset-2 decoration-1">
              Blogs
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

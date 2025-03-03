import React from "react";
import blogs from "@/data/Blogs";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";

const Blogs = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] px-2 md:px-0 gap-4">
        <h2 className="text-3xl font-normal text-zinc-100 font-primary">
          Writings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch justify-start w-full">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start gap-2 p-3 md:p-4 rounded-md bg-zinc-950 border  border-zinc-700 hover:bg-zinc-900 transition-colors duration-300 ease-in-out overflow-hidden"
            >
              <h2 className="text-xl font-normal text-zinc-200 z-10">
                {blog.name}
              </h2>
              <p className="text-md font-normal text-zinc-300">{blog.desc}</p>
              <p className="text-sm font-normal text-zinc-300 self-end">
                {blog.date}
              </p>
              <button className="px-3 py-1.5 rounded-md bg-white hover:bg-zinc-100 text-zinc-800 text-md font-medium transition-all duration-300 ease-in-out border  border-zinc-7000 cursor-pointer">
                <Link
                  href={blog.url}
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  <span>Read More</span>
                  <RiExternalLinkFill size={24} />
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

"use client";

import React from "react";
import { blogs } from "@/data/Blogs";
import Link from "next/link";
import { RiExternalLinkFill } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";

interface Blog {
  name: string;
  desc: string;
  date: string;
  url: string;
}

export const Blogs: React.FC = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-[95vw] md:w-[80vw] lg:w-[60vw] xl:w-[50vw] gap-4">
        <h2 className="text-3xl font-medium text-zinc-100">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch justify-start w-full">
          {blogs.map((blog: Blog, index: number) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start gap-2 p-3 md:p-4 rounded-md bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition-colors duration-300 ease-in-out overflow-hidden"
            >
              <h2 className="text-xl font-medium text-zinc-200 z-10">
                {blog.name}
              </h2>
              <p className="text-md font-normal text-zinc-300">{blog.desc}</p>
              <p className="text-md font-normal text-zinc-300 flex items-center gap-1">
                <CiCalendarDate className="text-md" /> {blog.date}
              </p>
              <button className="px-3 py-1.5 rounded-md bg-white hover:bg-zinc-300 text-zinc-800 text-sm font-medium transition-all duration-300 ease-in-out border border-zinc-700 cursor-pointer">
                <Link
                  href={blog.url}
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  <span>Read More</span>
                  <RiExternalLinkFill className="text-lg" />
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

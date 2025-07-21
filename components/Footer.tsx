"use client";

import React from "react";
import { GiMineralHeart } from "react-icons/gi";

import FadeInOnScroll from "./FadeInScroll";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full text-neutral-800 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900">
      <div className="flex flex-col justify-center items-center w-full px-3 py-2 border-t border-neutral-200 dark:border-neutral-700/50 md:w-4xl">
        <FadeInOnScroll>
          <p className="text-md font-normal flex flex-wrap items-center gap-1 justify-center">
            Made with <GiMineralHeart className="text-red-500 text-lg" />{" "}
            by Priyanshu
          </p>
        </FadeInOnScroll>
      </div>
    </footer>
  );
}

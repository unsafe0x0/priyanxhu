"use client";

import React from "react";
import { GiMineralHeart } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full px-3 py-2 border-t border-[#353535] md:w-4xl">
        <p className="text-md font-normal flex flex-wrap items-center gap-1">
          Made with <GiMineralHeart className="text-[#cc241d] text-lg" /> by
          Priyanshu
        </p>
      </div>
    </footer>
  );
}

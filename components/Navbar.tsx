"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [currentTime, setCurrentTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0") +
        ":" +
        now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(formattedTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="flex justify-center items-center w-full fixed top-0 z-10 text-neutral-800 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900">
      <div className="flex flex-row justify-between items-center w-full px-3 py-2 max-w-4xl border-b border-neutral-200 dark:border-neutral-700/50">
        <div>
          <p className="text-md font-normal">{currentTime}</p>
        </div>
        <button
          onClick={toggleTheme}
          className="text-2xl p-1.5 rounded-md border border-neutral-200 dark:border-neutral-700/50"
        >
          {mounted && (theme === "dark" ? <BiMoon /> : <BsSun />)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

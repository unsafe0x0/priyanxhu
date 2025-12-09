"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="flex justify-between items-center bg-card/10 backdrop-blur-xs p-2 border-b border-border sticky top-0 z-50 max-w-4xl mx-auto">
      <h1 className="text-lg font-normal">{`~/priyanshu`}</h1>
      <button
        className=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {mounted ? (
          theme === "light" ? (
            <LuMoon size={24} />
          ) : (
            <LuSun size={24} />
          )
        ) : (
          <div style={{ width: 24, height: 24 }} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;

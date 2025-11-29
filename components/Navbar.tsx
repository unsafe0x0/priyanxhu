"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [time, setTime] = useState<string>("00:00:00");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="flex justify-between items-center bg-card/10 backdrop-blur-xs p-2 border-b border-border sticky top-0 z-50 max-w-4xl mx-auto">
      <h1 className="text-lg font-semibold">{time}</h1>
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

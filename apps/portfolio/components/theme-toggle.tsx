"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="text-xs uppercase tracking-widest text-muted-foreground">
        [LOADING]
      </div>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors cursor-pointer border border-transparent hover:border-primary px-2 py-1"
    >
      [{theme === "light" ? "Light" : "Dark"}]
    </button>
  );
}

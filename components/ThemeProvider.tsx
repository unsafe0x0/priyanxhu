"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
  enableSystem?: boolean;
}

export default function ThemeProvider({
  children,
  defaultTheme = "dark",
  enableSystem = false,
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      storageKey="halo-theme"
      forcedTheme={undefined}
      enableColorScheme={false}
    >
      {children}
    </NextThemesProvider>
  );
}

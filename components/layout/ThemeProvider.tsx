"use client";

import * as React from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDarkTheme = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", useDarkTheme);
  }, []);

  return <>{children}</>;
}

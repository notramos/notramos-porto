"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/retroui/Button";

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const shouldUseDark = storedTheme
      ? storedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setDarkMode(shouldUseDark);
  }, []);

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    document.documentElement.classList.toggle("dark", nextMode);
    window.localStorage.setItem("theme", nextMode ? "dark" : "light");
    setDarkMode(nextMode);
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={darkMode ? "Gunakan tema terang" : "Gunakan tema gelap"}
      aria-pressed={darkMode}
      onClick={toggleDarkMode}
      className="size-10 border border-[var(--border)] bg-[var(--surface)] text-foreground shadow-none"
    >
      {darkMode ? <Sun aria-hidden="true" className="size-4" /> : <Moon aria-hidden="true" className="size-4" />}
    </Button>
  );
}

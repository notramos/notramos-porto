"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/retroui/Button";

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setDarkMode(isDark)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    
    if (newMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleDarkMode}
      className="bg-transparent border-2 border-[var(--border-color)] hover:bg-[var(--primary)] dark:hover:bg-[var(--primary)] transition-all duration-300"
    >
      {darkMode ? (
        <Sun className="h-5 w-5 text-[var(--text-primary)]" />
      ) : (
        <Moon className="h-5 w-5 text-[var(--text-primary)]" />
      )}
      <span className="sr-only">Toggle dark mode</span>
    </Button>
  )
}

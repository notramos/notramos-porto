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
      className="bg-transparent border-2 border-black dark:border-white hover:bg-[#ffdb33] dark:hover:bg-[#ffdb33] transition-all duration-300"
    >
      {darkMode ? (
        <Sun className="h-5 w-5 text-black" />
      ) : (
        <Moon className="h-5 w-5 text-black dark:text-white" />
      )}
      <span className="sr-only">Toggle dark mode</span>
    </Button>
  )
}
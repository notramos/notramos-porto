"use client"

import * as React from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return <>{children}</>
}
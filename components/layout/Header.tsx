"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/retroui/Button"
import { DarkModeToggle } from "@/components/layout/DarkModeToogle"
import { MobileMenu } from "@/components/layout/MobileMenu"

export function Header() {
  // Navigation items
  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Stats", href: "#stats" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#1a1a1a] border-b-2 border-black dark:border-[#3a3a3a]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-head text-black dark:text-white border-2 border-black dark:border-white px-3 py-1 hover:bg-[#ffdb33] dark:hover:bg-[#ffdb33] hover:text-black dark:hover:text-black transition-all duration-300"
          >
            SERGIO
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <Button 
                key={item.href} 
                asChild 
                variant="ghost" 
                className="text-black dark:text-white font-bold border-none hover:bg-[#ffdb33] hover:text-black dark:hover:text-black transition-all duration-300"
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </nav>
          
          {/* Header Actions */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <DarkModeToggle />
            
            {/* Hire Me Button */}
            <Button 
              asChild 
              className="bg-[#ffdb33] text-black border-2 border-black hover:bg-[#ffcc00] font-bold hidden md:inline-flex transition-all duration-300"
            >
              <Link href="#contact">Hire Me</Link>
            </Button>
            
            {/* Mobile Menu */}
            <MobileMenu navItems={navItems} />
          </div>
        </div>
      </div>
    </header>
  )
}
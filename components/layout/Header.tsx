"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/retroui/Button"
import { DarkModeToggle } from "@/components/layout/DarkModeToogle"
import { MobileMenu } from "@/components/layout/MobileMenu"
import { navigation } from "@/app/config/site"
import { personalInfo } from "@/app/config/personal"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--card)] border-b-2 border-[var(--border-color)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-head text-[var(--text-primary)] border-2 border-[var(--border-color)] px-3 py-1 hover:bg-[var(--primary)] hover:text-black transition-all duration-300"
          >
            {personalInfo.name.toUpperCase()}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2">
            {navigation.map((item) => (
              <Button 
                key={item.href} 
                asChild 
                variant="ghost" 
                className="text-[var(--text-primary)] font-bold border-none hover:bg-[var(--primary)] hover:text-black transition-all duration-300"
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </nav>
          
          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <DarkModeToggle />
            <Button 
              asChild 
              className="bg-[var(--primary)] text-black border-2 border-[var(--border-color)] hover:bg-[var(--primary-hover)] font-bold hidden md:inline-flex transition-all duration-300"
            >
              <Link href="#contact">Hire Me</Link>
            </Button>
            <MobileMenu navItems={navigation} />
          </div>
        </div>
      </div>
    </header>
  )
}

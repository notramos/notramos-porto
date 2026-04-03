"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/retroui/Button";
import { Drawer } from "@/components/retroui/Drawer";
import { DarkModeToggle } from "@/components/layout/DarkModeToogle";

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden bg-transparent border-2 border-[var(--border-color)] hover:bg-[var(--primary)] transition-all duration-300 text-[var(--text-primary)]"
        >
          <span className="text-2xl">☰</span>
        </Button>
      </Drawer.Trigger>
      <Drawer.Content direction="right">
        <Drawer.Header className="border-b-2 border-[var(--border-color)]">
          <Drawer.Title className="font-head text-2xl text-[var(--text-primary)]">Menu</Drawer.Title>
        </Drawer.Header>
        <div className="p-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className="justify-start text-lg font-bold border-none hover:bg-[var(--primary)] hover:text-black text-[var(--text-primary)]"
              onClick={() => setOpen(false)}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <div className="pt-4 border-t-2 border-[var(--border-color)] flex items-center gap-3">
            <DarkModeToggle />
            <Button
              asChild
              className="flex-1 bg-[var(--primary)] text-black border-2 border-[var(--border-color)] hover:bg-[var(--primary-hover)] font-bold"
              onClick={() => setOpen(false)}
            >
              <Link href="#contact">Hire Me</Link>
            </Button>
          </div>
        </div>
        <Drawer.Close asChild>
          <Button
            variant="outline"
            className="absolute top-4 right-4 border-2 border-[var(--border-color)] text-[var(--text-primary)]"
          >
            ✕
          </Button>
        </Drawer.Close>
      </Drawer.Content>
    </Drawer>
  );
}

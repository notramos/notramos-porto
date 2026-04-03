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
          className="md:hidden bg-transparent border-2 border-black dark:border-white hover:bg-[#ffdb33] dark:hover:bg-[#ffdb33] transition-all duration-300"
        >
          <span className="text-2xl">☰</span>
        </Button>
      </Drawer.Trigger>
      <Drawer.Content direction="right">
        <Drawer.Header className="border-b-2 border-black">
          <Drawer.Title className="font-head text-2xl">Menu</Drawer.Title>
        </Drawer.Header>
        <div className="p-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className="justify-start text-lg font-bold border-none hover:bg-[#ffdb33] hover:text-black"
              onClick={() => setOpen(false)}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <div className="pt-4 border-t-2 border-black flex items-center gap-3">
            <DarkModeToggle />
            <Button
              asChild
              className="flex-1 bg-[#ffdb33] text-black border-2 border-black hover:bg-[#ffcc00] font-bold"
              onClick={() => setOpen(false)}
            >
              <Link href="#contact">Hire Me</Link>
            </Button>
          </div>
        </div>
        <Drawer.Close asChild>
          <Button
            variant="outline"
            className="absolute top-4 right-4 border-2 border-black"
          >
            ✕
          </Button>
        </Drawer.Close>
      </Drawer.Content>
    </Drawer>
  );
}

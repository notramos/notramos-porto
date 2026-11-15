"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/retroui/Button";
import { Drawer } from "@/components/retroui/Drawer";

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
          type="button"
          variant="outline"
          size="icon"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className="size-10 border border-[var(--border)] bg-[var(--surface)] text-foreground shadow-none"
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </Button>
      </Drawer.Trigger>
      <Drawer.Content direction="right" className="border-l border-[var(--border)] bg-[var(--background)] text-foreground">
        <Drawer.Header className="border-b border-[var(--border)]">
          <Drawer.Title className="font-semibold">Menu</Drawer.Title>
        </Drawer.Header>
        <nav aria-label="Navigasi seluler" className="flex flex-col gap-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-[var(--border)]/20 px-2 py-4 text-lg font-medium hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Drawer.Content>
    </Drawer>
  );
}

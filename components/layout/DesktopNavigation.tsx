"use client";

import * as React from "react";
import Link from "next/link";
import type { NavigationItem } from "@/app/config/site";

interface DesktopNavigationProps {
  navItems: NavigationItem[];
}

export function DesktopNavigation({ navItems }: DesktopNavigationProps) {
  const [activeHref, setActiveHref] = React.useState("");

  React.useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveHref("#" + visibleSection.target.id);
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems]);

  return (
    <nav aria-label="Navigasi utama" className="hidden items-center gap-1 md:flex">
      {navItems.map((item) => {
        const isActive = activeHref === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "location" : undefined}
            onClick={() => setActiveHref(item.href)}
            className="relative min-h-11 px-3 text-sm text-[var(--muted-foreground)] transition-colors hover:text-foreground active:translate-y-px"
          >
            <span className="flex h-11 items-center">{item.label}</span>
            <span
              aria-hidden="true"
              className={"absolute inset-x-3 bottom-1 h-0.5 origin-left bg-[var(--accent)] transition-transform " + (isActive ? "scale-x-100" : "scale-x-0")}
            />
          </Link>
        );
      })}
    </nav>
  );
}

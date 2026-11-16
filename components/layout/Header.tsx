import Link from "next/link";
import { navigation } from "@/app/config/site";
import { personalInfo } from "@/app/config/personal";
import { DarkModeToggle } from "@/components/layout/DarkModeToogle";
import { DesktopNavigation } from "@/components/layout/DesktopNavigation";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-3 font-semibold tracking-tight active:translate-y-px"
          aria-label={personalInfo.name + ", beranda"}
        >
          <span className="grid size-9 place-items-center border border-[var(--border)] bg-[var(--primary)] text-sm font-bold text-[var(--primary-foreground)]">
            GS
          </span>
          <span className="hidden sm:inline">{personalInfo.name}</span>
          <span className="sm:hidden">Gregorius Sergio</span>
        </Link>

        <DesktopNavigation navItems={navigation} />

        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <div className="md:hidden">
            <MobileMenu navItems={navigation} />
          </div>
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}

import Link from "next/link";
import { ArrowDown, MapPin } from "lucide-react";
import { personalInfo } from "@/app/config/personal";
import { HeroPoster } from "@/components/motion/HeroPoster";

export function Hero() {
  return (
    <section className="scroll-mt-24 overflow-hidden">
      <div className="mx-auto grid min-h-[calc(88vh-4rem)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-20">
        <div className="hero-copy">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            <span className="h-px w-8 bg-[var(--accent)]" />
            Portofolio · Pengembangan web
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-foreground text-balance sm:text-6xl lg:text-7xl">
            Saya membangun sistem web yang memudahkan pekerjaan.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted-foreground)]">
            {personalInfo.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="primary-action inline-flex min-h-12 items-center gap-3 border border-[var(--border)] bg-[var(--primary)] px-5 font-semibold text-[var(--primary-foreground)]"
            >
              Lihat proyek <ArrowDown aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="#contact"
              className="secondary-action inline-flex min-h-12 items-center border-b border-[var(--border)] px-1 font-medium"
            >
              Hubungi saya
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--muted-foreground)]">
            <p className="flex items-center gap-2">
              <MapPin aria-hidden="true" className="size-4" />
              {personalInfo.location}
            </p>
            <p className="flex items-center gap-2">
              <span aria-hidden="true" className="size-2 rounded-full bg-[var(--accent)]" />
              {personalInfo.availability}
            </p>
          </div>
        </div>

        <HeroPoster />
      </div>
      <div className="hero-tech-strip border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--muted-foreground)]">
          <span>TypeScript</span><span>React</span><span>Next.js</span><span>PHP</span><span>PostgreSQL</span>
        </div>
      </div>
    </section>
  );
}

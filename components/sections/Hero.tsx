import Link from "next/link";
import { ArrowDown, MapPin } from "lucide-react";
import { personalInfo } from "@/app/config/personal";

export function Hero() {
  return (
    <section className="scroll-mt-24">
      <div className="mx-auto grid min-h-[calc(88vh-4rem)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-20">
        <div>
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
              className="inline-flex min-h-12 items-center gap-3 border border-[var(--border)] bg-[var(--primary)] px-5 font-semibold text-[var(--primary-foreground)] transition-transform hover:-translate-y-0.5"
            >
              Lihat proyek <ArrowDown aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex min-h-12 items-center border-b border-[var(--border)] px-1 font-medium hover:text-[var(--accent)]"
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

        <div className="relative mx-auto w-full max-w-md">
          <div className="paper-grid relative aspect-[4/5] overflow-hidden border border-[var(--border)] p-5 sm:p-7">
            <div className="absolute -right-10 -top-10 size-44 rounded-full border border-[var(--border)] bg-[var(--primary)] sm:size-56" />
            <div className="absolute right-10 top-16 size-20 rounded-full border border-[var(--border)] bg-[var(--accent)] sm:right-14 sm:top-20 sm:size-24" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-4">
                <span className="border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
                  GS / 01
                </span>
                <span className="text-right text-xs font-medium uppercase leading-5 tracking-[0.12em]">
                  Jakarta<br />Indonesia
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                  {personalInfo.title}
                </p>
                <p className="mt-2 max-w-xs text-4xl font-semibold leading-none tracking-[-0.05em] text-balance sm:text-5xl">
                  {personalInfo.name}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium">
                  <span className="h-px w-8 bg-[var(--accent)]" />
                  Web · Backend · Integrasi
                </div>
              </div>
            </div>
            <span aria-hidden="true" className="absolute bottom-5 right-5 text-xs font-semibold tracking-[0.2em]">PORTOFOLIO</span>
          </div>
          <div aria-hidden="true" className="absolute -bottom-3 -left-3 -z-10 h-full w-full border border-[var(--border)]" />
        </div>
      </div>
      <div className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--muted-foreground)]">
          <span>TypeScript</span><span>React</span><span>Next.js</span><span>PHP</span><span>PostgreSQL</span>
        </div>
      </div>
    </section>
  );
}

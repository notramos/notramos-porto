import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { socialLinks } from "@/app/config/personal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">03 / Kontak</p>
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-balance sm:text-6xl">
            Ada pekerjaan menarik? Mari berbicara.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted-foreground)]">
            Hubungi saya melalui profil GitHub atau LinkedIn.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-3 border border-[var(--border)] bg-[var(--primary)] px-5 font-semibold text-[var(--primary-foreground)] transition-transform hover:-translate-y-0.5">
            <Github aria-hidden="true" className="size-4" />
            GitHub <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-3 border border-[var(--border)] bg-[var(--surface)] px-5 font-semibold transition-transform hover:-translate-y-0.5">
            <Linkedin aria-hidden="true" className="size-4" />
            LinkedIn <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

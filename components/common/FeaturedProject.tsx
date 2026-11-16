import type { Project } from "@/app/data/projects-data";

interface FeaturedProjectProps {
  project: Project;
}

const detailItems = [
  ["Tantangan", "challenge"],
  ["Solusi", "solution"],
  ["Hasil", "impact"],
] as const;

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="mb-5 grid overflow-hidden border border-[var(--border)] bg-[var(--surface)] lg:grid-cols-[0.8fr_1.2fr]">
      <div className="paper-grid flex min-h-72 flex-col justify-between border-b border-[var(--border)] p-6 sm:p-8 lg:min-h-full lg:border-b-0 lg:border-r">
        <div className="flex items-start justify-between gap-4">
          <span className="border border-[var(--border)] bg-[var(--primary)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em]">
            Proyek utama
          </span>
          <span className="text-sm font-semibold">01 / 05</span>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
            {project.type}
          </p>
          <h3 className="max-w-[12ch] text-4xl font-semibold leading-none tracking-[-0.055em] sm:text-5xl">
            {project.title}
          </h3>
          {project.client && (
            <p className="mt-4 text-sm text-[var(--muted-foreground)]">Untuk {project.client}</p>
          )}
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="grid gap-6 border-b border-[var(--border)] pb-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">Peran</p>
            <p className="mt-2 font-semibold">{project.role}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">Teknologi</p>
            <p className="mt-2 font-semibold">{project.tech.join(" · ")}</p>
          </div>
        </div>

        <dl className="divide-y divide-[var(--border)]/25">
          {detailItems.map(([label, key]) => (
            <div key={key} className="grid gap-2 py-5 sm:grid-cols-[7rem_1fr] sm:gap-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">{label}</dt>
              <dd className="max-w-xl text-sm leading-6 text-[var(--muted-foreground)] sm:text-base sm:leading-7">
                {project[key]}
              </dd>
            </div>
          ))}
        </dl>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-11 items-center border-b border-[var(--border)] font-semibold hover:text-[var(--accent)]"
          >
            Lihat kode sumber <span aria-hidden="true" className="ml-2">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

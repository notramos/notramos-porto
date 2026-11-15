import Image from "next/image";
import type { Project } from "@/app/data/projects-data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col border border-[var(--border)] bg-[var(--surface)] transition-transform hover:-translate-y-1">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--border)] bg-[var(--surface-muted)]">
        {project.image ? (
          <Image
            src={project.image}
            alt={"Tampilan " + project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="paper-grid flex h-full items-end justify-between p-5 sm:p-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">Project file</p>
              <p className="mt-2 max-w-[15ch] text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">{project.title}</p>
            </div>
            <span className="border border-[var(--border)] bg-[var(--primary)] px-3 py-2 text-sm font-semibold">
              {String(index).padStart(2, "0")}
            </span>
          </div>
        )}
        <span className="absolute left-4 top-4 border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em]">
          {project.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="max-w-[30ch] text-xl font-semibold leading-snug tracking-[-0.025em] sm:text-2xl">{project.title}</h3>
          {project.client && <p className="text-xs text-[var(--muted-foreground)]">Untuk {project.client}</p>}
        </div>
        <p className="mt-3 max-w-prose text-sm leading-6 text-[var(--muted-foreground)] sm:text-base sm:leading-7">{project.description}</p>

        {project.features && project.features.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Fitur proyek">
            {project.features.slice(0, 3).map((feature) => (
              <li key={feature} className="border border-[var(--border)]/30 px-2.5 py-1 text-xs text-[var(--muted-foreground)]">{feature}</li>
            ))}
          </ul>
        )}

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Teknologi proyek">
          {project.tech.map((tech) => (
            <li key={tech} className="bg-[var(--surface-muted)] px-2.5 py-1 text-xs font-medium">{tech}</li>
          ))}
        </ul>

        {(project.github || project.demo) && (
          <div className="mt-auto flex flex-wrap gap-4 border-t border-[var(--border)]/25 pt-5">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent)]">
                Source code <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline decoration-[var(--accent)] underline-offset-4 hover:text-[var(--accent)]">
                Lihat demo <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

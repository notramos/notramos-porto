import { projects } from "@/app/data/projects-data";
import { ProjectExplorer } from "@/components/common/ProjectExplorer";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex flex-col gap-5 border-b border-[var(--border)] pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">01 / Karya pilihan</p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Proyek</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[var(--muted-foreground)]">
            Pilih kategori untuk melihat karya yang paling relevan, lengkap dengan konteks, kontribusi, dan teknologi yang digunakan.
          </p>
        </div>

        <ProjectExplorer projects={projects} />
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import { projects, type Project } from "@/app/data/projects-data";
import { FeaturedProject } from "@/components/common/FeaturedProject";
import { ProjectCard } from "@/components/common/ProjectCard";

type ProjectFilter = "Semua" | Project["type"];

const filters: ProjectFilter[] = [
  "Semua",
  ...Array.from(new Set(projects.map((project) => project.type))),
];

export function Projects() {
  const [activeFilter, setActiveFilter] = React.useState<ProjectFilter>("Semua");

  const visibleProjects = projects.filter(
    (project) => activeFilter === "Semua" || project.type === activeFilter
  );
  const featuredProject = visibleProjects.find((project) => project.featured);
  const remainingProjects = visibleProjects.filter((project) => !project.featured);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex flex-col gap-5 border-b border-[var(--border)] pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">01 / Karya pilihan</p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Proyek</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[var(--muted-foreground)]">
            Pilihan aplikasi web dan sistem yang saya kerjakan, disertai konteks, kontribusi, dan teknologi yang digunakan.
          </p>
        </div>

        <div className="project-filter mb-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filter proyek">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              className="project-filter-button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
          <p className="sr-only" aria-live="polite">
            Menampilkan {visibleProjects.length} proyek
          </p>
        </div>

        <div key={activeFilter} className="project-filter-result">
          {featuredProject && <FeaturedProject project={featuredProject} />}

          {remainingProjects.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {remainingProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={projects.findIndex((item) => item.id === project.id) + 1}
                />
              ))}
            </div>
          ) : featuredProject ? null : (
            <p className="border border-[var(--border)] bg-[var(--surface)] p-6 text-[var(--muted-foreground)]">
              Belum ada proyek dalam kategori ini.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

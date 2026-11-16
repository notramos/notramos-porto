"use client";

import * as React from "react";
import type { Project } from "@/app/data/projects-data";
import { FeaturedProject } from "@/components/common/FeaturedProject";
import { ProjectCard } from "@/components/common/ProjectCard";

interface ProjectExplorerProps {
  projects: Project[];
}

type ProjectFilter = "All" | Project["type"];

const filterLabels: Record<ProjectFilter, string> = {
  All: "Semua",
  Freelance: "Freelance",
  Academic: "Akademik",
  Personal: "Personal",
};

export function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const [activeFilter, setActiveFilter] = React.useState<ProjectFilter>("All");

  const availableFilters = React.useMemo<ProjectFilter[]>(() => {
    const projectTypes = Array.from(new Set(projects.map((project) => project.type)));
    return ["All", ...projectTypes];
  }, [projects]);

  const visibleProjects = React.useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.type === activeFilter),
    [activeFilter, projects],
  );

  const featuredProject = visibleProjects.find((project) => project.featured);
  const remainingProjects = visibleProjects.filter((project) => !project.featured);

  return (
    <div>
      <div className="mb-7 flex flex-col gap-4 border-b border-[var(--border)] pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter proyek">
          {availableFilters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={"min-h-11 border px-4 text-sm font-semibold transition-[background-color,color,transform] active:translate-y-px " + (isActive ? "border-[var(--border)] bg-[var(--primary)] text-[var(--primary-foreground)]" : "border-[var(--border)]/35 bg-[var(--surface)] text-[var(--muted-foreground)] hover:border-[var(--border)] hover:text-foreground")}
              >
                {filterLabels[filter]}
              </button>
            );
          })}
        </div>
        <p className="text-sm text-[var(--muted-foreground)]" aria-live="polite" aria-atomic="true">
          {visibleProjects.length} proyek ditampilkan
        </p>
      </div>

      <div key={activeFilter} className="project-enter">
        {featuredProject && <FeaturedProject project={featuredProject} />}

        {remainingProjects.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {remainingProjects.map((project) => {
              const originalIndex = projects.findIndex((item) => item.id === project.id);

              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={originalIndex + 1}
                />
              );
            })}
          </div>
        ) : (
          !featuredProject && (
            <p className="border border-[var(--border)] bg-[var(--surface)] p-6 text-[var(--muted-foreground)]">
              Belum ada proyek untuk kategori ini.
            </p>
          )
        )}
      </div>
    </div>
  );
}

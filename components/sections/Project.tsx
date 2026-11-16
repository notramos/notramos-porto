import { projects } from "@/app/data/projects-data";
import { FeaturedProject } from "@/components/common/FeaturedProject";
import { ProjectCard } from "@/components/common/ProjectCard";

export function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const remainingProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 flex flex-col gap-5 border-b border-[var(--border)] pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">01 / Karya pilihan</p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Proyek</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[var(--muted-foreground)]">
            Pilihan aplikasi web dan sistem yang saya kerjakan, disertai konteks, kontribusi, dan teknologi yang digunakan.
          </p>
        </div>

        {featuredProject && <FeaturedProject project={featuredProject} />}

        <div className="grid gap-5 md:grid-cols-2">
          {remainingProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}

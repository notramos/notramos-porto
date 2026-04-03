import { projects } from "@/app/data/projects-data";

interface ProjectStatsProps {
  totalProjects?: number;
  totalClients?: number;
  years?: string;
  techStacks?: number;
}

export function ProjectStats({
  totalProjects = projects.length,
  totalClients = 4,
  years = "2",
  techStacks = 10,
}: ProjectStatsProps) {
  const stats = [
    { value: totalProjects, label: "PROJECTS" },
    { value: totalClients, label: "CLIENTS" },
    { value: years, label: "YEARS" },
    { value: `${techStacks}+`, label: "TECH STACKS" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white border-2 border-black p-6 text-center"
        >
          <div className="text-4xl font-bold text-black">{stat.value}</div>
          <div className="text-xs font-bold text-black mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

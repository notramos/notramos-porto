import { Badge } from "@/components/retroui/Badge";
import { Skill } from "@/app/data/stats-data";

interface SkillsSectionProps {
  skills: Skill[];
  category: string;
  icon: string;
  color: string;
}

export function SkillsSection({
  skills,
  category,
  icon,
  color,
}: SkillsSectionProps) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <span className="text-4xl">{icon}</span>
        <h4 className="text-3xl font-bold text-[var(--text-primary)] border-b-2 border-[var(--border-color)] inline-block px-4">
          {category}
        </h4>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="text-center group">
            <div
              className="text-6xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
              style={{ color }}
            >
              {skill.icon}
            </div>
            <div className="text-xl font-bold text-[var(--text-primary)] mb-2">
              {skill.name}
            </div>
            <div className="h-2 bg-[var(--muted)] rounded-none overflow-hidden">
              <div
                className="h-full transition-all duration-1000"
                style={{ width: `${skill.level}%`, backgroundColor: color }}
              />
            </div>
            <div className="text-sm font-bold text-[var(--text-primary)] mt-2">
              {skill.level}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

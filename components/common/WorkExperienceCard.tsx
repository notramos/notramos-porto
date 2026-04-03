import { Badge } from "@/components/retroui/Badge";
import { Card } from "@/components/retroui/Card";

interface WorkExperienceCardProps {
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
  type: string;
  icon: string;
  color?: string;
  side: "left" | "right";
}

export function WorkExperienceCard({
  company,
  position,
  period,
  location,
  description,
  responsibilities,
  achievements,
  skills,
  type,
  icon,
  color = "#ffdb33",
  side = "left"
}: WorkExperienceCardProps) {
  return (
    <div className={`relative ${side === "right" ? "md:ml-auto" : "md:mr-auto"}`}>
      <div className="relative">
        {/* Timeline connector */}
        <div className={`absolute top-0 ${side === "right" ? "left-0" : "right-0"} h-1/2 w-0.5 bg-[var(--border-color)] hidden md:block`} />
        
        {/* Experience Card */}
        <Card className={`border-2 border-[var(--border-color)] hover:shadow-2xl transition-all duration-300 overflow-hidden ${side === "right" ? "md:ml-4" : "md:mr-4"}`}>
          {/* Header Section */}
          <div className="bg-linear-to-r from-white to-[#fae583]/20 border-b-2 border-[var(--border-color)] p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3 flex-1">
                <div style={{ color: color }} className="text-4xl shrink-0">
                  {icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">{company}</h3>
                    <Badge 
                      variant="default" 
                      className="bg-[var(--secondary)] text-[var(--primary)] border-2 border-[var(--border-color)] px-3 py-1 font-bold text-xs"
                    >
                      {type}
                    </Badge>
                  </div>
                  <p className="text-xl font-bold text-[var(--text-primary)]">{position}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm font-bold text-[var(--text-primary)]">
              <span className="flex items-center gap-1">
                <span>📅</span>
                {period}
              </span>
              {location && (
                <span className="flex items-center gap-1">
                  <span>📍</span>
                  {location}
                </span>
              )}
            </div>
          </div>

          {/* Content Section */}
          <Card.Content className="p-6">
            <div className="space-y-5">
              {/* Description */}
              <div>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Responsibilities */}
              {responsibilities.length > 0 && (
                <div>
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                    <span className="text-[#ffdb33]">📋</span>
                    Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-[var(--text-secondary)] flex items-start">
                        <span className="text-[#ffdb33] mr-2 mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Achievements */}
              {achievements.length > 0 && (
                <div>
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                    <span className="text-[#ffdb33]">🏆</span>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-[var(--text-secondary)] flex items-start">
                        <span className="text-[#ffdb33] mr-2 text-lg mt-0.5">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              {skills.length > 0 && (
                <div>
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                    <span className="text-[#ffdb33]">🔧</span>
                    Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        className="bg-[var(--secondary)] text-[var(--primary)] border-2 border-[var(--border-color)] px-3 py-1 font-bold text-xs hover:bg-[var(--primary)] hover:text-black transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
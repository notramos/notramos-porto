"use client";

import { stats, skills, achievements } from "@/app/data/stats-data";
import { StatsCard } from "@/components/common/StatsCard";
import { RadarChart } from "@/components/common/RadarChart";
import { AchievementBadge } from "@/components/common/AchievementBadge";
import { Badge } from "@/components/retroui/Badge";
import { Card } from "@/components/retroui/Card";

export function Stats() {
  const radarStats = [
    { label: "CODE QUALITY", value: 85, icon: "✅" },
    { label: "PROBLEM SOLVING", value: 78, icon: "🧠" },
    { label: "LEARNING SPEED", value: 90, icon: "🚀" },
    { label: "DEBUGGING", value: 72, icon: "🐛" },
    { label: "TEAMWORK", value: 88, icon: "🤝" },
  ];

  const frontendSkills = skills.filter((s) => s.category === "Frontend");
  const backendSkills = skills.filter((s) => s.category === "Backend");
  const databaseSkills = skills.filter((s) => s.category === "Database");
  const devopsSkills = skills.filter((s) => s.category === "DevOps");

  return (
    <section id="stats" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <Badge
              variant="default"
              className="bg-[var(--secondary)] text-[var(--primary)] border-2 border-[var(--border-color)] px-6 py-3 font-bold text-xl"
            >
              <span>📊</span> DEVELOPER STATS
            </Badge>
          </div>
          <h2 className="text-6xl font-head text-[var(--text-primary)] mb-6 border-b-4 border-[var(--border-color)] inline-block px-8 py-3">
            Developer Statistics
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Comprehensive overview of my technical capabilities and professional
            achievements
          </p>
        </div>

        {/* Radar Chart */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-head text-[var(--text-primary)] mb-2">
              Core Competencies
            </h3>
            <p className="text-[var(--text-secondary)]">
              My key strengths as a software developer
            </p>
          </div>

          <div className="flex justify-center">
            <RadarChart
              stats={radarStats}
              size={500}
              maxRadius={180}
              color="#ffdb33"
            />
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-head text-[var(--text-primary)] mb-2">
              Career Metrics
            </h3>
            <p className="text-[var(--text-secondary)]">Key performance indicators</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                label={stat.label}
                value={stat.value}
                icon={stat.icon}
                color={stat.color}
                description={stat.description}
              />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-head text-[var(--text-primary)] mb-4">
              Technical Skills
            </h3>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              My proficiency levels across different technology domains
            </p>
          </div>

          <div className="space-y-16">
            {/* Frontend */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">⚛️</span>
                <h4 className="text-3xl font-bold text-[var(--text-primary)] border-b-2 border-[var(--border-color)] inline-block px-4">
                  Frontend Development
                </h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className="text-6xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ color: "#ffdb33" }}
                    >
                      {skill.icon}
                    </div>
                    <div className="text-xl font-bold text-[var(--text-primary)] mb-2">
                      {skill.name}
                    </div>
                    <div className="h-2 bg-[var(--muted)] rounded-none overflow-hidden">
                      <div
                        className="h-full bg-[var(--primary)] transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-sm font-bold text-[var(--text-primary)] mt-2">
                      {skill.level}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">⚙️</span>
                <h4 className="text-3xl font-bold text-[var(--text-primary)] border-b-2 border-[var(--border-color)] inline-block px-4">
                  Backend Development
                </h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className="text-6xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ color: "#e63946" }}
                    >
                      {skill.icon}
                    </div>
                    <div className="text-xl font-bold text-[var(--text-primary)] mb-2">
                      {skill.name}
                    </div>
                    <div className="h-2 bg-[var(--muted)] rounded-none overflow-hidden">
                      <div
                        className="h-full bg-[#e63946] transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-sm font-bold text-[var(--text-primary)] mt-2">
                      {skill.level}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Database */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">🗄️</span>
                <h4 className="text-3xl font-bold text-[var(--text-primary)] border-b-2 border-[var(--border-color)] inline-block px-4">
                  Database Management
                </h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {databaseSkills.map((skill, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className="text-6xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {skill.icon}
                    </div>
                    <div className="text-xl font-bold text-[var(--text-primary)] mb-2">
                      {skill.name}
                    </div>
                    <div className="h-2 bg-[var(--muted)] rounded-none overflow-hidden">
                      <div
                        className="h-full bg-[var(--text-primary)] transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-sm font-bold text-[var(--text-primary)] mt-2">
                      {skill.level}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">🚀</span>
                <h4 className="text-3xl font-bold text-[var(--text-primary)] border-b-2 border-[var(--border-color)] inline-block px-4">
                  DevOps & Tools
                </h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {devopsSkills.map((skill, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className="text-6xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ color: "var(--accent)" }}
                    >
                      {skill.icon}
                    </div>
                    <div className="text-xl font-bold text-[var(--text-primary)] mb-2">
                      {skill.name}
                    </div>
                    <div className="h-2 bg-[var(--muted)] rounded-none overflow-hidden">
                      <div
                        className="h-full bg-[var(--accent)] transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-sm font-bold text-[var(--text-primary)] mt-2">
                      {skill.level}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-head text-[var(--text-primary)] mb-4">
              Career Achievements
            </h3>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Milestones and accomplishments throughout my development journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementBadge
                key={index}
                title={achievement.title}
                description={achievement.description}
                icon={achievement.icon}
                date={achievement.date}
                color={achievement.color}
              />
            ))}
          </div>
        </div>

        {/* Overall Rating */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto border-4 border-[var(--primary)]">
            <Card.Content className="p-10">
              <div className="flex items-center justify-center gap-6 mb-6">
                <span className="text-8xl">⭐</span>
                <div className="text-center">
                  <h3 className="text-7xl font-bold text-[var(--text-primary)]">4.9/5.0</h3>
                  <p className="text-3xl font-bold text-[var(--text-primary)] mt-2">
                    Overall Developer Rating
                  </p>
                </div>
                <span className="text-8xl">⭐</span>
              </div>

              <div className="flex items-center justify-center gap-4 flex-wrap text-lg">
                <span className="font-bold text-[var(--text-primary)]">Based on</span>
                <span className="bg-[var(--secondary)] text-[var(--primary)] border-2 border-[var(--border-color)] px-6 py-2 font-bold rounded-none">
                  6 Completed Projects
                </span>
                <span className="font-bold text-[var(--text-primary)]">and</span>
                <span className="bg-[var(--secondary)] text-[var(--primary)] border-2 border-[var(--border-color)] px-6 py-2 font-bold rounded-none">
                  4 Satisfied Clients
                </span>
                <span className="font-bold text-[var(--text-primary)]">over</span>
                <span className="bg-[var(--secondary)] text-[var(--primary)] border-2 border-[var(--border-color)] px-6 py-2 font-bold rounded-none">
                  2 Years
                </span>
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </section>
  );
}

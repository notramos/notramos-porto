import { experiences } from "@/app/data/experience-data";
import { WorkExperienceCard } from "@/components/common/WorkExperienceCard";
import { Badge } from "@/components/retroui/Badge";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-block mb-6">
            <Badge
              variant="default"
              className="bg-[var(--secondary)] text-[var(--primary)] border-2 border-[var(--border-color)] px-8 py-4 font-bold text-xl shadow-[4px_4px_0px_0px_var(--border-color)] hover:shadow-[6px_6px_0px_0px_var(--border-color)] transition-all duration-200 hover:-translate-y-1"
            >
              <span className="text-2xl">💼</span> WORK EXPERIENCE
            </Badge>
          </div>

          {/* Title with Highlight */}
          <h2 className="text-5xl md:text-7xl font-head text-[var(--text-primary)] mb-4 relative inline-block">
            <span className="relative z-10">Professional Journey</span>
            <div className="absolute -bottom-2 left-0 w-full h-4 bg-[var(--primary)] -z-10 transform -skew-x-12"></div>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mt-8 leading-relaxed">
            Building innovative solutions and growing through challenging
            projects
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-[var(--primary)] via-[var(--border-color)] to-[var(--primary)] hidden md:block -translate-x-1/2" />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-16 md:mb-20 group">
              {/* Desktop Timeline Dot */}
              <div className="absolute left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20 hidden md:flex">
                <div className="relative">
                  {/* Pulse Animation */}
                  <div className="absolute inset-0 w-12 h-12 rounded-full bg-[var(--primary)] opacity-30 animate-ping" />

                  {/* Dot */}
                  <div className="relative w-12 h-12 rounded-full border-4 border-[var(--border-color)] bg-[var(--card)] flex items-center justify-center shadow-[0_4px_0px_0px_var(--border-color)] group-hover:shadow-[0_6px_0px_0px_var(--border-color)] transition-all duration-200 group-hover:-translate-y-1">
                    <span className="text-xl font-bold text-[var(--text-primary)]">
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Timeline Indicator */}
              <div className="md:hidden absolute left-0 top-0 flex items-center mb-4">
                <div className="w-10 h-10 rounded-full border-2 border-[var(--border-color)] bg-[var(--primary)] flex items-center justify-center shadow-[2px_2px_0px_0px_var(--border-color)]">
                  <span className="text-lg font-bold text-black">
                    {index + 1}
                  </span>
                </div>
                <div className="ml-2 h-0.5 w-8 bg-[var(--border-color)]" />
              </div>

              {/* Experience Card */}
              <div className="md:pl-0">
                <WorkExperienceCard
                  company={exp.company}
                  position={exp.position}
                  period={exp.period}
                  location={exp.location}
                  description={exp.description}
                  responsibilities={exp.responsibilities}
                  achievements={exp.achievements}
                  skills={exp.skills}
                  type={exp.type}
                  icon={exp.icon}
                  color={exp.color}
                  side={index % 2 === 0 ? "left" : "right"}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Career Summary Section */}
        <div className="mt-24">
          <div className="max-w-5xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-10">
              <div className="inline-block relative">
                <h3 className="text-4xl md:text-6xl font-head text-[var(--text-primary)] relative z-10 px-6">
                  Career Highlights
                </h3>
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-[var(--primary)] transform -skew-x-12 -z-10" />
              </div>
            </div>

            {/* Stats Container */}
            <div className="bg-[var(--card)] border-4 border-[var(--border-color)] shadow-[8px_8px_0px_0px_var(--border-color)] p-8 md:p-12 hover:shadow-[12px_12px_0px_0px_var(--border-color)] transition-all duration-300 hover:-translate-y-1">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {/* Stat 1 - Years */}
                <div className="text-center border-2 border-[var(--border-color)] p-6 bg-linear-to-br from-[var(--primary)] to-[#ffd700] hover:scale-105 transition-transform duration-200">
                  <div className="text-5xl md:text-6xl font-bold text-black mb-2 font-head">
                    2+
                  </div>
                  <div className="text-sm md:text-base font-bold text-black uppercase tracking-wider">
                    Years
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] mt-1">Experience</div>
                </div>

                {/* Stat 2 - Positions */}
                <div className="text-center border-2 border-[var(--border-color)] p-6 bg-[var(--card)] hover:scale-105 transition-transform duration-200">
                  <div className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-2 font-head">
                    2
                  </div>
                  <div className="text-sm md:text-base font-bold text-[var(--text-primary)] uppercase tracking-wider">
                    Positions
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] mt-1">Held</div>
                </div>

                {/* Stat 3 - Projects */}
                <div className="text-center border-2 border-[var(--border-color)] p-6 bg-[var(--card)] hover:scale-105 transition-transform duration-200">
                  <div className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-2 font-head">
                    6
                  </div>
                  <div className="text-sm md:text-base font-bold text-[var(--text-primary)] uppercase tracking-wider">
                    Projects
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] mt-1">Completed</div>
                </div>

                {/* Stat 4 - Skills */}
                <div className="text-center border-2 border-[var(--border-color)] p-6 bg-linear-to-br from-[var(--primary)] to-[#ffd700] hover:scale-105 transition-transform duration-200">
                  <div className="text-5xl md:text-6xl font-bold text-black mb-2 font-head">
                    15+
                  </div>
                  <div className="text-sm md:text-base font-bold text-black uppercase tracking-wider">
                    Skills
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] mt-1">Mastered</div>
                </div>
              </div>

              {/* Quote Section */}
              <div className="mt-10 pt-8 border-t-2 border-[var(--border-color)] text-center">
                <p className="text-lg md:text-xl text-[var(--text-secondary)] italic font-medium max-w-2xl mx-auto">
                  "Continuously learning, building, and pushing the boundaries
                  of what's possible with code"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

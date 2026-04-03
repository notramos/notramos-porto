interface CareerStatsProps {
  years: string;
  positions: string;
  projects: string;
  skills: string;
  quote?: string;
}

export function CareerStats({
  years,
  positions,
  projects,
  skills,
  quote = "Continuously learning, building, and pushing the boundaries of what's possible with code",
}: CareerStatsProps) {
  const stats = [
    { value: years, label: "Years", sublabel: "Experience" },
    { value: positions, label: "Positions", sublabel: "Held" },
    { value: projects, label: "Projects", sublabel: "Completed" },
    { value: skills, label: "Skills", sublabel: "Mastered" },
  ];

  return (
    <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`text-center border-2 border-black p-6 ${
              idx % 2 === 0
                ? "bg-linear-to-br from-[#ffdb33] to-[#ffd700]"
                : "bg-linear-to-br from-white to-gray-100"
            } hover:scale-105 transition-transform duration-200`}
          >
            <div className="text-5xl md:text-6xl font-bold text-black mb-2 font-head">
              {stat.value}
            </div>
            <div className="text-sm md:text-base font-bold text-black uppercase tracking-wider">
              {stat.label}
            </div>
            <div className="text-xs text-gray-700 mt-1">{stat.sublabel}</div>
          </div>
        ))}
      </div>

      {quote && (
        <div className="mt-10 pt-8 border-t-2 border-black text-center">
          <p className="text-lg md:text-xl text-gray-700 italic font-medium max-w-2xl mx-auto">
            "{quote}"
          </p>
        </div>
      )}
    </div>
  );
}

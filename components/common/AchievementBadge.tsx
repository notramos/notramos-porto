interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: string;
  date: string;
  color?: string;
}

export function AchievementBadge({
  title,
  description,
  icon,
  date,
  color = "#ffdb33",
}: AchievementBadgeProps) {
  return (
    <div
      className="bg-white border-2 rounded-none p-4 hover:shadow-lg transition-all duration-300 flex items-start gap-3"
      style={{ borderColor: color }}
    >
      <div className="shrink-0" style={{ color: color }}>
        <span className="text-4xl">{icon}</span>
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-lg font-bold text-black">{title}</h4>
          <span
            className="text-xs font-bold px-2 py-0.5 rounded-none"
            style={{ backgroundColor: color, color: "#000" }}
          >
            {date}
          </span>
        </div>

        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: string;
  color?: string;
  description?: string;
}

export function StatsCard({
  label,
  value,
  icon,
  color = "#ffdb33",
  description
}: StatsCardProps) {
  return (
    <div 
      className="bg-white border-4 rounded-none p-6 text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center"
      style={{ borderColor: color }}
    >
      <div className="mb-3" style={{ color: color }}>
        <span className="text-5xl">{icon}</span>
      </div>
      
      <div className="mb-1">
        <span className="text-4xl font-bold" style={{ color: color }}>
          {value}
        </span>
      </div>
      
      <h4 className="text-sm font-bold text-black mb-1">
        {label}
      </h4>
      
      {description && (
        <p className="text-xs text-gray-600 mt-1">
          {description}
        </p>
      )}
    </div>
  );
}
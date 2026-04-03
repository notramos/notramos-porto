interface RadialProgressProps {
  value: number;
  label: string;
  icon: string;
  color?: string;
  size?: number;
}

export function RadialProgress({
  value,
  label,
  icon,
  color = "#ffdb33",
  size = 120,
}: RadialProgressProps) {
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="relative transition-all duration-1000 ease-out"
        style={{ width: size, height: size }}
      >
        {/* Background Circle */}
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e5e5e5"
            strokeWidth="8"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1s ease" }}
          />
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: color }}>
              {icon}
            </div>
            <div className="text-lg font-bold" style={{ color: color }}>
              {value}%
            </div>
          </div>
        </div>
      </div>

      {/* Label */}
      <p className="text-xs font-bold text-black mt-2 text-center max-w-25 line-clamp-2">
        {label}
      </p>
    </div>
  );
}

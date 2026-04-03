import React from 'react';

interface RadarStat {
  label: string;
  value: number;
  icon: string;
}

interface RadarChartProps {
  stats: RadarStat[];
  size?: number;
  maxRadius?: number;
  color?: string;
}

export function RadarChart({
  stats,
  size = 300,
  maxRadius = 100,
  color = "#ffdb33"
}: RadarChartProps) {
  const centerX = size / 2;
  const centerY = size / 2;
  const angleStep = (2 * Math.PI) / stats.length;
  const labelOffset = 30;

  // Calculate points for the polygon
  const points = stats.map((stat, index) => {
    const angle = index * angleStep;
    const radius = (stat.value / 100) * maxRadius;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y };
  });

  // Generate polygon path
  const polygonPoints = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        {/* Background grid lines */}
        {[1, 2, 3, 4].map((level) => (
          <polygon
            key={level}
            points={stats.map((_, index) => {
              const angle = index * angleStep;
              const radius = (level / 4) * maxRadius;
              const x = centerX + radius * Math.cos(angle);
              const y = centerY + radius * Math.sin(angle);
              return `${x},${y}`;
            }).join(' ')}
            fill="none"
            stroke="#e5e5e5"
            strokeWidth="1"
          />
        ))}

        {/* Center to vertices lines */}
        {points.map((point, index) => (
          <line
            key={index}
            x1={centerX}
            y1={centerY}
            x2={point.x}
            y2={point.y}
            stroke="#e5e5e5"
            strokeWidth="1"
          />
        ))}

        {/* Data polygon */}
        <polygon
          points={polygonPoints}
          fill={`${color}33`}
          stroke={color}
          strokeWidth="2"
        />

        {/* Data points */}
        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill={color}
            stroke="white"
            strokeWidth="1"
          />
        ))}

        {/* Labels with icons */}
        {stats.map((stat, index) => {
          const angle = index * angleStep;
          const labelRadius = maxRadius + labelOffset;
          const x = centerX + labelRadius * Math.cos(angle);
          const y = centerY + labelRadius * Math.sin(angle);
          
          return (
            <g key={index} transform={`translate(${x}, ${y})`}>
              <text 
                x="0" 
                y="-10" 
                textAnchor="middle" 
                dominantBaseline="middle"
                className="text-xl"
                style={{ fill: color }}
              >
                {stat.icon}
              </text>
              <text 
                x="0" 
                y="10" 
                textAnchor="middle" 
                dominantBaseline="middle"
                className="text-xs font-bold"
                style={{ fill: '#000' }}
              >
                {stat.label}
              </text>
              <text 
                x="0" 
                y="25" 
                textAnchor="middle" 
                dominantBaseline="middle"
                className="text-sm font-bold"
                style={{ fill: color }}
              >
                {stat.value}%
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
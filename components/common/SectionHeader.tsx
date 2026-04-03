import { Badge } from "@/components/retroui/Badge";

interface SectionHeaderProps {
  badge?: {
    label: string;
    icon?: string;
  };
  title: string;
  subtitle?: string;
  highlight?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  highlight = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {badge && (
        <div className="inline-block mb-6">
          <Badge
            variant="default"
            className="bg-[var(--secondary)] text-[var(--primary)] border-2 border-[var(--border-color)] px-6 py-3 font-bold text-xl"
          >
            {badge.icon && <span>{badge.icon}</span>} {badge.label}
          </Badge>
        </div>
      )}
      <h2 className="text-5xl md:text-7xl font-head text-[var(--text-primary)] mb-6 border-b-4 border-[var(--border-color)] inline-block px-8 py-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}

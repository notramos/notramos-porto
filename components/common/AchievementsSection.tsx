import { AchievementBadge } from "@/components/common/AchievementBadge";
import { Achievement } from "@/app/data/stats-data";

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
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
  );
}

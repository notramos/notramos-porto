import { Card } from "@/components/retroui/Card";
import { personalInfo } from "@/app/config/personal";

export function ProfileCard() {
  return (
    <Card className="max-w-md mx-auto border-2 border-[var(--border-color)] shadow-2xl hover:shadow-xl transition-all duration-300">
      <Card.Header className="p-0 border-b-2 border-[var(--border-color)]">
        <div className="relative w-full h-64 bg-linear-to-br from-[var(--primary)] to-[var(--accent)]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 bg-[var(--secondary)] border-4 border-[var(--primary)] rounded-full flex items-center justify-center">
              <span className="text-6xl font-head text-[var(--primary)]">{personalInfo.name.charAt(0)}</span>
            </div>
          </div>
          <div className="absolute inset-0 border-4 border-[var(--border-color)] rounded-t-lg pointer-events-none" />
        </div>
      </Card.Header>

      <Card.Content className="p-6">
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-3xl font-head text-[var(--text-primary)] mb-2 border-b-2 border-[var(--border-color)] inline-block px-2">
              {personalInfo.name.toUpperCase()}
            </h3>
            <p className="text-lg font-bold text-[var(--text-primary)]">{personalInfo.title}</p>
          </div>

          <div className="bg-[var(--primary)] border-2 border-[var(--border-color)] p-4 rounded-none">
            <p className="text-black text-center font-bold">
              {personalInfo.subtitle}
            </p>
          </div>

          <div className="border-2 border-[var(--border-color)] p-4 bg-[var(--card)]">
            <p className="text-[var(--text-primary)] font-bold text-center">
              📍 {personalInfo.availability}
            </p>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}

export interface Stat {
  label: string;
  value: string | number;
  icon: string;
  color?: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Other";
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  date: string;
  color?: string;
}

export const stats: Stat[] = [
  {
    label: "Projects Completed",
    value: "6",
    icon: "⚽",
    color: "#ffdb33",
    description: "Total projects delivered"
  },
  {
    label: "Happy Clients",
    value: "4",
    icon: "🏆",
    color: "#e63946",
    description: "Satisfied clients"
  },
  {
    label: "Years of Experience",
    value: "2",
    icon: "⏱️",
    color: "#000000",
    description: "In web development"
  },
  {
    label: "Technologies",
    value: "15+",
    icon: "🔧",
    color: "#fae583",
    description: "Tech stacks mastered"
  },
  {
    label: "Code Quality",
    value: "95%",
    icon: "✅",
    color: "#ffdb33",
    description: "Clean code rating"
  },
  {
    label: "Project Success",
    value: "100%",
    icon: "🎯",
    color: "#000000",
    description: "On-time delivery"
  }
];

export const skills: Skill[] = [
  { name: "Next.js", level: 85, category: "Frontend", icon: "⚛️" },
  { name: "React", level: 90, category: "Frontend", icon: "🔴" },
  { name: "TypeScript", level: 80, category: "Frontend", icon: "🔷" },
  { name: "Python", level: 75, category: "Backend", icon: "🐍" },
  { name: "Django", level: 70, category: "Backend", icon: "🎸" },
  { name: "Odoo", level: 65, category: "Backend", icon: "📦" },
  { name: "C#", level: 70, category: "Backend", icon: "🔷" },
  { name: ".NET", level: 65, category: "Backend", icon: ".NET" },
  { name: "Java", level: 60, category: "Backend", icon: "☕" },
  { name: "Spring Boot", level: 55, category: "Backend", icon: "🌿" },
  { name: "PostgreSQL", level: 75, category: "Database", icon: "🐘" },
  { name: "MongoDB", level: 65, category: "Database", icon: "🟢" },
  { name: "Prisma", level: 80, category: "Database", icon: "🔷" },
  { name: "Git", level: 85, category: "DevOps", icon: "🐙" },
  { name: "Linux", level: 70, category: "DevOps", icon: "🐧" },
  { name: "Docker", level: 50, category: "DevOps", icon: "🐳" }
];

export const achievements: Achievement[] = [
  {
    title: "Project Champion",
    description: "Completed 6 projects in 2 years",
    icon: "⭐",
    date: "2024",
    color: "#ffdb33"
  },
  {
    title: "Full Stack Developer",
    description: "Mastered frontend & backend technologies",
    icon: "🔥",
    date: "2024",
    color: "#e63946"
  },
  {
    title: "Client Satisfaction",
    description: "100% client satisfaction rate",
    icon: "💯",
    date: "2024",
    color: "#000000"
  },
  {
    title: "Quick Learner",
    description: "Mastered 15+ technologies",
    icon: "🚀",
    date: "2024",
    color: "#fae583"
  }
];
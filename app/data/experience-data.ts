export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
  type: "Freelance" | "Internship" | "Full-time" | "Part-time";
  icon: string;
  color?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Freelance Developer",
    position: "Full Stack Web Developer",
    period: "Jan 2024 - Present",
    location: "Remote",
    description: "Working independently on web development projects for various clients, delivering high-quality software solutions.",
    responsibilities: [
      "Develop and maintain web applications using modern frameworks",
      "Collaborate with clients to understand requirements and deliver solutions",
      "Implement responsive designs and optimize application performance",
      "Manage project timelines and ensure on-time delivery"
    ],
    achievements: [
      "Successfully completed 6 projects for 4 different clients",
      "Maintained 100% client satisfaction rate",
      "Delivered all projects on time with 95%+ code quality rating"
    ],
    skills: ["Next.js", "React", "TypeScript", "Python", "Django", "PostgreSQL", "Prisma"],
    type: "Freelance",
    icon: "💻",
    color: "#ffdb33"
  },
  {
    id: 2,
    company: "University Projects",
    position: "Software Developer Intern",
    period: "Aug 2022 - Dec 2023",
    location: "On-site",
    description: "Worked on academic and research projects as part of Information Systems degree program, gaining hands-on experience in software development.",
    responsibilities: [
      "Developed web applications for academic research purposes",
      "Collaborated with professors and fellow students on team projects",
      "Implemented database designs and backend logic",
      "Presented project results and technical documentation"
    ],
    achievements: [
      "Created 4 major academic projects with excellent grades",
      "Developed expertise in multiple programming languages and frameworks",
      "Gained experience in team collaboration and project management"
    ],
    skills: ["Java", "Spring Boot", "ASP.NET", "C#", "Python", "Database Design"],
    type: "Internship",
    icon: "🎓",
    color: "#e63946"
  }
];
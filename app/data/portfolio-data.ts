export const portfolioData = {
  name: "Sergio",
  title: "Software Developer",
  description:
    "Fresh Graduate Information Systems with experience in web development and project documentation. Available for exciting opportunities!",

  about: {
    bio: "Saya adalah fresh graduate dengan gelar Sarjana Sistem Informasi (S.Kom) yang bersemangat dalam pengembangan web dan sistem informasi. Memiliki pengalaman dalam proyek akademik dan freelance dengan total 6 proyek untuk 4 klien selama 2 tahun.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "Odoo",
      "Django",
      "C#",
      ".NET",
      "Java Spring Boot",
      "ASP.NET",
      "Vue",
      "Prisma",
      "PostgreSQL",
      "Linux",
      "Git",
    ],
  },

  projects: [
    {
      id: 1,
      title: "Bank Transaction System",
      description:
        "Template dokumen transaksi perbankan berbasis Mandiri Bank format",
      tech: ["Next.js", "Prisma", "TypeScript"],
      image: "/projects/bank-system.jpg",
    },
    {
      id: 2,
      title: "Gold Pawn Application",
      description:
        "Form aplikasi gadai emas dengan validasi NIK dan nomor telepon",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/projects/gold-pawn.jpg",
    },
    {
      id: 3,
      title: "Odoo Module Development",
      description: "Pengembangan modul Odoo dengan API dan laporan QWeb",
      tech: ["Python", "Odoo", "PostgreSQL"],
      image: "/projects/odoo-module.jpg",
    },
  ],

  experience: [
    {
      company: "CV AXEL DIGITAL CREATIVE",
      role: "Fullstack Developer",
      period: "2025 Febuari - 2025 July",
      description:
        "Menyelesaikan proyek dengan integrasi payment gateway mitrans",
    },
  ],

  contact: {
    email: "sergioguntur18@gmail.com",
    github: "https://github.com/notramos",
    linkedin: "https://linkedin.com/in/GregoriusSergio",
  },
};

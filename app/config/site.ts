export interface SiteConfig {
  title: string;
  description: string;
  keywords: string[];
}

export interface NavigationItem {
  label: string;
  href: string;
}

export const siteConfig: SiteConfig = {
  title: "Gregorius Sergio Guntur | Full Stack Developer",
  description:
    "Portofolio Gregorius Sergio Guntur. Pengembangan aplikasi web, backend, dan integrasi sistem.",
  keywords: [
    "Gregorius Sergio Guntur",
    "full stack developer",
    "web developer",
    "Next.js",
    "TypeScript",
  ],
};

export const navigation: NavigationItem[] = [
  { label: "Proyek", href: "#projects" },
  { label: "Tentang", href: "#about" },
  { label: "Kontak", href: "#contact" },
];

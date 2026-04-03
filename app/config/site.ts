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
  title: "Sergio | Portfolio",
  description: "Fresh Graduate Information Systems - Software Developer",
  keywords: ["portfolio", "software developer", "web developer", "Next.js", "React"],
};

export const navigation: NavigationItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "Stats", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

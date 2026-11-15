export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export const personalInfo: PersonalInfo = {
  name: "Gregorius Sergio Guntur",
  title: "Full stack developer",
  subtitle:
    "Saya membangun aplikasi web dan integrasi bisnis yang membantu pekerjaan berjalan lebih baik.",
  location: "Jakarta, Indonesia",
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/notramos",
  linkedin: "https://linkedin.com/in/GregoriusSergio",
};

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  availability: string;
  location: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
}

export const personalInfo: PersonalInfo = {
  name: "Gregorius Sergio Guntur",
  title: "Full stack developer",
  subtitle:
    "Saya membangun aplikasi web dan integrasi bisnis yang membantu pekerjaan berjalan lebih baik.",
  availability: "Tersedia untuk peluang baru",
  location: "Jakarta, Indonesia",
};

export const contactInfo: ContactInfo = {
  email: "",
  phone: "",
  location: personalInfo.location,
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/notramos",
  linkedin: "https://linkedin.com/in/GregoriusSergio",
  twitter: "",
};

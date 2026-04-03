export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  availability: string;
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
  name: "Sergio",
  title: "Software Developer",
  subtitle: "Fresh Graduate Information Systems",
  availability: "Available for Work",
};

export const contactInfo: ContactInfo = {
  email: "sergio@example.com",
  phone: "+6281234567890",
  location: "Jakarta, Indonesia",
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/sergio",
  linkedin: "https://linkedin.com/in/sergio",
  twitter: "https://twitter.com/sergio",
};

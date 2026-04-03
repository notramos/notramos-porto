import { Button } from "@/components/retroui/Button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { socialLinks } from "@/app/config/personal";

export function SocialLinks() {
  const socialItems = [
    { icon: Github, href: socialLinks.github, label: "GitHub", hoverColor: "var(--secondary)", hoverText: "var(--primary)" },
    { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn", hoverColor: "#0077b5", hoverText: "white" },
    { icon: Twitter, href: socialLinks.twitter, label: "Twitter", hoverColor: "#1da1f2", hoverText: "white" },
  ];

  return (
    <div className="flex justify-center gap-6 flex-wrap">
      {socialItems.map((item, idx) => (
        <Button
          key={idx}
          asChild
          variant="outline"
          className="border-2 border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)] font-bold px-6 py-3 text-lg"
        >
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            <item.icon className="h-6 w-6 mr-2" />
            {item.label}
          </a>
        </Button>
      ))}
    </div>
  );
}

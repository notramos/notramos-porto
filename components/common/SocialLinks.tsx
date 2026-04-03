import { Button } from "@/components/retroui/Button";
import { Github, Linkedin, Twitter } from "lucide-react";

interface SocialLinksProps {
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export function SocialLinks({
  github = "https://github.com/sergio",
  linkedin = "https://linkedin.com/in/sergio",
  twitter = "https://twitter.com/sergio",
}: SocialLinksProps) {
  const socialItems = [
    { icon: Github, href: github, label: "GitHub", hoverColor: "black", hoverText: "#ffdb33" },
    { icon: Linkedin, href: linkedin, label: "LinkedIn", hoverColor: "#0077b5", hoverText: "white" },
    { icon: Twitter, href: twitter, label: "Twitter", hoverColor: "#1da1f2", hoverText: "white" },
  ];

  return (
    <div className="flex justify-center gap-6 flex-wrap">
      {socialItems.map((item, idx) => (
        <Button
          key={idx}
          asChild
          variant="outline"
          className="border-2 border-black text-black hover:bg-black hover:text-[#ffdb33] font-bold px-6 py-3 text-lg"
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

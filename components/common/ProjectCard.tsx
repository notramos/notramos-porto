import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  type: string;
  client?: string;
  features?: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export function ProjectCard({
  title,
  description,
  tech,
  type,
  client,
  features,
  github,
  demo,
  image,
}: ProjectCardProps) {
  return (
    <Card className="h-full min-h-125 border-2 border-[var(--border-color)] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
      {/* Image/Placeholder */}
      <div className="relative h-40 bg-linear-to-br from-[var(--primary)] to-[var(--accent)] border-b-2 border-[var(--border-color)]">
        {image ? (
          <div className="relative w-full h-full">
            <Image src={image} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="text-6xl text-white">🚀</span>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[var(--muted)]">
            <div className="text-center">
              <div className="text-6xl font-bold text-[var(--text-primary)] mb-1">
                P{title?.charAt(0)}
              </div>
              <div className="text-base font-bold text-[var(--text-primary)]">{title}</div>
            </div>
          </div>
        )}

        {/* Type Badge */}
        <div className="absolute top-2 right-2">
          <Badge
            variant="default"
            className="bg-[var(--secondary)] text-[var(--primary)] border border-[var(--primary)] px-3 py-1 font-bold text-xs"
          >
            {type}
          </Badge>
        </div>
      </div>

      <Card.Content className="flex-1 p-4 flex flex-col">
        <div className="space-y-3 flex-1">
          {/* Title */}
          <div className="min-h-15">
            <h3 className="text-xl font-head text-[var(--text-primary)] mb-1 line-clamp-2">
              {title}
            </h3>
            {client && (
              <p className="text-xs font-bold text-[var(--text-primary)] mt-1">
                Client: <span className="text-[var(--primary)]">{client}</span>
              </p>
            )}
          </div>

          {/* Description */}
          <div className="min-h-15">
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {/* Features */}
          {features && features.length > 0 && (
            <div className="border-t-2 border-b-2 border-[var(--border-color)] py-2 min-h-20">
              <p className="text-xs font-bold text-[var(--text-primary)] mb-1">Features:</p>
              <ul className="space-y-0.5 text-[10px]">
                {features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="text-[var(--text-secondary)] flex items-start">
                    <span className="text-[var(--primary)] mr-1">▹</span>
                    <span className="line-clamp-1">{feature}</span>
                  </li>
                ))}
                {features.length > 3 && (
                  <li className="text-[var(--text-muted)] text-[10px]">
                    +{features.length - 3} more
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-1.5 min-h-15">
            <p className="text-xs font-bold text-[var(--text-primary)]">Tech Stack:</p>
            <div className="flex flex-wrap gap-1.5">
              {tech.slice(0, 4).map((techItem, idx) => (
                <Badge
                  key={idx}
                  className="bg-[var(--secondary)] text-[var(--primary)] border-2 border-[var(--border-color)] px-1.5 py-0.5 font-bold text-[10px]"
                >
                  {techItem}
                </Badge>
              ))}
              {tech.length > 4 && (
                <Badge className="bg-[var(--secondary)] text-[var(--primary)] border-2 border-[var(--border-color)] px-1.5 py-0.5 font-bold text-[10px]">
                  +{tech.length - 4}
                </Badge>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-1.5 pt-2 min-h-10 mt-auto">
            {github && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="flex-1 text-[10px] font-bold border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black py-2"
              >
                <Link href={github} target="_blank">
                  <span className="text-xs">★</span> GitHub
                </Link>
              </Button>
            )}
            {demo && (
              <Button
                asChild
                size="sm"
                className="flex-1 text-[10px] font-bold bg-[var(--primary)] text-black border-2 border-[var(--border-color)] hover:bg-[var(--primary-hover)] py-2"
              >
                <Link href={demo} target="_blank">
                  <span className="text-xs">↗</span> Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}

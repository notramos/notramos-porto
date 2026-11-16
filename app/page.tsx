import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { GitHubHistory } from "@/components/sections/GitHubHistory";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Project";
import { SystemBlueprint } from "@/components/sections/SystemBlueprint";
import { Header } from "@/components/layout/Header";
import { AnimatedStatement } from "@/components/motion/AnimatedStatement";
import { SiteMotion } from "@/components/motion/SiteMotion";
import { personalInfo, socialLinks } from "@/app/config/personal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="skip-link">Lewati ke konten</a>
      <Header />
      <SiteMotion />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <AnimatedStatement />
        <Projects />
        <GitHubHistory />
        <Experience />
        <SystemBlueprint />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {personalInfo.name}</p>
          <a className="w-fit underline decoration-[var(--accent)] underline-offset-4" href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

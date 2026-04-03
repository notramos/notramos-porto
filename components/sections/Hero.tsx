import { Button } from "@/components/retroui/Button";
import { ProfileCard } from "@/components/common/ProfileCard";
import { personalInfo } from "@/app/config/personal";
import Link from "next/link";

export function Hero() {
  return (
    <section className="py-16 md:py-24 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Profile Card */}
          <div className="flex justify-center">
            <ProfileCard />
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-head mb-4 border-4 border-[var(--border-color)] inline-block p-3 bg-[#ffdb33] text-black glitch">
                HELLO!
              </h1>
              <h2 className="text-3xl md:text-5xl font-head mt-4 text-[var(--text-primary)]">
                I&apos;m{" "}
                <span className="text-[#ffdb33] border-b-4 border-[var(--border-color)]">
                  {personalInfo.name.toUpperCase()}
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-bold text-[var(--text-primary)] border-l-4 border-[var(--border-color)] pl-4 py-2 bg-[#fae583]/50">
                {personalInfo.title}
              </p>

              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                {personalInfo.subtitle} with 2 years of experience in
                web development and project documentation. Completed 6 projects
                for 4 clients with expertise in modern web technologies.
              </p>

              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                Passionate about creating clean, efficient, and user-friendly
                applications. Currently seeking exciting opportunities to grow
                and contribute to innovative projects.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl bg-[#ffdb33] text-black border-2 border-[var(--border-color)] hover:bg-[#ffcc00]"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl bg-[#ffdb33] text-black border-2 border-[var(--border-color)] hover:bg-[#ffcc00]"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex gap-3 pt-4">
              <span className="bg-[#ffdb33] border-2 border-[var(--border-color)] px-4 py-2 font-bold text-black flex items-center gap-2">
                <span>⚡</span> {personalInfo.availability}
              </span>
              <span className="bg-[var(--secondary)] border-2 border-[var(--border-color)] px-4 py-2 font-bold text-[#ffdb33] flex items-center gap-2">
                <span>🎯</span> Open to Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

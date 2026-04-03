import { Button } from "@/components/retroui/Button";
import { ProfileCard } from "@/components/common/ProfileCard";
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
              <h1 className="text-5xl md:text-7xl font-head mb-4 border-4 border-black inline-block p-3 bg-[#ffdb33] glitch">
                HELLO!
              </h1>
              <h2 className="text-3xl md:text-5xl font-head mt-4">
                I&apos;m{" "}
                <span className="text-[#ffdb33] border-b-4 border-black">
                  SERGIO
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-bold text-black border-l-4 border-black pl-4 py-2 bg-[#fae583]/50">
                Software Developer
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Fresh Graduate Information Systems with 2 years of experience in
                web development and project documentation. Completed 6 projects
                for 4 clients with expertise in modern web technologies.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Passionate about creating clean, efficient, and user-friendly
                applications. Currently seeking exciting opportunities to grow
                and contribute to innovative projects.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl bg-[#ffdb33] text-black border-2 border-black hover:bg-[#ffcc00]"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl bg-[#ffdb33] text-black border-2 border-black hover:bg-[#ffcc00]"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex gap-3 pt-4">
              <span className="bg-[#ffdb33] border-2 border-black px-4 py-2 font-bold text-black flex items-center gap-2">
                <span>⚡</span> Available for Work
              </span>
              <span className="bg-black border-2 border-black px-4 py-2 font-bold text-[#ffdb33] flex items-center gap-2">
                <span>🎯</span> Open to Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

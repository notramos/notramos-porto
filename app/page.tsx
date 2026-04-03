import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Project";
import { Stats } from "@/components/sections/Stats";
import { Header } from "@/components/layout/Header";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        {/* <Experience /> */}
        <Projects />
        {/* <Stats /> */}
        <Contact />
      </main>
    </div>
  );
}

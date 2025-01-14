import DownloadCV from "./components/download_cv";
import SkillsSection from "./components/skillsection";
import Project from "./components/project";
import Header from "./main/head";
import AboutMe from "./main/aboutme";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <main className="container mx-auto px-4 py-10">
        <Header />
        <AboutMe />
        <DownloadCV />
        <SkillsSection />
        <Project />

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-white-">
            Feel free to reach out to me via email at
            <a
              href="mailto:your-email@example.com"
              className="text-blue-500 underline"
            >
              sergioguntur@gmail.com
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="text-center py-6 border-t mt-10">
        <p className="text-gray-500">2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

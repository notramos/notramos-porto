import Image from "next/image";
import '@/app/globals.css';
import AnimatedText from "@/app/animated/animate";
import DownloadCV from "./components/download_cv";
/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <div>
    <main className="container mx-auto px-4 py-10">
      {/* Header */}
      <header className="text-center mb-12">
        <Image
          src="/images/profile.jpg"
          alt="My Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto border-4 shadow-sm"
          priority
        />
        <strong className="text-4xl font-bold mt-4">Hello, I'm Gregorius Sergio</strong>
        <AnimatedText />
      </header>

      {/* About Me Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-white-700">
          Iam a Student from AtmaJaya Yogyakarta
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="bg-gray-600 shadow rounded p-4">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="text-white-600 mt-2">A description of your first project.</p>
          </li>
          <li className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="text-gray-600 mt-2">A description of your second project.</p>
          </li>
          <li className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-bold">Project 3</h3>
            <p className="text-black-600 mt-2">A description of your third project.</p>
          </li>
          <li className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-bold">Project 4</h3>
            <p className="text-black-600 mt-2">A description of your fourth project.</p>
          </li>
        </ul>
        
      </section>
      {/* Contact Section */}
     
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700">
          Feel free to reach out to me via email at  
          <a href="mailto:your-email@example.com" className="text-blue-500 underline">sergioguntur@gmail.com</a>.
          </p>
      </section>
      
      <DownloadCV/>
    </main>

    <footer className="text-center py-6 border-t mt-10">
      <p className="text-gray-500">2024 Your Name. All rights reserved.</p>
    </footer>
  </div>
  );
}

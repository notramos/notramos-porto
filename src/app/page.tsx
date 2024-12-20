import Image from "next/image";
import '@/app/globals.css';
import AnimatedText from "@/app/animated/animate";
import DownloadCV from "./components/download_cv";
import SkillsSection from "./components/skillsection";
import Project from "./components/project";
/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <div>
    <main className="container mx-auto px-4 py-10 border">
        {/* Header */}
      <header className="text-center mb-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center justify-items-center">
        {/* Gambar Profil */}
        <Image
          src="/images/profile.jpg"
          alt="My Profile Picture"
          width={350}
          height={300}
          className="rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_5px_aquamarine] "
          priority
        />
        {/* Teks Profil */}
        <div className="text-wrapper flex flex-col items-center md:items-start md:self-start md:text-left md:w-full">
          <p className="text-4xl font-bold">Hello, I'm Gregorius Sergio</p>
          <AnimatedText />
          <hr className="w-24 border-t-2 border-gray-400 my-2 md:my-6" />
          <p className="text-2xl text-slate-400 gap-3  hover:text-aquamarine">Saya Gregorius Sergio Guntur, mahasiswa jurusan Sistem Informasi Universitas Atmajaya Yogyakarta</p>
          <hr className="w-24 border-t-2 border-gray-400 my-1 md:my-6" />
          <div className="logo-social-media  flex flex-row justify-center md:justify-start gap-6 mt-4 ">
                    <a
                href="https://www.linkedin.com/in/sergeser"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-8 h-8 hover:scale-110 transition-transform"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="w-8 h-8 hover:scale-110 transition-transform"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/notramos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Image
                  src="/icons/github.svg"
                  alt="GitHub"
                  className="w-8 h-8 hover:scale-110 transition-transform"
                />
              </a>
        </div>
        </div>
      </header>

      {/* About Me Section */}
      <div>
      <h2 className="text-center text-4xl font-bold p-5 font-shadow mb-10">ABOUT ME</h2>
      <section className="text-center mb-12 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 items-center justify-items-center">
       {/* Bagian Kualifikasi */}
          <div className="kualifikasi text-center p-4 rounded-lg shadow-xl">  
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                  <div className="card flex flex-col items-center bg-gray-700 text-white p-10 rounded-lg shadow-lg ">
                    <Image src="/icons/disiplin.svg"
                    alt=""
                    width={100}
                    height={50}
                    className="mb-5 "/>
                    <h3 className="text-lg font-medium ">Disiplin</h3>
                  </div>
                  <div className="card flex flex-col items-center bg-gray-700 text-white p-10 rounded-lg shadow-lg ">
                    <Image src="/icons/teamwork.svg"
                    alt=""
                    width={100}
                    height={50}
                    className="mb-5"/>
                    <h3 className="text-lg font-medium">Kerja Tim</h3>
                  </div>
                  <div className="card flex flex-col items-center bg-gray-700 text-white p-10 rounded-lg shadow-lg ">
                    <Image src="/icons/newlearn.svg"
                    alt=""
                    width={100}
                    height={50}
                    className="mb-5"/>
                    <h3 className="text-lg font-medium">Belajar Hal Baru</h3>
                  </div>
          
                  <div className="card flex flex-col items-center bg-gray-700 text-white p-10 rounded-lg shadow-lg ">
                    <Image src="/icons/respon.svg"
                    alt=""
                    width={100}
                    height={50}
                    className="mb-5"/>
                    <h3 className="text-xl font-medium">Tanggung Jawab</h3>
                  </div>
          
          </div>
           
          </div>
             {/* Bagian Penjelasan Detail */}
          <div className="penjelasan detail p-4 rounded-lg shadow-xl">
            <p className="text-gray-500 font-semibold text-2xl shadow-sm">
              Kualifikasi tersebut menunjukkan kemampuan saya untuk beradaptasi dan bekerja secara profesional di berbagai lingkungan kerja. Saya percaya bahwa dengan semangat belajar, tanggung jawab, dan kemampuan bekerja di bawah tekanan, saya dapat memberikan kontribusi terbaik pada tim dan perusahaan.
            </p>
          </div>
      </section>

      </div>
      
      <SkillsSection/>
      {/* Projects Section */}
      <Project/>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-white-">
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

import Image from "next/image";
import AnimatedText from "../animated/animate";
import React from "react";
/* eslint-disable react/no-unescaped-entities */
const Header = () => {
  return (
    <header className="text-center mb-44 mt-28 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center justify-items-center">
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
        <p className="text-2xl text-slate-400 gap-3  hover:text-aquamarine">
          Saya Gregorius Sergio Guntur, mahasiswa jurusan Sistem Informasi
          Universitas Atmajaya Yogyakarta
        </p>
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
              width={100}
              height={100}
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
              width={100}
              height={100}
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
              height={100}
              width={100}
              src="/icons/github.svg"
              alt="GitHub"
              className="w-8 h-8 hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

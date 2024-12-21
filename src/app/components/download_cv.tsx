"use client"; // Jika perlu interaktivitas (opsional)
import React from "react";

const DownloadCV: React.FC = () => {
  return (
    <div className="text-center my-6 mb-44">
      <a
        href="/cv/CV_Sergio.pdf" // Pastikan file PDF CV Anda ada di folder public/cv
        download="sergio-cv.pdf" // Nama file saat diunduh
        className="relative inline-block text-white font-semibold py-3 px-6 rounded-lg bg-emerald-400 group"
      >
        {/* Efek Aura */}
        <span className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-emerald-400 via-blue-500 to-emerald-300 opacity-0 group-hover:opacity-100 group-hover: blur-sm transition-all duration-300"></span>

        {/* Konten Tombol */}
        <span className="relative z-10  py-3 px-6 rounded-lg">Download CV</span>
      </a>
    </div>
  );
};

export default DownloadCV;

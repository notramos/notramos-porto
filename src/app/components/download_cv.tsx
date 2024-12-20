"use client"; // Jika perlu interaktivitas (opsional)
import React from "react";

const DownloadCV: React.FC = () => {
  return (
    <div className="text-center my-6">
      <a
        href="/cv/CV_Sergio.pdf" // Pastikan file PDF CV Anda ada di folder public/cv
        download="sergio-cv.pdf" // Nama file saat diunduh
        className="inline-block bg-emerald-400 text-white font-semibold py-2 px-4 rounded hover:bg-emerald-500 transition-all duration-300"
      >
        Download CV
      </a>
    </div>
  );
};

export default DownloadCV;
"use client"; // Direktif ini menandai file sebagai Client Component
import React, { useState, useEffect } from "react";

const AnimatedText: React.FC = () => {
    const roles = ["Web Developer", "Data Science", "FullStacks Engineer"]; // Daftar teks
    const [currentIndex, setCurrentIndex] = useState(0); // Indeks teks aktif
    const [isVisible, setIsVisible] = useState(true); // Kontrol visibilitas untuk animasi
  
    useEffect(() => {
      const interval = setInterval(() => {
        // Animasi keluar (visibility off)
        setIsVisible(false);
        setTimeout(() => {
          // Ganti teks setelah animasi selesai
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
          setIsVisible(true); // Animasi masuk (visibility on)
        }, 500); // Durasi animasi keluar
      }, 3000); // Interval pergantian (3 detik)
      return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
    }, []);
  
    return (
      <p className="text-lg text-gray-600 mt-2">
        <span
          className={`transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {roles[currentIndex]}
        </span>
      </p>
    );
  };
  
  export default AnimatedText;
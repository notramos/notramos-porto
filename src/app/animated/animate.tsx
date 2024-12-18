"use client"; // Direktif ini menandai file sebagai Client Component
import React, { useState, useEffect } from "react";

const AnimatedText: React.FC = () => {
  const roles = ["Web Developer", "Data Scientist", "Full Stack Engineer", "Quality Assurance"]; // Daftar teks
  const [currentIndex, setCurrentIndex] = useState(0); // Indeks teks aktif
  const [displayedText, setDisplayedText] = useState(""); // Teks yang ditampilkan saat ini
  const [isDeleting, setIsDeleting] = useState(false); // Status penghapusan teks

  useEffect(() => {
    const fullText = roles[currentIndex]; // Teks penuh dari indeks aktif
    let typingSpeed = isDeleting ? 50 : 100; // Kecepatan ketikan (lebih cepat saat menghapus)

    const handleTyping = () => {
      if (!isDeleting && displayedText.length < fullText.length) {
        // Menambahkan huruf satu per satu
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        // Menghapus huruf satu per satu
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText.length === fullText.length) {
        // Tunggu sebentar sebelum mulai menghapus
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText.length === 0) {
        // Beralih ke teks berikutnya setelah selesai menghapus
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout); // Bersihkan timeout saat komponen unmount
  }, [displayedText, isDeleting, roles, currentIndex]);

  return (
    <p className="text-lg text-white mt-2">
      <span className="border-r-2 font-bold text-aquamarine pr-1 animate-blink">{displayedText}</span>
    </p>
  );
};

export default AnimatedText;

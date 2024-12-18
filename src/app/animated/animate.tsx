"use client";
import React, { useState, useEffect, useMemo } from "react";

const AnimatedText: React.FC = () => {
  const roles = useMemo(() => ["Web Developer", "Data Scientist", "Full Stack Engineer", "Quality Assurance"], []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      if (!isDeleting && displayedText.length < fullText.length) {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, roles, currentIndex]);

  return (
    <p className="text-lg text-aquamarine mt-2">
      <span className="border-r-2 border-white pr-1 animate-blink">{displayedText}</span>
    </p>
  );
};

export default AnimatedText;

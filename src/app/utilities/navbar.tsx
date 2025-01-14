"use client";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close the mobile menu after navigation
    }
  };

  return (
    <nav className=" bg-gray-800 p-4 shadow-xl fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <h1 className="text-white text-2xl font-bold hover:text-aquamarine md:text-3xl sm:text-xl">
            PORTOFOLIO
          </h1>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => scrollToSection("aboutme")}
            className="text-white hover:text-aquamarine transition-colors text-lg sm:text-sm"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-white hover:text-aquamarine transition-colors text-lg sm:text-sm"
          >
            Skill
          </button>
          <button
            onClick={() => scrollToSection("project")}
            className="text-white hover:text-aquamarine transition-colors text-lg sm:text-sm"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-aquamarine transition-colors text-lg sm:text-sm"
          >
            Contact
          </button>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-full left-0 w-full bg-gray-800 flex flex-col space-y-4 py-4 px-4 shadow-lg z-50">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-aquamarine transition-colors text-lg sm:text-sm"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skill")}
            className="text-white hover:text-aquamarine transition-colors text-lg sm:text-sm"
          >
            Skill
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-white hover:text-aquamarine transition-colors text-lg sm:text-sm"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-aquamarine transition-colors text-lg sm:text-sm"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

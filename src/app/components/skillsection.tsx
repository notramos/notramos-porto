"use client";

import React from "react";
import Image from "next/image";

const skills = [
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "React.js", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Data Analysis", icon: "/icons/data-analysis.svg" },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-4 px-2 bg-gray-700 rounded mb-2">
      <div className="container mx-auto px-8 text-center mb-10">
        <h2 className="text-4xl font-bold text-pretty">My Skills</h2>
        <p className="text-l text-white p-4">
          Here are some of the tools and technologies I specialize in:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-aquamarine shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-4">
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  width={0}
                  height={0}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Skill Name */}
              <h3 className="text-lg font-semibold text-gray-700">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

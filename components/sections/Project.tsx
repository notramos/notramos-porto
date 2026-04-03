"use client";

import { projects } from "@/app/data/projects-data";
import { ProjectCard } from "@/components/common/ProjectCard";
import { Carousel } from "@/components/retroui/Carousel";
import { Button } from "@/components/retroui/Button";
import { Badge } from "@/components/retroui/Badge";

export function Projects() {
  return (
    <section id="projects" className="py-16 ">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <Badge
              variant="default"
              className="bg-black text-[#ffdb33] border-2 border-black px-4 py-2 font-bold text-lg"
            >
              <span>★</span> PROJECTS
            </Badge>
          </div>
          <h2 className="text-5xl font-head text-black mb-4 border-b-4 border-black inline-block px-6 py-2">
            My Work
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            Here are some of my recent projects showcasing my skills in web
            development, database management, and system integration.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white border-2 border-black p-6 text-center">
            <div className="text-4xl font-bold text-black">
              {projects.length}
            </div>
            <div className="text-xs font-bold text-black mt-1">PROJECTS</div>
          </div>
          <div className="bg-white border-2 border-black p-6 text-center">
            <div className="text-4xl font-bold text-black">4</div>
            <div className="text-xs font-bold text-black mt-1">CLIENTS</div>
          </div>
          <div className="bg-white border-2 border-black p-6 text-center">
            <div className="text-4xl font-bold text-black">2</div>
            <div className="text-xs font-bold text-black mt-1">YEARS</div>
          </div>
          <div className="bg-white border-2 border-black p-6 text-center">
            <div className="text-4xl font-bold text-black">10+</div>
            <div className="text-xs font-bold text-black mt-1">TECH STACKS</div>
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <Carousel.Content>
              {projects.map((project) => (
                <Carousel.Item
                  key={project.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-3">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      tech={project.tech}
                      type={project.type}
                      client={project.client}
                      features={project.features}
                      github={project.github}
                      demo={project.demo}
                      image={project.image}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel.Content>
            <Carousel.Previous className="bg-[#ffdb33] text-black border-2 border-black hover:bg-[#ffcc00] shadow-lg" />
            <Carousel.Next className="bg-[#ffdb33] text-black border-2 border-black hover:bg-[#ffcc00] shadow-lg" />
          </Carousel>
        </div>

        {/* Project Categories */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-head text-black mb-6">Project Types</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="bg-[#ffdb33] text-black border-2 border-black px-4 py-2 font-bold">
              Freelance ({projects.filter((p) => p.type === "Freelance").length}
              )
            </Badge>
            <Badge className="bg-black text-[#ffdb33] border-2 border-black px-4 py-2 font-bold">
              Academic ({projects.filter((p) => p.type === "Academic").length})
            </Badge>
            <Badge className="bg-[#fae583] text-black border-2 border-black px-4 py-2 font-bold">
              Personal ({projects.filter((p) => p.type === "Personal").length})
            </Badge>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Button
            size="lg"
            className="bg-[#ffdb33] text-black border-2 border-black hover:bg-[#ffcc00] text-lg px-8 py-6 shadow-xl"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

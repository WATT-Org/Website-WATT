"use client";

import { useState } from "react";


export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalProject, setModalProject] = useState(null);

  const categories = ["All", "Web", "Mobile", "AI", "E-Commerce"];

  const projects = [
    {
      title: "AI Chatbot",
      description: "An intelligent chatbot built with Next.js and OpenAI API.",
      image: "/robot.png",
      link: "#",
      category: "AI",
      tech: ["React", "Next.js", "OpenAI API"],
      status: "Completed",
    },
    {
      title: "Portfolio Website",
      description: "A modern personal portfolio to showcase skills and projects.",
      image: "/logo.jpeg",
      link: "#",
      category: "Web",
      tech: ["React", "Tailwind CSS"],
      status: "Featured",
    },
    {
      title: "E-Commerce Store",
      description: "An online store with cart, checkout, and payment integration.",
      image: "/robot.png",
      link: "#",
      category: "E-Commerce",
      tech: ["React", "Node.js", "Stripe API"],
      status: "In Progress",
    },
    {
      title: "Blog Platform",
      description: "A full-stack blog with authentication and admin dashboard.",
      image: "/logo.jpeg",
      link: "#",
      category: "Web",
      tech: ["Next.js", "MongoDB", "Tailwind CSS"],
      status: "Completed",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="p-10 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-white">
        Our Projects That Show Our Expertise On 
Robotics And Home Automations
      </h1>
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
       Shaping Smart Solutions for Real-World Challenges
      </h1>

      {/* Category Filters */}
      <div className="flex justify-center mb-8 space-x-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-medium transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-blue-500"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setModalProject(project)}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                {project.status}
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 px-2 py-1 rounded-full text-sm hover:bg-blue-600 transition"
                    title={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-white font-medium transition"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setModalProject(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl p-8 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-xl font-bold"
              onClick={() => setModalProject(null)}
            >
              ✕
            </button>
            <img
              src={modalProject.image}
              alt={modalProject.title}
              className="rounded-xl mb-4 w-full object-cover h-64"
            />
            <h2 className="text-3xl font-bold mb-2">{modalProject.title}</h2>
            <p className="text-gray-300 mb-4">{modalProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {modalProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-700 px-2 py-1 rounded-full text-sm hover:bg-blue-600 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={modalProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-white font-medium transition"
            >
              Visit Project →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

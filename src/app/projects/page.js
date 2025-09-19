"use client";

import { useState } from "react";
import Image from "next/image";
import projects from "@/data/projects";

const categories = [
  "All",
  "AI & Robotics",
  "IoT",
  "Hardware & 3D Printing",
  "CNC & Hardware",
  "Robotics",
  "Electronics",
  "AI & Healthcare",
  "Healthcare & Robotics",
  "Web Development",
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImage((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImage(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white p-10">
      {/* Page Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Explore Our Projects
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A showcase of our latest work, blending creativity and technology.
        </p>
        <div className="mt-2 w-24 h-1 bg-teal-400 mx-auto rounded-full"></div>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-teal-400 text-gray-900"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid of projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-xl shadow-lg p-4 cursor-pointer hover:scale-105 transform transition flex flex-col"
            onClick={() => {
              setSelectedProject(project);
              setCurrentImage(0);
            }}
          >
            {/* Image */}
<div className="w-full h-56 flex items-center justify-center bg-gray-900 rounded-lg mb-4">
  {project.images && project.images.length > 0 ? (
    <Image
      src={project.images[0]}
      alt={project.title}
      width={400}
      height={250}
      className="h-full object-contain"
    />
  ) : (
    // Fallback: empty div or placeholder image
    <div className="w-full h-full flex items-center justify-center text-gray-500">
      No Image
    </div>
  )}
</div>


            {/* Scrollable Content with custom invisible scrollbar */}
            <div className="flex flex-col overflow-y-auto max-h-40 scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-teal-400">
              <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
              <span className="text-teal-400 text-sm mb-2">{project.category}</span>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Box */}
          <div className="relative bg-gray-800 rounded-2xl p-6 w-[95%] max-w-3xl shadow-2xl z-50 flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            {/* Image Carousel */}
            <div className="relative w-full h-96 flex items-center justify-center bg-gray-900 rounded-lg mb-6">
              <Image
                src={selectedProject.images[currentImage]}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="object-contain max-h-96"
              />

              {/* Prev & Next buttons */}
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full"
              >
                ◀
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full"
              >
                ▶
              </button>
            </div>

            {/* Text Section with custom scrollbar */}
            <div className="flex flex-col items-start text-left overflow-y-auto max-h-60 scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-teal-400">
              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <span className="text-teal-400 text-sm mb-3">{selectedProject.category}</span>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Custom scrollbar styling */}
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 3px;
        }
        .scrollbar-thin:hover::-webkit-scrollbar-thumb {
          background: #14b8a6; /* teal-400 */
        }
      `}</style>
    </div>
  );
}

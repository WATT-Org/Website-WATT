"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-6">Projects</h1>
      <p className="text-center text-gray-400 mb-8">
        Explore the innovative projects created by our community.
      </p>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition ${
          selectedProject ? "blur-sm" : ""
        }`}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-xl shadow-lg p-4 cursor-pointer hover:scale-105 transform transition relative"
            onClick={() => {
              setSelectedProject(project);
              setCurrentImage(0);
            }}
          >
            {/* Status Badge */}
            <span
              className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${
                project.status === "Completed"
                  ? "bg-green-600 text-white"
                  : project.status === "In Progress"
                  ? "bg-yellow-500 text-black"
                  : "bg-blue-600 text-white"
              }`}
            >
              {project.status}
            </span>

            <Image
              src={project.images[0]}
              alt={project.title}
              width={400}
              height={250}
              className="rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-400 text-sm line-clamp-3">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Card Modal */}
          <div
            className="relative bg-gray-800 rounded-2xl p-6 w-[95%] max-w-3xl shadow-2xl z-50 
                       max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            {/* Image Carousel */}
            <div className="relative">
              <Image
                src={selectedProject.images[currentImage]}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="rounded-lg mb-4"
              />
              {/* Prev & Next buttons */}
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
              >
                ◀
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
              >
                ▶
              </button>
            </div>

            {/* Title & Description */}
            <h2 className="text-2xl font-bold mb-3">{selectedProject.title}</h2>
            <p className="text-gray-300 whitespace-pre-line">
              {selectedProject.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

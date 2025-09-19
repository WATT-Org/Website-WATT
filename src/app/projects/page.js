"use client";

import { useState } from "react";
import Image from "next/image";
import projects from "@/data/projects";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

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

  return (
    <div className="relative min-h-screen bg-gray-900 text-white p-10">
      {/* Grid of projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
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
              <Image
                src={project.images[0]}
                alt={project.title}
                width={400}
                height={250}
                className="h-full object-contain"
              />
            </div>

            {/* Text */}
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-400 text-sm line-clamp-3">
              {project.description}
            </p>
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

            {/* Text Section */}
            <div className="flex flex-col items-start text-left">
              <h2 className="text-2xl font-bold mb-3">{selectedProject.title}</h2>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

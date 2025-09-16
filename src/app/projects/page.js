"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Autonomous Drone Navigation",
    category: "AI",
    status: "In Progress",
    images: [
      "/projects/drone1.jpg",
      "/projects/drone2.jpg",
      "/projects/drone3.jpg",
    ],
    description: `An autonomous drone capable of navigating through complex environments using AI and real-time obstacle detection. Useful in rescue operations, agriculture, and surveillance. 
    This project is designed to showcase advanced AI techniques for safe navigation in dynamic environments. 
    It combines computer vision, deep learning, and real-time path planning.`,
  },
  {
    id: 2,
    title: "3D Printed Prosthetic Hand",
    category: "Hardware",
    status: "Completed",
    images: [
      "/projects/prosthetic1.jpg",
      "/projects/prosthetic2.jpg",
      "/projects/prosthetic3.jpg",
      "/projects/prosthetic4.jpg",
      "/projects/prosthetic5.jpg",
      "/projects/prosthetic6.jpg",
    ],
    description: `A customizable, low-cost prosthetic hand created with 3D printing. 
    Modular, lightweight, and affordable compared to traditional prosthetics. 
    The design allows users to customize according to hand size and functionality requirements.`,
  },
  {
    id: 3,
    title: "Smart Home Automation System",
    category: "IoT",
    status: "Featured",
    images: [
      "/projects/smarthome1.jpg",
      "/projects/smarthome2.jpg",
      "/projects/smarthome3.jpg",
    ],
    description: `IoT and AI-powered system to automate lighting, security, and temperature. 
    Users can control everything via mobile app or voice commands.`,
  },
  {
    id: 4,
    title: "AI Chatbot for Customer Support",
    category: "Web Development",
    status: "In Progress",
    images: ["/projects/chatbot1.jpg", "/projects/chatbot2.jpg"],
    description: `A conversational AI chatbot that handles customer queries efficiently and reduces support team workload.`,
  },
  {
    id: 5,
    title: "Renewable Energy Monitoring System",
    category: "Electronics",
    status: "Completed",
    images: ["/projects/energy1.jpg", "/projects/energy2.jpg"],
    description: `An IoT-based solution to track solar and wind energy production with real-time data visualization.`,
  },
  {
    id: 6,
    title: "Robotic Arm for Manufacturing",
    category: "Hardware",
    status: "Featured",
    images: ["/projects/robotarm1.jpg", "/projects/robotarm2.jpg"],
    description: `A robotic arm prototype for automating repetitive tasks in manufacturing with precision and efficiency.`,
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "AI", "IoT", "Hardware", "Electronics", "Web Development"];

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImage((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImage(
        (prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length
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
            <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
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

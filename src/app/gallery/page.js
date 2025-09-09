"use client";
import { useState } from "react";

export default function GalleryPage() {
  const images = [
    { src: "/logo.jpeg", title: "Logo Image" },
    { src: "/robot.png", title: "Robot Image" },
    { src: "/logo.jpeg", title: "Logo Image 2" },
    { src: "/robot.png", title: "Robot Image 2" },
    { src: "/logo.jpeg", title: "Logo Image 3" },
    { src: "/robot.png", title: "Robot Image 3" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-10 bg-gray-950 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        📸 Gallery
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="h-64 w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white text-lg font-semibold">
              {image.title}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

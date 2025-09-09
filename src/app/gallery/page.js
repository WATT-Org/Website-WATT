export default function GalleryPage() {
  const images = [
    "/logo.jpeg",
    "/robot.png",
    "/logo.jpeg",
    "/robot.png",
    "/logo.jpeg",
    "/robot.png",
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-extrabold text-center mb-10">📸 Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="h-64 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

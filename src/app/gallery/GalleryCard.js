import Image from "next/image";

export default function GalleryCard({ event }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      {/* Event Title & Description */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {event.title}
      </h2>
      <p className="text-gray-500 mb-6">{event.description}</p>

      {/* Masonry / Pinterest style Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {event.images.map((img, i) => (
          <div key={i} className="break-inside-avoid">
            <Image
              src={img}
              alt={event.title}
              width={600}
              height={400}
              className="rounded-xl shadow-md hover:scale-105 transform transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

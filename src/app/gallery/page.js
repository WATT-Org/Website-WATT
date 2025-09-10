"use client";
import Image from "next/image";
import Slider from "react-slick";

export default function GalleryPage() {
  const events = [
    {
      title: "Event 1: Green Energy Summit",
      description: "A conference focused on renewable energy and sustainability.",
      images: ["/robot.png", "/robot.png", "/robot.png"],
    },
    {
      title: "Event 2: Tech Expo",
      description: "Showcasing innovative clean-tech solutions and smart devices.",
      images: ["/robot.png", "/robot.png", "/robot.png", "/robot.png"],
    },
    {
      title: "Event 3: Community Workshop",
      description: "Workshops and training sessions with the local community.",
      images: ["/robot.png", "/robot.png"],
    },
  ];

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Event Gallery
        </h1>

        {events.map((event, index) => (
          <div key={index} className="space-y-6">
            {/* Event Heading + Info */}
            <div>
              <h2 className="text-2xl font-semibold text-white">
                {event.title}
              </h2>
              <p className="text-gray-400 mt-2">{event.description}</p>
            </div>

            {/* Carousel */}
            <Slider {...settings}>
              {event.images.map((img, i) => (
                <div key={i} className="px-2">
                  <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={img}
                      alt={`${event.title} - Image ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </div>
  );
}

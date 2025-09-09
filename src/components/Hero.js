"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

// Custom Prev Arrow
function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full"
    >
      <ChevronLeft size={28} className="text-white" />
    </button>
  );
}

// Custom Next Arrow
function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full"
    >
      <ChevronRight size={28} className="text-white" />
    </button>
  );
}

export default function Hero() {
  // Slider settings
  const settings = {
    dots: true, //  slide indicators
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, //  auto slide
    autoplaySpeed: 4000, //  4 sec per slide
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: false,
  };

  const images = [
    "/robot.png",
    "/robot.png",
    "/robot.png",
    "/robot.png",
    "/robot.png",
  ];

  return (
    <section className="relative w-full h-screen">
      <Slider {...settings} className="h-full">
        {images.map((img, idx) => (
          <div key={idx} className="relative w-full h-screen">
            {/* Fullscreen Image */}
            <Image
              src={img}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-cover"
              priority={idx === 0}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/ to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center px-6 md:px-20">
              <div className="text-white max-w-2xl">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  Innovate
                </h2>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                  We are a startup focused on hardware projects like robotics,
                  3D printing, and software development.
                </p>
                <Link
                  href="/projects"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition"
                >
                  Explore Projects
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

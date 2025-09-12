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
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: false,
  };

  const images = ["/robot.png", "/robot.png", "/robot.png", "/robot.png", "/robot.png"];

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
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h6 className="text-4xl md:text-6xl font-bold mb-6">
                Fast and efficient robotics service
              </h6>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                WATT (World of Automation Technology & Trainings) is a robotics-based company
                using emerging technologies like IoT, AI, and Data Science to solve real-world
                problems and automate repetitive tasks.
              </p>
              <Link
                href="/projects"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

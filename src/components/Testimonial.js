"use client";
import Image from "next/image";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Industrial Engineer",
      feedback:
        "WATT&apos;s robotics solutions helped automate our production line, saving time and reducing errors significantly.",
      image: "/testimonials/arjun.jpg",
    },
    {
      name: "Priya Singh",
      role: "Startup Founder",
      feedback:
        "The team at WATT guided us through IT automation and IoT integration. Their expertise transformed our workflow.",
      image: "/testimonials/priya.jpg",
    },
    {
      name: "Vikram Joshi",
      role: "IT Manager",
      feedback:
        "WATT&apos;s consulting helped our company implement AI-driven solutions. Their support and training were exceptional.",
      image: "/testimonials/vikram.jpg",
    },
    {
      name: "Ananya Roy",
      role: "School Administrator",
      feedback:
        "WATT&apos;s smart attendance system improved efficiency and accuracy for our school management. Students and teachers love it!",
      image: "/testimonials/ananya.jpg",
    },
    {
      name: "Rohit Kapoor",
      role: "Automation Engineer",
      feedback:
        "Their AI-powered robotics kits are intuitive and powerful. WATT helped our team learn and implement advanced solutions seamlessly.",
      image: "/testimonials/rohit.jpg",
    },
    {
      name: "Sneha Patil",
      role: "Healthcare Consultant",
      feedback:
        "WATT&apos;s automation solutions in medical devices improved patient monitoring and efficiency. Truly innovative and reliable.",
      image: "/testimonials/sneha.jpg",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center shadow-lg"
            >
              <div className="w-24 h-24 relative mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{t.role}</p>
              <p className="text-gray-200">&quot;{t.feedback}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

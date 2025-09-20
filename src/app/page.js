import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
import projects from "@/data/projects";
import gallery from "@/data/gallery";
import { blogs } from "@/data/blogs";

const partners = [
  { id: 1, name: "Partner 1", logo: "/partners/SATI_Vidisha.jpg" },
  { id: 2, name: "Partner 2", logo: "/partners/AGH.jpg" },
  { id: 3, name: "Partner 3", logo: "/partners/Maulana_Azad_National_Institute_of_Technology.jpg" },
  { id: 3, name: "Partner 3", logo: "/partners/CSIR.jpg" },
];

const services = [
  { id: 1, name: "AI & Robotics", icon: "🤖", description: "Building intelligent machines and autonomous systems." },
  { id: 2, name: "Electronics", icon: "⚡", description: "Designing and prototyping innovative circuits." },
  { id: 3, name: "IoT", icon: "🌐", description: "Connecting devices and making life smarter." },
  { id: 4, name: "Hardware", icon: "🔩", description: "Crafting reliable hardware solutions." },
  { id: 5, name: "Web Development", icon: "💻", description: "Creating responsive and engaging websites." },
  { id: 6, name: "Mobile App Development", icon: "📱", description: "Building apps that people love to use." },
  { id: 7, name: "3D Printing", icon: "🖨️", description: "Turning ideas into tangible 3D models." },
  { id: 8, name: "Laser Cutting Models", icon: "🔦", description: "Precision cutting for creative projects." },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="my-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          What We Offer
        </h2>
       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center p-6 bg-gray-900/90 border border-gray-800 rounded-2xl shadow-md hover:shadow-teal-400/30 hover:-translate-y-1 transform transition duration-300"
            >
              <div className="text-3xl mb-3">{service.icon}</div> {/* smaller icon */}
              <h3 className="text-lg font-semibold text-white text-center mb-1">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="my-20 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-teal-400 font-semibold hover:text-teal-500 transition"
          >
            Explore More →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/80 border border-gray-800 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-teal-500/20 hover:-translate-y-1 transform transition duration-300"
            >
              {project.images?.[0] && (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                {project.description.length > 150
                  ? project.description.slice(0, 150) + "..."
                  : project.description}
              </p>
              <Link
                href={`/projects/${project.id}`}
                className="text-teal-400 hover:text-teal-500 font-medium transition"
              >
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </section>
      
{/* Gallery */}
<section className="my-20 max-w-7xl mx-auto px-6">
  <div className="flex justify-between items-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-white">
      Galleries
    </h2>
    <Link
      href="/gallery"
      className="text-teal-400 font-semibold hover:text-teal-500 transition"
    >
      Explore More →
    </Link>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {gallery
      ?.flatMap((event) =>
        event.images.map((img) => ({ img, title: event.title }))
      )
      .slice(0, 3)
      .map((item, index) => (
        <div
          key={index}
          className="relative w-full h-64 rounded-2xl overflow-hidden bg-gray-900/90 border border-gray-800 shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-2 transition-all duration-500"
        >
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-center font-semibold px-4">
              {item.title}
            </p>
          </div>
        </div>
      ))}
  </div>
</section>



{/* Partners */}
<section className="my-20 max-w-7xl mx-auto px-6">
  <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
    Our Partners
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
    {partners.map((p) => (
      <div
        key={p.id}
        className="flex justify-center items-center p-6 bg-gray-900/80 border border-gray-800 rounded-2xl shadow hover:shadow-lg transition w-40 h-32"
      >
        <Image
          src={p.logo}
          alt={p.name}
          width={120}
          height={60}
          className="object-contain"
        />
      </div>
    ))}
  </div>
</section>


      {/* Blogs */}
      <section className="my-20 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            From the Blog
          </h2>
          <Link
            href="/blogs"
            className="text-teal-400 font-semibold hover:text-teal-500 transition"
          >
            Explore More →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs?.slice(0, 3).map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-900/80 border border-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-teal-500/20 hover:-translate-y-1 transform transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {blog.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm">{blog.description}</p>
              <Link
                href={`/blogs/${blog.slug}`}
                className="text-teal-400 hover:text-teal-500 font-medium transition"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

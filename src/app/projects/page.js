export default function ProjectsPage() {
  const projects = [
    {
      title: "AI Chatbot",
      description: "An intelligent chatbot built with Next.js and OpenAI API.",
      image: "/robot.png",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A modern personal portfolio to showcase skills and projects.",
      image: "/logo.jpeg",
      link: "#",
    },
    {
      title: "E-Commerce Store",
      description: "An online store with cart, checkout, and payment integration.",
      image: "/robot.png",
      link: "#",
    },
    {
      title: "Blog Platform",
      description: "A full-stack blog with authentication and admin dashboard.",
      image: "/logo.jpeg",
      link: "#",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-extrabold text-center mb-10">🚀 Our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-2xl h-48 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-white font-medium transition"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BlogsPage() {
  const blogs = [
    {
      title: "How AI is Changing Web Development",
      date: "Sep 1, 2025",
      description: "Explore how artificial intelligence is transforming frontend and backend development.",
    },
    {
      title: "Next.js 15: What’s New?",
      date: "Aug 15, 2025",
      description: "A deep dive into the latest features of Next.js and how to use them.",
    },
    {
      title: "UI/UX Design Trends 2025",
      date: "Jul 30, 2025",
      description: "The hottest design trends for modern web and mobile apps.",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-extrabold text-center mb-10">📝 Blogs</h1>
      <div className="space-y-8 max-w-3xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-400 mb-3">{blog.date}</p>
            <p className="text-gray-300">{blog.description}</p>
            <a
              href="#"
              className="mt-3 inline-block text-blue-500 hover:text-blue-400 font-medium"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

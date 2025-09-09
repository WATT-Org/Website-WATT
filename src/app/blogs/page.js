export default function Blogs() {
  const blogs = [
    {
      title: "How AI is Changing Web Development",
      date: "Sep 1, 2025",
      description:
        "Explore how artificial intelligence is transforming frontend and backend development.",
      category: "AI",
      author: "Author1",
      readTime: "5 min read",
      image: "/blog1.png",
    },
    {
      title: "Next.js 15: What’s New?",
      date: "Aug 15, 2025",
      description:
        "A deep dive into the latest features of Next.js and how to use them.",
      category: "Web Dev",
      author: "Author2",
      readTime: "7 min read",
      image: "/blog2.png",
    },
    {
      title: "UI/UX Design Trends 2025",
      date: "Jul 30, 2025",
      description: "The hottest design trends for modern web and mobile apps.",
      category: "Design",
      author: "Author3",
      readTime: "6 min read",
      image: "/blog3.png",
    },
  ];

  return (
    <div className="p-10 bg-gray-950 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        📝 Blogs
      </h1>
      <div className="grid gap-8 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-blue-500"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  {blog.category}
                </span>
                <span className="text-gray-400 text-xs">{blog.readTime}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-400 text-sm mb-3">{blog.date}</p>
              <p className="text-gray-300 mb-4">{blog.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
                    {blog.author[0]}
                  </div>
                  <span className="text-gray-300 text-sm">{blog.author}</span>
                </div>
                <a
                  href="#"
                  className="px-4 py-1 bg-blue-500 rounded-full text-white text-sm font-medium hover:bg-blue-400 transition"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

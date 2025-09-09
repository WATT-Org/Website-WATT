import Link from "next/link";

export default function ThirdBlogPage() {
  const otherBlogs = [
    { id: "first-blog", title: "Building a Modular Robot Arm" },
    { id: "second-blog", title: "3D Printing with Recycled Materials" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Software Development for Robotics</h1>
      <p className="text-gray-200 mb-6">
        Discover the software development process behind our robotics projects, including control systems, AI integration, and optimization techniques to make our robots smarter and more efficient.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Other Blogs</h2>
      <div className="space-y-3">
        {otherBlogs.map(blog => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.id}/`}
            className="text-teal-400 hover:underline"
          >
            {blog.title} →
          </Link>
        ))}
      </div>
    </div>
  );
}

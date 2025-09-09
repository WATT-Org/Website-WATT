import Link from "next/link";

export default function ThreeDPrintingPage() {
  const otherBlogs = [
    { id: "robot-arm", title: "Building a Modular Robot Arm" },
    { id: "robotics-software", title: "Software Development for Robotics" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">3D Printing with Recycled Materials</h1>
      <p className="text-gray-200 mb-6">
        Explore our experiments with 3D printing using recycled materials, reducing waste and costs...
      </p>

      <h2 className="text-2xl font-semibold mb-4">Other Blogs</h2>
      <div className="space-y-3">
        {otherBlogs.map(blog => (
          <Link
            key={blog.id}
            href={`/blog/${blog.id}`}
            className="text-teal-400 hover:underline"
          >
            {blog.title} →
          </Link>
        ))}
      </div>
    </div>
  );
}

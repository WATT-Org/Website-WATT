import Link from "next/link";

export default function RobotArmPage() {
  const otherBlogs = [
    { id: "second-blog", title: "3D Printing with Recycled Materials" },
    { id: "third-blog", title: "Software Development for Robotics" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Building a Modular Robot Arm</h1>
      <p className="text-gray-200 mb-6">
        Learn how we designed and built a modular robot arm, focusing on flexibility and ease of use for a variety of applications...
      </p>

      <h2 className="text-2xl font-semibold mb-4">Other Blogs</h2>
      <ul className="list-disc list-inside space-y-2">
        {otherBlogs.map((blog) => (
          <li key={blog.id}>
            <Link
              href={`/blogs/${blog.id}`}
              className="text-teal-400 hover:underline"
            >
              {blog.title} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

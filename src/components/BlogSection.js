import Image from "next/image";

const blogs = [
  {
    id: 1,
    category: "Tech Insights",
    title: "The Future of Robotics",
    desc: "Explore the latest trends and advancements in robotics technology.",
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    category: "Innovation Spotlight",
    title: "3D Printing Revolution",
    desc: "Discover how 3D printing is transforming manufacturing and design.",
    image: "/images/blog2.jpg",
  },
  {
    id: 3,
    category: "Software Trends",
    title: "Data Analysis in the Digital Age",
    desc: "Learn about the importance of data analysis in modern software development.",
    image: "/images/blog3.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold">From The Blog</h2>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg gap-6"
          >
            <div className="flex-1 space-y-2">
              <p className="text-sm text-blue-400 font-semibold">
                {blog.category}
              </p>
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p className="text-gray-300">{blog.desc}</p>
            </div>
            <Image
              src={blog.image}
              alt={blog.title}
              width={200}
              height={150}
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

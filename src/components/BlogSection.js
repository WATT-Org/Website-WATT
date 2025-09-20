// src/app/components/BlogSection.js
import Image from "next/image";
import Link from "next/link";

// Make sure the id matches the folder name under src/app/blog/
import  blogs  from "@/data/blogs";

export default function BlogSection() {
  return (
    <section className="bg-gray-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          From the Blog
        </h2>

        <div className="space-y-16">
          {blogs.map((blog, index) => (
            <div key={blog.id}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image Left or Right (alternate) */}
                <div
                  className={`w-full h-64 relative rounded-lg overflow-hidden shadow-lg ${
                    index % 2 !== 0 ? "order-2 md:order-2" : ""
                  }`}
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div
                  className={`${index % 2 !== 0 ? "order-1 md:order-1" : ""}`}
                >
                  <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                  <p className="text-gray-400 mb-4">{blog.description}</p>
                  {/* Correct link to static page */}
                  <Link
                    href={`/blogs/${blog.id}/`}
                    className="text-teal-400 font-medium hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

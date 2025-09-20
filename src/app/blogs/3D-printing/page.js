import Link from "next/link";

export default function ThreeDPrintingPage() {
  const otherBlogs = [
    { id: "AI-and-robotics", title: "AI and Robotics: Changing How We Live and Work" },
    { id: "pcb-led", title: "Making PCBs and LED Bulbs" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">3D Printing: Building Ideas, One Layer at a Time</h1>
      <p className="text-gray-200 mb-6">
        3D printing is a way of turning ideas into real things. It takes a design on a computer and builds it, layer by layer, until you can hold it in your hands. What was once only in your mind becomes something you can see and touch.
<br /><br />
The process starts with a simple thought—maybe a phone stand, a small toy, or even a useful tool. That thought becomes a digital model, and the printer carefully follows it, adding thin layers of material to build the object. The soft sound of the printer working feels almost like quiet magic.
<br /><br />
One of the best things about 3D printing is that anyone can try it. You don’t need a big workshop or special skills—just patience and creativity. Even small mistakes, like a print that didn’t finish or a shape that came out wrong, are part of learning. Every failed print teaches you something new.
<br /><br />
3D printing is used in many areas today. Artists make unique sculptures, engineers create quick prototypes, architects build small models of buildings, and doctors even print custom prosthetics to help people. It’s not just about making things—it’s about solving problems and creating new possibilities.
<br /><br />
Watching a printer work is exciting. It’s a reminder that big changes can start small. Layer by layer, simple plastic becomes something useful or beautiful. 3D printing shows us that the future isn’t far away—it’s being built right now, one layer at a time.
<br /><br />
      </p>

      <h2 className="text-2xl font-semibold mb-4">Other Blogs</h2>
      <div className="space-y-3">
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
    </div>
  );
}

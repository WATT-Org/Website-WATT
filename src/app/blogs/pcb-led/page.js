import Link from "next/link";
import Image from "next/image";

export default function ThirdBlogPage() {
  const otherBlogs = [
    { id: "AI-and-robotics", title: "AI and Robotics: Changing How We Live and Work" },
    { id: "3D-printing", title: "3D Printing: Building Ideas, One Layer at a Time" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Making PCBs and LED Bulbs</h1>

      {/* Image */}
      <div className="w-full h-64 relative mb-6 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/blogs/PCB.jpg" // Replace with your actual image path
          alt="PCBs and LED Bulbs"
          fill
          className="object-cover"
        />
      </div>

      <p className="text-gray-200 mb-6">
        Making a Printed Circuit Board (PCB) starts with a design. First, the circuit is drawn using design software, showing where each component will go. This design is then transferred onto a copper board, usually by printing it on a special paper or using a UV light process. The board is then placed in an etching solution, which removes the extra copper and leaves only the paths needed for the circuit. After etching, holes are drilled where components like resistors, capacitors, and LEDs will be placed. The final step is soldering these components carefully onto the board, connecting them so electricity flows correctly. After checking the connections, the PCB is ready to work in an electronic device.
        <br /><br />
        Making an LED bulb also involves a PCB. The LEDs are placed on a small PCB, and the circuit is designed to control the flow of electricity so the LEDs light up efficiently. Heat management is important, so often the PCB is attached to a metal base to prevent overheating. After soldering the LEDs and adding resistors or drivers, the assembly is enclosed in a bulb casing with a cover to diffuse light evenly. Finally, the bulb is tested to make sure it works safely and shines brightly.
        <br /><br />
        The process of making PCBs and LED bulbs teaches patience and precision. Every step—from designing the circuit to soldering the components—requires care. For beginners, it is a rewarding way to learn how electronics work in real life. By making your own PCB and LED assembly, you can see how small components come together to create a device that lights up, quite literally bringing your ideas to life.
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

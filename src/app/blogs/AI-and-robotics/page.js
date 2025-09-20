import Link from "next/link";
import Image from "next/image";

export default function RobotArmPage() {
  const otherBlogs = [
    { id: "3D-printing", title: "3D Printing: Building Ideas, One Layer at a Time" },
    { id: "pcb-led", title: "Making PCBs and LED Bulbs" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">AI and Robotics: Changing How We Live and Work</h1>

      {/* Image */}
      <div className="w-full h-64 relative mb-6 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/blogs/Ai-and-robotics.jpg" // Replace with your actual image path
          alt="AI and Robotics"
          fill
          className="object-cover"
        />
      </div>

      <p className="text-gray-200 mb-6">
        Artificial Intelligence (AI) and robotics are no longer just ideas from science fiction—they are part of our everyday world. AI is like the brain that helps machines learn, make decisions, and understand patterns. Robotics gives these machines a body so they can move, pick things up, or explore the world around them. When combined, AI and robotics create powerful tools that can think, act, and help us in many different ways.
        <br /><br />
        In factories, robots guided by AI build cars, electronics, and other products with incredible speed and accuracy. In hospitals, robotic arms perform delicate surgeries while AI tools help doctors detect diseases earlier and more reliably. Even in our homes, we see AI and robotics working quietly around us—robot vacuum cleaners keep our floors tidy, voice assistants like Alexa and Siri answer questions, and smart devices make daily tasks easier. Beyond our planet and oceans, robots are sent to Mars or deep underwater to explore places that are too dangerous or unreachable for humans.
        <br /><br />
        The impact of AI and robotics is huge. They save time, improve safety, and allow us to solve problems that might be too complex or risky for people alone. For example, robots can clean up toxic waste, deliver supplies during disasters, or assist rescue teams in dangerous conditions. These technologies don’t just make work faster—they open new possibilities we never thought were possible.
        <br /><br />
        However, as exciting as AI and robotics are, they also bring important questions. Some jobs may change or disappear because of automation, and we must ensure that AI makes fair and responsible decisions. Understanding how these technologies work helps us prepare for these changes and use them wisely.
        <br /><br />
        The future of AI and robotics is full of potential. Self-driving cars, personal helper robots, and advanced medical tools are already being developed. For students, creators, and innovators, this is the perfect time to get involved—learning how to build simple robots, experiment with AI-powered tools, or create solutions for real-world problems. Every small idea or experiment can grow into something big.
        <br /><br />
        AI and robotics show us that the future isn’t far away—it’s being built today. With every smart idea and every careful step forward, we are shaping a world where technology and creativity work hand in hand to make life better for everyone.
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

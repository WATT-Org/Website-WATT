import Image from "next/image";

const projects = [
  { id: 1, src: "/images/project1.jpg" },
  { id: 2, src: "/images/project2.jpg" },
  { id: 3, src: "/images/project3.jpg" },
  { id: 4, src: "/images/project4.jpg" },
  { id: 5, src: "/images/project5.jpg" },
  { id: 6, src: "/images/project6.jpg" },
];

export default function ProjectGrid() {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="rounded-lg overflow-hidden">
            <Image
              src={p.src}
              alt={`Project ${p.id}`}
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

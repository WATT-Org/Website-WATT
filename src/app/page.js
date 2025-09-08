<<<<<<< HEAD
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow">Project 1</div>
          <div className="bg-gray-800 p-6 rounded-lg shadow">Project 2</div>
          <div className="bg-gray-800 p-6 rounded-lg shadow">Project 3</div>
        </div>
      </section>
    </>
=======
import ProjectGrid from "../components/ProjectGrid";
import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";

export default function Home() {
  return (
    <div className="space-y-16 py-10">
      {/* Projects */}
      <ProjectGrid />

      {/* About Us */}
      <AboutSection />

      {/* Blog Section */}
      <BlogSection />
    </div>
>>>>>>> 58b44fe1d9da3521a4c9bbfc80b207fbf05e35a0
  );
}

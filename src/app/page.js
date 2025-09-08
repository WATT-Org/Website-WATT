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
  );
}

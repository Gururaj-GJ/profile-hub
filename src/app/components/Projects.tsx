import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 border-y">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map(p => (
            <a key={p.title} href={p.link} target="_blank" className="block rounded-2xl border p-5 hover:shadow-md transition">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => <span key={t} className="text-xs rounded-full border px-2 py-1">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

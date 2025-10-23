export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-4 text-gray-600">
        Reach out via email or connect on LinkedIn and GitHub.
      </p>
      <div className="mt-6 flex gap-4 text-sm">
        <a href="mailto:gururaj@example.com" className="px-4 py-2 rounded-xl border hover:bg-gray-50">
          Email
        </a>
        <a href="https://linkedin.com/in/gururaj-gj" target="_blank" className="px-4 py-2 rounded-xl border hover:bg-gray-50">
          LinkedIn
        </a>
        <a href="https://github.com/Gururaj-GJ" target="_blank" className="px-4 py-2 rounded-xl border hover:bg-gray-50">
          GitHub
        </a>
      </div>
    </section>
  );
}

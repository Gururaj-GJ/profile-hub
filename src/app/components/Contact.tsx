export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-4 text-gray-600">
        Based in Bengaluru, India. Available for on-site, hybrid, and remote opportunities globally.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <a
          href="mailto:gururaj.gj.guru@gmail.com"
          className="px-4 py-2 rounded-xl border hover:bg-gray-50"
        >
          📧 gururaj.gj.guru@gmail.com
        </a>
        <a
          href="tel:+918971599238"
          className="px-4 py-2 rounded-xl border hover:bg-gray-50"
        >
          📱 +91 89715 99238
        </a>
        <a
          href="https://linkedin.com/in/gururaj-gj-52a062b4"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl border hover:bg-gray-50"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://github.com/Gururaj-GJ"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl border hover:bg-gray-50"
        >
          💻 GitHub
        </a>
      </div>
      <p className="mt-6 text-sm text-gray-500">
        📍 Bengaluru, Karnataka, India
      </p>
    </section>
  );
}

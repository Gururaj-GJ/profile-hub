const items = [
  "Next.js / React","TypeScript / Node.js","Tailwind CSS / UI",
  "Python / Pandas / scikit-learn","REST APIs / Webhooks",
  "Vercel / Netlify / GitHub Actions",
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <ul className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
        {items.map(s => <li key={s} className="rounded-xl border px-3 py-2">{s}</li>)}
      </ul>
    </section>
  );
}

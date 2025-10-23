import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold">Profile Hub</a>
          <div className="hidden sm:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
        </nav>
      </header>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Gururaj GJ — Profile Hub
        </div>
      </footer>
    </main>
  );
}

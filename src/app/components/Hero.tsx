export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Hello, I'm [Your Name]
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer | UI/UX Enthusiast | Problem Solver
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

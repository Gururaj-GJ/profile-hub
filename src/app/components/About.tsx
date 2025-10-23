export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate full-stack developer with a keen eye for creating
              beautiful and functional web applications. With expertise in modern
              web technologies, I bring ideas to life through clean code and
              intuitive design.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-2">
              <li>📍 Location: Your City</li>
              <li>💼 Experience: X+ years</li>
              <li>🎓 Education: Your Degree</li>
              <li>🌐 Languages: English, [Others]</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

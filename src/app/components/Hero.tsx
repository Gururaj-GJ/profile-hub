export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Hello, I'm Gururaj GJ
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          Fraud Risk Specialist | Bengaluru, India
        </p>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          Results-driven Fraud Risk Specialist with 6+ years experience in fraud detection, compliance, and risk investigations in e-commerce, fintech, payments, cloud. Specialized in AML, KYC, Transaction Monitoring, Merchant Risk Management, and AI automation.
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

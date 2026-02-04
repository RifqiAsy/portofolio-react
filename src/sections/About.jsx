export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-sm uppercase tracking-widest text-blue-600 mb-2">
            About Me
          </h3>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            I enjoy turning ideas into real interfaces
          </h2>

          <p className="text-gray-600 leading-relaxed">
            I’m a student who focuses on frontend development.
            I like experimenting with UI, animations, and clean layouts
            while continuously improving my skills through real projects.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6">
          <ul className="space-y-3 text-gray-700">
            <li>🎓 Student & Frontend Learner</li>
            <li>💻 React, Tailwind CSS</li>
            <li>🚀 Building projects & UI experiments</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

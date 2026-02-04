export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Git",
  ];

  return (
    <section id="skills" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white border rounded-full
                         text-sm text-gray-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

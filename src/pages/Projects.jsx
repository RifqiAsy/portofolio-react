import { Link } from "react-router-dom";
import projects from "../data/projects";
import ProjectCard from "../components/common/ProjectCard";

export default function Projects() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              All Projects
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Collection of my works and experiments
            </p>
          </div>

          {/* BACK TO HOME */}
          <Link
            to="/"
            className="text-sm text-blue-600 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

      </div>
    </main>
  );
}

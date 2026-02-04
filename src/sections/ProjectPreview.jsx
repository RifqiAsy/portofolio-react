import { Link } from "react-router-dom";
import projects from "../data/projects";
import ProjectCard from "../components/common/ProjectCard";

export default function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <p className="text-gray-500 mt-1">
            A few things I’ve built recently
          </p>
        </div>

        <Link
          to="/projects"
          className="text-sm text-blue-600 hover:underline"
        >
          View all →
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

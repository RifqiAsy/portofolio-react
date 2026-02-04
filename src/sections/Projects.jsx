import { Link } from "react-router-dom";
import ProjectCard from "../components/common/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  const featured = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 ">
        
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Projects
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Selected works and experiments
            </p>
          </div>

          <Link
            to="/projects"
            className="text-sm text-blue-600 hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

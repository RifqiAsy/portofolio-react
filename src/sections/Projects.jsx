import { Link } from "react-router-dom";
import ProjectCard from "../components/common/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  const featured = projects.slice(0, 3);
  const isEmpty = featured.length === 0;

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Projects
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Selected works and experiments
            </p>
          </div>

          {!isEmpty && (
            <Link
              to="/projects"
              className="text-sm text-blue-600 hover:underline"
            >
              View All →
            </Link>
          )}
        </div>

        {/* Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {isEmpty ? (
            <div className="col-span-full">
              <div className="border border-dashed rounded-lg p-10 text-center bg-white">
                <h3 className="text-lg font-medium text-gray-800">
                  Projects in Progress
                </h3>
                <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
                  New projects are currently being developed and refined.
                  This section will be updated as work progresses.
                </p>
                <span className="inline-block mt-4 text-xs text-gray-400">
                  Coming Soon
                </span>
              </div>
            </div>
          ) : (
            featured.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

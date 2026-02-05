import { ExternalLink, Github, Lock } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  demoUrl,
  repoUrl,
  isPlaceholder,
}) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition ${
        isPlaceholder
          ? "bg-gray-50 border-dashed"
          : "bg-white hover:shadow-md"
      }`}
    >
      {/* IMAGE */}
      <div className="aspect-video bg-gray-100 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-sm flex items-center gap-2">
            <Lock size={14} />
            Preview coming soon
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-sm text-gray-600">
          {description}
        </p>

        {/* TECH */}
        {tech?.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs text-gray-500">
            {tech.map((item, i) => (
              <span key={i} className="bg-gray-100 px-2 py-1 rounded">
                {item}
              </span>
            ))}
          </div>
        )}

        {/* LINKS */}
        {!isPlaceholder && (
          <div className="flex gap-4 text-sm mt-2">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:underline"
              >
                <ExternalLink size={14} /> Demo
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-gray-700 hover:underline"
              >
                <Github size={14} /> Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

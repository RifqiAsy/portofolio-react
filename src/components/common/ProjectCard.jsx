export default function ProjectCard({
  title,
  description,
  image,
  tech = [],
}) {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition">
      
      {/* IMAGE */}
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((item, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

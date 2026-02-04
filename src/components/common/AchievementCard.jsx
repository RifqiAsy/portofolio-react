export default function AchievementCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-xl border overflow-hidden hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="font-semibold text-gray-900 mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

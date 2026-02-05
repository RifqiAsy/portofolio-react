import { FileText, Lock, ExternalLink } from "lucide-react";

export default function AchievementCard({
  title,
  issuer,
  year,
  thumbnail,
  fileUrl,
  fileType,
  isPlaceholder,
}) {
  return (
    <div
      className={`rounded-xl border overflow-hidden transition ${
        isPlaceholder
          ? "border-dashed bg-gray-50"
          : "bg-white hover:shadow-md"
      }`}
    >
      {/* THUMBNAIL */}
      <div className="aspect-video bg-gray-100 flex items-center justify-center">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Lock size={14} />
            Preview coming soon
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-2">
        <h3 className="font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-sm text-gray-600">
          {issuer} • {year}
        </p>

        {/* FILE LINK */}
        {!isPlaceholder && fileUrl && (
          <a
            href={fileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline mt-2"
          >
            {fileType === "pdf" ? (
              <>
                <FileText size={14} />
                View Certificate
              </>
            ) : (
              <>
                <ExternalLink size={14} />
                View File
              </>
            )}
          </a>
        )}
      </div>
    </div>
  );
}

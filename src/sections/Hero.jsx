import profile from "../assets/Foto(1).jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-24 pb-28">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Rifqi Asyla Wahyu
          </h1>

          <p className="mt-3 text-blue-600 font-medium">
            Frontend Developer
          </p>

          <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
            I build clean, responsive, and user-friendly web interfaces
            using modern frontend technologies.
          </p>

          {/* CTA */}
          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/projects"
              className="
                bg-blue-600 text-white px-6 py-3 rounded-xl
                hover:bg-blue-700 transition
                hover:shadow-lg hover:-translate-y-0.5
              "
            >
              View Projects
            </Link>

            <a
              href="#projects"
              className="text-sm text-gray-600 hover:text-blue-600 transition"
            >
              See featured projects ↓
            </a>
          </div>
        </div>

        {/* PHOTO */}
        <div className="flex justify-center md:justify-end">
          <div
            className="
              relative w-64 h-64
              rounded-2xl overflow-hidden
              shadow-xl
            "
          >
            <img
              src={profile}
              alt="Rifqi Asyla"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

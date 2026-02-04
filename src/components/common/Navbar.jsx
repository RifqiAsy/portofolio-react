import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b z-50">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="font-bold text-lg">
          Rifqi<span className="text-blue-600">.</span>
        </Link>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {isHome && (
            <>
              <li><a href="#about" className="text-gray-600 hover:text-blue-600">About</a></li>
              <li><a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </>
          )}

          {!isHome && (
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
            </li>
          )}

          <li>
            <Link
              to="/projects"
              className={`hover:text-blue-600 transition ${
                location.pathname === "/projects"
                  ? "text-blue-600"
                  : "text-gray-600"
              }`}
            >
              All Projects
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <a
          href={isHome ? "#contact" : "/#contact"}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
        >
          Contact
        </a>

      </nav>
    </header>
  );
}

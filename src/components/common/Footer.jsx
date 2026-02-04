export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} Rifqi — Built with React & Tailwind
      </div>
    </footer>
  )
}

import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-white/80 shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center gap-2">
        <img src="/logo192.png" alt="Logo" className="h-8 w-8" />
        <span className="font-bold text-xl text-gray-800">TodoApp</span>
      </div>
      <nav className="flex gap-6">
        <Link
          to="/"
          className={`font-medium hover:text-blue-600 transition-colors ${location.pathname === "/" ? "text-blue-600" : "text-gray-700"}`}
        >
          Home
        </Link>
        <Link
          to="/todos"
          className={`font-medium hover:text-blue-600 transition-colors ${location.pathname === "/todos" ? "text-blue-600" : "text-gray-700"}`}
        >
          Manage Todos
        </Link>
      </nav>
    </header>
  );
}

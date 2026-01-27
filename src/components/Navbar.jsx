import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-bold">
            Logisfera
          </Link>

          <nav className="hidden md:flex gap-3 text-sm opacity-90">
            <Link to="/learning-path">Learning Path</Link>
            <Link to="/ar">AR Viewer</Link>
            <Link to="/quiz">Quiz</Link>
            <Link to="/calculator" className="font-semibold">
              Calculator
            </Link>
            <Link to="/admin">Admin</Link>
          </nav>
        </div>

        <div className="text-sm text-gray-600">Prototype LKTI</div>
      </div>
    </header>
  );
}

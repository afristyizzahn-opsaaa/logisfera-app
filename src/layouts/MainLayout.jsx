import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-6xl mx-auto p-6">
        <Outlet />
      </main>

      <footer className="text-center text-xs p-4 text-yellow-500">
        Logisfera — LKTI Prototype
      </footer>
    </div>
  );
}

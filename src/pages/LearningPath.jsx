import React from "react";
import { Link } from "react-router-dom";

export default function LearningPath() {
  const modules = [
    { id: 1, title: "Basics", desc: "Theory + example" },
    { id: 2, title: "Geometry in AR", desc: "Visualize shapes with AR (demo)" },
    { id: 3, title: "Practice Problems", desc: "Interactive questions" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Learning Path</h2>
      <div className="grid gap-3">
        {modules.map((m) => (
          <div
            key={m.id}
            className="p-3 bg-white rounded shadow-sm flex justify-between items-center"
          >
            <div>
              <div className="font-medium">{m.title}</div>
              <div className="text-xs opacity-80">{m.desc}</div>
            </div>
            <div className="flex gap-2">
              <Link to="/calculator" className="text-sm text-blue-600">
                Try Calculator
              </Link>
              <button className="text-sm border rounded px-2 py-1 hover:bg-gray-100">
                Open Lesson
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

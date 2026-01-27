import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import LearningPath from './pages/LearningPath';
import ARViewer from './pages/ARViewer';
import Quiz from './pages/Quiz';
import Admin from './pages/Admin';
import Calculator from './pages/Calculator';
import MainLayout from "./layouts/MainLayout";
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* HOME – TANPA NAVBAR */}
        <Route path="/" element={<Home />} />

        {/* HALAMAN LAIN - PAKAI NAVBAR */}
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-gray-50">
              <Navbar />

              <main className="max-w-6xl mx-auto p-6">
                <Routes>
                   <Route element={<MainLayout />}></Route>
                  <Route path="/learning-path" element={<LearningPath />} />
                  <Route path="/ar" element={<ARViewer />} />
                  <Route path="/quiz" element={<Quiz />} />
                  <Route path="/calculator" element={<Calculator />} />
                  <Route path="/admin" element={<Admin />} />
                </Routes>
              </main>

              <footer className="text-center text-xs p-4 text-YELLOW-500">
                Logisfera — LKTI Prototype
              </footer>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
